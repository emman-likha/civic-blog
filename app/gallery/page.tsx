"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/motion'
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  "All",
  "First Generation",
  "Second Generation", 
  "Third Generation",
  "Interior",
  "Exterior"
]

const photos = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/14861362/pexels-photo-14861362.jpeg?auto=compress&cs=tinysrgb&w=1280",
    alt: "First Generation Civic on display",
    category: ["All", "First Generation", "Exterior"]
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/9254819/pexels-photo-9254819.jpeg?auto=compress&cs=tinysrgb&w=1280",
    alt: "Second Generation Civic side view",
    category: ["All", "Second Generation", "Exterior"]
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/12072306/pexels-photo-12072306.jpeg?auto=compress&cs=tinysrgb&w=1280",
    alt: "Third Generation Civic front view",
    category: ["All", "Third Generation", "Exterior"]
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/10347832/pexels-photo-10347832.jpeg?auto=compress&cs=tinysrgb&w=1280",
    alt: "Classic Civic dashboard detail",
    category: ["All", "Second Generation", "Interior"]
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&w=1280",
    alt: "Steering wheel close-up",
    category: ["All", "Interior"]
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/3992834/pexels-photo-3992834.jpeg?auto=compress&cs=tinysrgb&w=1280",
    alt: "Engine bay detail",
    category: ["All", "Second Generation"]
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1280",
    alt: "Classic Civic on the road",
    category: ["All", "Third Generation", "Exterior"]
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1280",
    alt: "First Generation Civic front angle",
    category: ["All", "First Generation", "Exterior"]
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1280",
    alt: "Classic Civic in action",
    category: ["All", "Second Generation", "Exterior"]
  }
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  
  const filteredPhotos = photos.filter(photo => 
    photo.category.includes(activeCategory)
  )
  
  const handlePrev = () => {
    if (selectedPhoto === null) return
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto)
    const prevIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    setSelectedPhoto(filteredPhotos[prevIndex].id)
  }
  
  const handleNext = () => {
    if (selectedPhoto === null) return
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto)
    const nextIndex = (currentIndex + 1) % filteredPhotos.length
    setSelectedPhoto(filteredPhotos[nextIndex].id)
  }
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0 z-0 h-96 bg-gradient-to-b from-chart-3/10 to-transparent"></div>
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="font-playfair text-3xl font-bold md:text-5xl">
              Classic Civic <span className="text-chart-1">Gallery</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Browse our curated collection of classic Honda Civic photographs,
              showcasing these iconic vehicles through the years.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? "bg-chart-1 text-white hover:bg-chart-1/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {filteredPhotos.map((photo, index) => (
              <FadeIn key={photo.id} delay={0.05 * index}>
                <Dialog onOpenChange={(open) => open ? setSelectedPhoto(photo.id) : setSelectedPhoto(null)}>
                  <DialogTrigger asChild>
                    <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                        <Camera className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
                    <div className="relative flex h-full w-full flex-col items-center justify-center">
                      <div className="relative aspect-auto h-auto max-h-[80vh] w-auto max-w-full overflow-hidden rounded-lg">
                        <Image
                          src={selectedPhoto !== null ? photos.find(p => p.id === selectedPhoto)?.src || "" : ""}
                          alt={selectedPhoto !== null ? photos.find(p => p.id === selectedPhoto)?.alt || "" : ""}
                          width={1280}
                          height={720}
                          className="h-auto w-auto object-contain"
                        />
                      </div>
                      
                      <div className="absolute left-0 flex h-full w-16 items-center justify-center">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={handlePrev} 
                          className="rounded-full bg-background/80 text-foreground hover:bg-background"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                      </div>
                      
                      <div className="absolute right-0 flex h-full w-16 items-center justify-center">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={handleNext} 
                          className="rounded-full bg-background/80 text-foreground hover:bg-background"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-2 top-2 rounded-full bg-background/80 text-foreground hover:bg-background"
                        onClick={() => setSelectedPhoto(null)}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </FadeIn>
            ))}
          </div>
          
          {filteredPhotos.length === 0 && (
            <div className="mt-12 flex flex-col items-center justify-center rounded-lg border border-border/50 bg-card/50 p-12 text-center">
              <Camera className="h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-xl font-medium">No images found</h3>
              <p className="mt-2 text-muted-foreground">
                No images were found for the selected category.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setActiveCategory("All")}
                className="mt-6"
              >
                View All Photos
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Submit Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <Camera className="mx-auto h-12 w-12 text-chart-1" />
              <h2 className="mt-4 font-playfair text-3xl font-bold md:text-4xl">
                Submit Your Classic Civic Photos
              </h2>
              <p className="mt-4 text-muted-foreground">
                Do you own a classic Civic or have photos of these iconic vehicles? 
                Share them with our community and help preserve the legacy of these 
                remarkable automobiles.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="mt-8 rounded-lg border border-border/50 bg-card p-6">
                <form className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="model" className="mb-1 block text-sm font-medium">
                      Civic Model/Year
                    </label>
                    <input
                      id="model"
                      type="text"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      placeholder="1979 Honda Civic CVCC"
                    />
                  </div>
                  
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Upload Photos
                    </label>
                    <div className="flex items-center justify-center rounded-md border border-dashed border-border bg-background p-8">
                      <div className="flex flex-col items-center">
                        <Camera className="h-8 w-8 text-muted-foreground" />
                        <p className="mt-2 text-sm text-muted-foreground">
                          Drag photos here or click to browse
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          JPEG, PNG, WEBP • Max 10MB
                        </p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Select Files
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="mb-1 block text-sm font-medium">
                      Description
                    </label>
                    <textarea
                      id="description"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      placeholder="Tell us about your Civic..."
                      rows={3}
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="mt-2 bg-chart-1 text-white hover:bg-chart-1/90">
                    Submit Photos
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
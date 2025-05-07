"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronRight, Info, ShieldCheck, Gauge, Clock, Calendar, Users, Star } from 'lucide-react'
import { FadeIn } from '@/components/motion'

// Model data
const models = [
  {
    id: 'first-gen',
    name: 'First Generation',
    years: '1973-1979',
    description: 'The original Civic that revolutionized the compact car market with its fuel efficiency during the oil crisis.',
    image: 'https://images.pexels.com/photos/14861362/pexels-photo-14861362.jpeg?auto=compress&cs=tinysrgb&w=1280',
    features: [
      'Transverse engine front-wheel drive layout',
      'Available as a two-door coupe, three and five-door hatchback, as well as a five-door station wagon',
      '1.2L or 1.5L engine options',
      'Revolutionary CVCC engine technology (introduced in 1975)',
      'Impressive fuel economy (up to 40 MPG)'
    ],
    specs: {
      engine: '1.2L/1.5L 4-cylinder',
      power: '50-63 hp',
      transmission: '4-speed manual/2-speed automatic',
      weight: '1,500 lbs (approx.)',
      fuelEconomy: '32-40 mpg',
      acceleration: '12.0s (0-60 mph)'
    }
  },
  {
    id: 'second-gen',
    name: 'Second Generation',
    years: '1979-1983',
    description: 'A more refined Civic with improved styling, increased interior space and the innovative CVCC-II engine.',
    image: 'https://images.pexels.com/photos/9254819/pexels-photo-9254819.jpeg?auto=compress&cs=tinysrgb&w=1280',
    features: [
      'More angular styling with increased dimensions',
      'Available as three-door hatchback, five-door hatchback, four-door sedan, and five-door wagon',
      'CVCC-II engine with improved emissions control',
      'Introduction of the sporty "S" model',
      'Five-speed manual transmission option'
    ],
    specs: {
      engine: '1.3L/1.5L 4-cylinder',
      power: '55-67 hp',
      transmission: '4/5-speed manual/2-speed automatic',
      weight: '1,700 lbs (approx.)',
      fuelEconomy: '35-42 mpg',
      acceleration: '11.5s (0-60 mph)'
    }
  },
  {
    id: 'third-gen',
    name: 'Third Generation',
    years: '1983-1987',
    description: 'Featured the iconic boxy design with significant technological improvements and the introduction of the CRX variant.',
    image: 'https://images.pexels.com/photos/12072306/pexels-photo-12072306.jpeg?auto=compress&cs=tinysrgb&w=1280',
    features: [
      'Distinctive angular, boxy styling',
      'Introduction of the sporty CRX model',
      'Available with fuel injection on some models',
      'Improved suspension system',
      'More powerful Si (Sport Injection) variant introduced'
    ],
    specs: {
      engine: '1.3L/1.5L 4-cylinder',
      power: '60-91 hp',
      transmission: '5-speed manual/3-speed automatic',
      weight: '1,800 lbs (approx.)',
      fuelEconomy: '32-52 mpg (HF model)',
      acceleration: '9.5s (0-60 mph, Si model)'
    }
  }
]

export default function Models() {
  const [activeTab, setActiveTab] = useState('first-gen')
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0 h-96 bg-gradient-to-b from-chart-1/10 to-transparent"></div>
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="font-playfair text-3xl font-bold md:text-5xl">
              Classic Civic <span className="text-chart-1">Models</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Explore the evolution of the classic Honda Civic through its first three 
              iconic generations that established its reputation for quality, efficiency, 
              and innovation.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <Tabs 
              defaultValue="first-gen" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="mt-12"
            >
              <TabsList className="w-full justify-start gap-2 overflow-x-auto sm:w-auto">
                {models.map((model) => (
                  <TabsTrigger 
                    key={model.id} 
                    value={model.id}
                    className="whitespace-nowrap data-[state=active]:bg-chart-1 data-[state=active]:text-white"
                  >
                    {model.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {models.map((model) => (
                <TabsContent key={model.id} value={model.id} className="border-none p-0">
                  <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="relative overflow-hidden rounded-lg bg-card/50">
                      <div className="absolute top-4 left-4 z-10 rounded bg-background/90 px-3 py-1 text-sm">
                        {model.years}
                      </div>
                      <Image 
                        src={model.image} 
                        alt={model.name} 
                        width={640}
                        height={400}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                    
                    <div>
                      <h2 className="font-playfair text-2xl font-bold md:text-3xl">
                        {model.name}
                      </h2>
                      <p className="mt-4 text-muted-foreground">{model.description}</p>
                      
                      <h3 className="mt-8 flex items-center gap-2 text-xl font-semibold">
                        <Info className="h-5 w-5 text-chart-1" /> Key Features
                      </h3>
                      <ul className="mt-3 grid gap-y-3">
                        {model.features.map((feature, index) => (
                          <li key={index} className="flex gap-2 text-muted-foreground">
                            <ChevronRight className="mt-1 h-4 w-4 flex-shrink-0 text-chart-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h3 className="mt-8 flex items-center gap-2 text-xl font-semibold">
                        <Gauge className="h-5 w-5 text-chart-1" /> Specifications
                      </h3>
                      <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3">
                        {Object.entries(model.specs).map(([key, value]) => (
                          <div key={key} className="rounded-md border border-border/50 bg-card/50 p-3">
                            <p className="text-xs uppercase text-muted-foreground">
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                            </p>
                            <p className="mt-1 font-medium">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </FadeIn>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <FadeIn>
            <h2 className="text-center font-playfair text-3xl font-bold md:text-4xl">
              Evolution Comparison
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-chart-1"></div>
            <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
              See how the classic Civic evolved through its first three generations with
              these key performance and design comparisons.
            </p>
          </FadeIn>
          
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[768px] border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-border/70 p-4 text-left">Feature</th>
                  {models.map((model) => (
                    <th key={model.id} className="border-b border-border/70 p-4 text-left">
                      {model.name} <span className="block text-sm font-normal text-muted-foreground">({model.years})</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Engine Size', values: ['1.2L/1.5L', '1.3L/1.5L', '1.3L/1.5L'] },
                  { name: 'Max Power', values: ['63 hp', '67 hp', '91 hp (Si)'] },
                  { name: 'Weight', values: ['1,500 lbs', '1,700 lbs', '1,800 lbs'] },
                  { name: 'Top Speed', values: ['90 mph', '95 mph', '112 mph (Si)'] },
                  { name: 'Fuel Economy', values: ['40 mpg', '42 mpg', '52 mpg (HF)'] },
                  { name: 'Key Innovation', values: ['CVCC Engine', 'CVCC-II', 'Fuel Injection'] }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border/30 hover:bg-card/70">
                    <td className="p-4 font-medium">{row.name}</td>
                    {row.values.map((value, i) => (
                      <td key={i} className="p-4 text-muted-foreground">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-lg border border-border/50 bg-card/50 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <FadeIn>
                  <h2 className="font-playfair text-2xl font-bold md:text-3xl">
                    Searching for a Classic Civic?
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    If you're looking to purchase, restore, or simply learn more about these 
                    iconic vehicles, our community can help. Connect with fellow enthusiasts 
                    and experts to find the perfect classic Civic for your collection.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button asChild className="bg-chart-1 text-white hover:bg-chart-1/90">
                      <Link href="/contact">Join Community</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/gallery">View Gallery</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <ShieldCheck className="h-8 w-8" />, title: "Expert Guidance", text: "Connect with restoration specialists" },
                  { icon: <Users className="h-8 w-8" />, title: "Owner Network", text: "Find fellow classic Civic owners" },
                  { icon: <Calendar className="h-8 w-8" />, title: "Events", text: "Attend meetups and car shows" },
                  { icon: <Star className="h-8 w-8" />, title: "Parts Locator", text: "Access to rare OEM components" }
                ].map((item, index) => (
                  <FadeIn key={index} delay={0.1 * index}>
                    <div className="rounded-md border border-border/50 bg-card p-4">
                      <div className="mb-3 text-chart-1">{item.icon}</div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
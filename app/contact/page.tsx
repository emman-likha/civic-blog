"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, Phone, MapPin, Car, Users, Wrench, Calendar } from 'lucide-react'
import { FadeIn } from '@/components/motion'

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false)
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setMessageSent(true)
    // In a real application, we would handle form submission here
  }
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0 z-0 h-96 bg-gradient-to-b from-chart-4/10 to-transparent"></div>
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="font-playfair text-3xl font-bold md:text-5xl">
              Connect with <span className="text-chart-1">Classic Civic</span> Community
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Reach out to fellow enthusiasts, ask questions about restoration, 
              or simply share your passion for these iconic vehicles.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-8 md:py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <Tabs defaultValue="contact" className="w-full">
                <TabsList className="mb-6 grid w-full grid-cols-3">
                  <TabsTrigger value="contact" className="data-[state=active]:bg-chart-1 data-[state=active]:text-white">
                    <Mail className="mr-2 h-4 w-4" /> Contact
                  </TabsTrigger>
                  <TabsTrigger value="membership" className="data-[state=active]:bg-chart-1 data-[state=active]:text-white">
                    <Users className="mr-2 h-4 w-4" /> Join Club
                  </TabsTrigger>
                  <TabsTrigger value="events" className="data-[state=active]:bg-chart-1 data-[state=active]:text-white">
                    <Calendar className="mr-2 h-4 w-4" /> Events
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="contact" className="space-y-6">
                  {messageSent ? (
                    <div className="rounded-lg border border-chart-1/30 bg-chart-1/10 p-6 text-center">
                      <div className="mx-auto rounded-full bg-chart-1/20 p-3 w-fit">
                        <MessageSquare className="h-8 w-8 text-chart-1" />
                      </div>
                      <h3 className="mt-4 text-xl font-medium">Message Sent!</h3>
                      <p className="mt-2 text-muted-foreground">
                        Thank you for reaching out. We'll get back to you shortly.
                      </p>
                      <Button 
                        onClick={() => setMessageSent(false)} 
                        variant="outline" 
                        className="mt-4"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input id="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="How can we help you?" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us more about your inquiry or question..." 
                          rows={6}
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-chart-1 text-white hover:bg-chart-1/90">
                        Send Message
                      </Button>
                    </form>
                  )}
                </TabsContent>
                
                <TabsContent value="membership" className="space-y-6">
                  <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                    <h3 className="text-xl font-medium">Join the Classic Civic Club</h3>
                    <p className="mt-2 text-muted-foreground">
                      Become a member of our enthusiast community and enjoy these benefits:
                    </p>
                    
                    <ul className="mt-4 space-y-2">
                      {[
                        "Access to exclusive events and meetups",
                        "Technical support from experienced owners",
                        "Quarterly newsletter with restoration tips",
                        "Discounts on parts and merchandise",
                        "Connection to a global network of Civic enthusiasts"
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-chart-1"></div>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <form className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="member-name">Your Name</Label>
                          <Input id="member-name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="member-email">Email Address</Label>
                          <Input id="member-email" type="email" placeholder="john@example.com" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="civic-model">Your Civic Model (if any)</Label>
                        <Input id="civic-model" placeholder="e.g., 1979 Civic CVCC" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="interests">Your Interests</Label>
                        <Textarea 
                          id="interests" 
                          placeholder="Tell us about your interest in classic Civics..." 
                          rows={4}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-chart-1 text-white hover:bg-chart-1/90">
                        Submit Application
                      </Button>
                    </form>
                  </div>
                </TabsContent>
                
                <TabsContent value="events" className="space-y-6">
                  <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                    <h3 className="text-xl font-medium">Upcoming Events</h3>
                    <p className="mt-2 text-muted-foreground">
                      Join us at these upcoming classic Civic events and meetups:
                    </p>
                    
                    <div className="mt-6 space-y-4">
                      {[
                        {
                          title: "Classic Honda Meet 2025",
                          date: "April 15-17, 2025",
                          location: "Los Angeles, CA",
                          description: "The largest gathering of classic Honda enthusiasts on the West Coast. Features a dedicated Civic showcase area."
                        },
                        {
                          title: "Restoration Workshop Series",
                          date: "Monthly - First Saturday",
                          location: "Chicago, IL",
                          description: "Hands-on restoration workshops focusing on different aspects of classic Civic maintenance and restoration."
                        },
                        {
                          title: "Civic Through the Ages Exhibit",
                          date: "June 10-15, 2025",
                          location: "Detroit, MI",
                          description: "Special museum exhibit showcasing the evolution of the Civic from the 1970s to present day."
                        }
                      ].map((event, index) => (
                        <div key={index} className="rounded-md border border-border bg-card p-4">
                          <h4 className="font-medium">{event.title}</h4>
                          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-chart-1" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-chart-1" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {event.description}
                          </p>
                          <Button className="mt-3 bg-chart-1 text-white hover:bg-chart-1/90" size="sm">Register</Button>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-medium">Suggest an Event</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Have an idea for a Civic-related event? Let us know!
                      </p>
                      <form className="mt-4 space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="event-name">Event Name</Label>
                            <Input id="event-name" placeholder="Classic Civic Meetup" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="event-location">Location</Label>
                            <Input id="event-location" placeholder="City, State" required />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="event-details">Event Details</Label>
                          <Textarea 
                            id="event-details" 
                            placeholder="Describe your event idea..." 
                            rows={3}
                            required
                          />
                        </div>
                        
                        <Button type="submit" className="bg-chart-1 text-white hover:bg-chart-1/90">
                          Submit Event
                        </Button>
                      </form>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </FadeIn>
            
            <FadeIn direction="left">
              <div className="flex h-full flex-col">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/3992834/pexels-photo-3992834.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                    alt="Classic Civic engine bay"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="mt-8 rounded-lg border border-border/50 bg-card/50 p-6">
                  <h3 className="text-xl font-medium">Get In Touch</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-chart-1/10 p-2 text-chart-1">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Our Location</p>
                        <p className="text-muted-foreground">
                          1234 Automotive Lane<br />
                          Classic City, CA 98765
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-chart-1/10 p-2 text-chart-1">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-muted-foreground">info@civicclassic.com</p>
                        <p className="text-muted-foreground">support@civicclassic.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-chart-1/10 p-2 text-chart-1">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-muted-foreground">Mon-Fri: 9am-5pm PST</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 rounded-lg border border-border/50 bg-card/50 p-6">
                  <h3 className="text-xl font-medium">Specialized Support</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-md border border-border bg-card p-4">
                      <div className="mb-3 text-chart-1">
                        <Car className="h-6 w-6" />
                      </div>
                      <h4 className="font-medium">Parts Locator</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Need help finding rare parts for your classic Civic? Our specialists can help.
                      </p>
                      <Button variant="link" className="mt-2 h-auto p-0 text-chart-1">
                        Contact Parts Team
                      </Button>
                    </div>
                    
                    <div className="rounded-md border border-border bg-card p-4">
                      <div className="mb-3 text-chart-1">
                        <Wrench className="h-6 w-6" />
                      </div>
                      <h4 className="font-medium">Restoration Advice</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Get expert guidance on your restoration project from experienced builders.
                      </p>
                      <Button variant="link" className="mt-2 h-auto p-0 text-chart-1">
                        Talk to an Expert
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <FadeIn>
            <h2 className="text-center font-playfair text-3xl font-bold md:text-4xl">
              Find Us
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-chart-1"></div>
          </FadeIn>
          
          <div className="mt-8 rounded-lg border border-border overflow-hidden">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="https://images.pexels.com/photos/408503/pexels-photo-408503.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Location map"
                fill
                className="object-cover"
              />
              
              <div className="absolute left-0 top-0 h-full w-full bg-black/30"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-chart-1/80 p-4 shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "By Car", description: "Located just off Highway 101, Exit 25. Free parking available on-site." },
              { title: "By Public Transit", description: "Bus routes 12, 15, and 22 stop directly in front of our building." },
              { title: "Opening Hours", description: "Monday to Friday: 9am - 5pm\nSaturday: 10am - 4pm\nSunday: Closed" },
              { title: "Appointments", description: "Scheduling an appointment is recommended for technical consultations." }
            ].map((item, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="rounded-lg border border-border/50 bg-card p-5 h-full">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
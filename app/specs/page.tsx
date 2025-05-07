"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { 
  Tabs, TabsContent, TabsList, TabsTrigger,
  Accordion, AccordionContent, AccordionItem, AccordionTrigger 
} from '@/components/ui/accordion'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ArrowDown, Gauge, Settings, Info, BarChart, Filter, PenTool as Tool, Zap } from 'lucide-react'
import { FadeIn } from '@/components/motion'

// Specs data for different generations
const generations = [
  {
    id: 'first-gen',
    name: 'First Generation',
    years: '1973-1979',
    image: 'https://images.pexels.com/photos/14861362/pexels-photo-14861362.jpeg?auto=compress&cs=tinysrgb&w=1280',
    dimensions: {
      length: '139.8 in (3550 mm)',
      width: '59.8 in (1520 mm)',
      height: '52.0 in (1320 mm)',
      wheelbase: '86.6 in (2200 mm)',
      weight: '1,500 lbs (680 kg)'
    },
    engine: {
      type: '4-cylinder, water-cooled, OHC',
      displacement: {
        initial: '1,169 cc (1.2L)',
        cvcc: '1,488 cc (1.5L) CVCC'
      },
      compression: '8.5:1 (CVCC: 8.0:1)',
      power: '50 hp @ 5,500 rpm (1.2L), 52-63 hp @ 5,000 rpm (1.5L CVCC)',
      torque: '68 lb-ft @ 3,500 rpm (1.5L CVCC)',
      fuelSystem: 'Carburetor (CVCC: Stratified charge)'
    },
    transmission: {
      manual: '4-speed',
      automatic: '2-speed Hondamatic'
    },
    performance: {
      topSpeed: '90 mph (145 km/h)',
      acceleration: '12.0s (0-60 mph)',
      fuelEconomy: '32 city / 40 highway mpg'
    },
    suspension: {
      front: 'MacPherson strut',
      rear: 'Independent semi-trailing arm'
    },
    brakes: {
      front: 'Disc',
      rear: 'Drum'
    },
    features: [
      'Front-wheel drive',
      'Transverse engine layout',
      'CVCC engine technology (1975+)',
      'Available in hatchback and station wagon body styles',
      'Responsive handling for its era'
    ]
  },
  {
    id: 'second-gen',
    name: 'Second Generation',
    years: '1979-1983',
    image: 'https://images.pexels.com/photos/9254819/pexels-photo-9254819.jpeg?auto=compress&cs=tinysrgb&w=1280',
    dimensions: {
      length: '147.6 in (3750 mm)',
      width: '61.8 in (1570 mm)',
      height: '52.4 in (1330 mm)',
      wheelbase: '88.6 in (2250 mm)',
      weight: '1,700 lbs (770 kg)'
    },
    engine: {
      type: '4-cylinder, water-cooled, OHC',
      displacement: {
        initial: '1,335 cc (1.3L)',
        cvcc: '1,488 cc (1.5L) CVCC-II'
      },
      compression: '8.8:1 (CVCC-II: 8.5:1)',
      power: '55 hp @ 5,500 rpm (1.3L), 67 hp @ 5,000 rpm (1.5L CVCC-II)',
      torque: '77 lb-ft @ 3,000 rpm (1.5L CVCC-II)',
      fuelSystem: 'Carburetor with improved CVCC technology'
    },
    transmission: {
      manual: '4-speed or 5-speed',
      automatic: '2-speed Hondamatic'
    },
    performance: {
      topSpeed: '95 mph (153 km/h)',
      acceleration: '11.5s (0-60 mph)',
      fuelEconomy: '35 city / 42 highway mpg'
    },
    suspension: {
      front: 'MacPherson strut',
      rear: 'Independent semi-trailing arm with coil springs'
    },
    brakes: {
      front: 'Ventilated Disc',
      rear: 'Drum'
    },
    features: [
      'Refined styling with more angular design',
      'CVCC-II engine with improved emissions control',
      'Available in hatchback, sedan, and wagon body styles',
      'Introduction of the sporty "S" model',
      'Improved interior space and comfort'
    ]
  },
  {
    id: 'third-gen',
    name: 'Third Generation',
    years: '1983-1987',
    image: 'https://images.pexels.com/photos/12072306/pexels-photo-12072306.jpeg?auto=compress&cs=tinysrgb&w=1280',
    dimensions: {
      length: '150.0 in (3810 mm)',
      width: '63.0 in (1600 mm)',
      height: '52.2 in (1326 mm)',
      wheelbase: '93.7 in (2380 mm)',
      weight: '1,800 lbs (816 kg)'
    },
    engine: {
      type: '4-cylinder, water-cooled, SOHC/DOHC (Si)',
      displacement: {
        initial: '1,342 cc (1.3L)',
        si: '1,488 cc (1.5L PGM-FI)'
      },
      compression: '9.0:1 (Si: 9.2:1)',
      power: '60 hp @ 5,500 rpm (1.3L), 91 hp @ 5,500 rpm (1.5L Si)',
      torque: '86 lb-ft @ 3,500 rpm (1.5L Si)',
      fuelSystem: 'Carburetor/PGM-FI Fuel Injection (Si)'
    },
    transmission: {
      manual: '5-speed',
      automatic: '3-speed'
    },
    performance: {
      topSpeed: '112 mph (180 km/h) - Si Model',
      acceleration: '9.5s (0-60 mph) - Si Model',
      fuelEconomy: '32 city / 52 highway mpg (HF model)'
    },
    suspension: {
      front: 'MacPherson strut',
      rear: 'Independent semi-trailing arm with progressive-rate springs'
    },
    brakes: {
      front: 'Ventilated Disc',
      rear: 'Drum (disc on Si)'
    },
    features: [
      'Distinctive angular, boxy styling',
      'Introduction of the sporty CRX model',
      'Fuel-injected Si model introduced',
      'Super-efficient HF (High Fuel economy) variant',
      'More powerful and refined drivetrain'
    ]
  }
]

export default function Specifications() {
  const [activeTab, setActiveTab] = useState('first-gen')
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0 z-0 h-96 bg-gradient-to-b from-chart-2/10 to-transparent"></div>
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="font-playfair text-3xl font-bold md:text-5xl">
              Technical <span className="text-chart-1">Specifications</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Detailed specifications and performance data for the classic Honda Civic 
              generations that established its reputation for engineering excellence.
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
                {generations.map((gen) => (
                  <TabsTrigger 
                    key={gen.id} 
                    value={gen.id}
                    className="whitespace-nowrap data-[state=active]:bg-chart-1 data-[state=active]:text-white"
                  >
                    {gen.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {generations.map((generation) => (
                <TabsContent key={generation.id} value={generation.id} className="border-none p-0">
                  <div className="mt-8 grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                      <div className="relative overflow-hidden rounded-lg bg-card/50">
                        <div className="absolute top-4 left-4 z-10 rounded bg-background/90 px-3 py-1 text-sm">
                          {generation.years}
                        </div>
                        <Image 
                          src={generation.image} 
                          alt={generation.name} 
                          width={640}
                          height={400}
                          className="h-auto w-full object-cover"
                        />
                      </div>
                      
                      <div className="mt-6 rounded-lg border border-border/50 bg-card/50 p-5">
                        <h3 className="flex items-center gap-2 text-xl font-semibold">
                          <Info className="h-5 w-5 text-chart-1" /> 
                          Key Features
                        </h3>
                        <ul className="mt-3 space-y-2">
                          {generation.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-chart-1"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <Accordion type="single" collapsible defaultValue="dimensions" className="space-y-4">
                        <AccordionItem value="dimensions" className="rounded-lg border border-border/50 px-6">
                          <AccordionTrigger className="text-lg font-medium">
                            <div className="flex items-center gap-2">
                              <BarChart className="h-5 w-5 text-chart-1" /> Dimensions & Weight
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <Table>
                              <TableBody>
                                {Object.entries(generation.dimensions).map(([key, value]) => (
                                  <TableRow key={key}>
                                    <TableCell className="font-medium capitalize">
                                      {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </TableCell>
                                    <TableCell>{value}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="engine" className="rounded-lg border border-border/50 px-6">
                          <AccordionTrigger className="text-lg font-medium">
                            <div className="flex items-center gap-2">
                              <Zap className="h-5 w-5 text-chart-1" /> Engine Specifications
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <Table>
                              <TableBody>
                                {Object.entries(generation.engine).map(([key, value]) => (
                                  <TableRow key={key}>
                                    <TableCell className="font-medium capitalize">
                                      {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </TableCell>
                                    <TableCell>
                                      {typeof value === 'object' 
                                        ? Object.entries(value).map(([subKey, subValue]) => (
                                            <div key={subKey} className="py-1">
                                              <span className="font-medium capitalize">{subKey}: </span>
                                              {subValue as string}
                                            </div>
                                          ))
                                        : value}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="transmission" className="rounded-lg border border-border/50 px-6">
                          <AccordionTrigger className="text-lg font-medium">
                            <div className="flex items-center gap-2">
                              <Settings className="h-5 w-5 text-chart-1" /> Transmission
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <Table>
                              <TableBody>
                                {Object.entries(generation.transmission).map(([key, value]) => (
                                  <TableRow key={key}>
                                    <TableCell className="font-medium capitalize">
                                      {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </TableCell>
                                    <TableCell>{value}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="performance" className="rounded-lg border border-border/50 px-6">
                          <AccordionTrigger className="text-lg font-medium">
                            <div className="flex items-center gap-2">
                              <Gauge className="h-5 w-5 text-chart-1" /> Performance
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <Table>
                              <TableBody>
                                {Object.entries(generation.performance).map(([key, value]) => (
                                  <TableRow key={key}>
                                    <TableCell className="font-medium capitalize">
                                      {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </TableCell>
                                    <TableCell>{value}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="suspension" className="rounded-lg border border-border/50 px-6">
                          <AccordionTrigger className="text-lg font-medium">
                            <div className="flex items-center gap-2">
                              <Tool className="h-5 w-5 text-chart-1" /> Suspension & Brakes
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead colSpan={2} className="text-center">Suspension</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {Object.entries(generation.suspension).map(([key, value]) => (
                                    <TableRow key={key}>
                                      <TableCell className="font-medium capitalize">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                      </TableCell>
                                      <TableCell>{value}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                              
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead colSpan={2} className="text-center">Brakes</TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {Object.entries(generation.brakes).map(([key, value]) => (
                                    <TableRow key={key}>
                                      <TableCell className="font-medium capitalize">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                      </TableCell>
                                      <TableCell>{value}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
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
              Performance Comparison
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-chart-1"></div>
            <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
              See how performance evolved across generations, from the original
              Civic of the 1970s to the sportier models of the mid-1980s.
            </p>
          </FadeIn>
          
          <div className="mt-12 overflow-x-auto">
            <Table className="min-w-[768px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/5">Specification</TableHead>
                  {generations.map((gen) => (
                    <TableHead key={gen.id}>
                      {gen.name} <span className="block text-xs text-muted-foreground">({gen.years})</span>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Top Speed</TableCell>
                  {generations.map((gen) => (
                    <TableCell key={gen.id}>{gen.performance.topSpeed}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">0-60 mph</TableCell>
                  {generations.map((gen) => (
                    <TableCell key={gen.id}>{gen.performance.acceleration}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Engine Power</TableCell>
                  {generations.map((gen) => (
                    <TableCell key={gen.id}>
                      {typeof gen.engine.power === 'string' 
                        ? gen.engine.power.split(',').pop() || gen.engine.power 
                        : gen.engine.power}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Weight</TableCell>
                  {generations.map((gen) => (
                    <TableCell key={gen.id}>{gen.dimensions.weight}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fuel Economy</TableCell>
                  {generations.map((gen) => (
                    <TableCell key={gen.id}>{gen.performance.fuelEconomy}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
      
      {/* Technical Document Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h2 className="font-playfair text-3xl font-bold md:text-4xl">
                Technical <span className="text-chart-1">Documentation</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Access detailed technical documents, service manuals, and 
                restoration guides for classic Civic models. These resources 
                are invaluable for owners, restorers, and enthusiasts looking 
                to maintain or rebuild these iconic vehicles.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  { title: "First Generation Service Manual", size: "42 MB", type: "PDF" },
                  { title: "Second Generation Wiring Diagrams", size: "18 MB", type: "PDF" },
                  { title: "CVCC Engine Rebuilding Guide", size: "35 MB", type: "PDF" },
                  { title: "Third Generation Restoration Manual", size: "58 MB", type: "PDF" },
                  { title: "Carburetor Adjustment Procedures", size: "15 MB", type: "PDF" }
                ].map((doc, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between rounded-lg border border-border/50 bg-card/50 p-4 transition-colors hover:border-chart-1/50 hover:bg-card"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded bg-chart-1/10 p-2 text-chart-1">
                        <Filter className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{doc.title}</p>
                        <p className="text-sm text-muted-foreground">{doc.size} • {doc.type}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                      Download <ArrowDown className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <div className="rounded-lg border border-border/50 bg-card/50 p-6 md:p-8">
                <h3 className="font-playfair text-xl font-bold md:text-2xl">
                  Request Specific Documents
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Can't find what you're looking for? Fill out this form to request 
                  specific technical documentation for your classic Civic.
                </p>
                
                <form className="mt-6 space-y-4">
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
                      Model & Year
                    </label>
                    <select
                      id="model"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      required
                    >
                      <option value="">Select Civic model</option>
                      <option value="1g">First Generation (1973-1979)</option>
                      <option value="2g">Second Generation (1979-1983)</option>
                      <option value="3g">Third Generation (1983-1987)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="docType" className="mb-1 block text-sm font-medium">
                      Document Type
                    </label>
                    <select
                      id="docType"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      required
                    >
                      <option value="">Select document type</option>
                      <option value="service">Service Manual</option>
                      <option value="wiring">Wiring Diagrams</option>
                      <option value="parts">Parts Catalog</option>
                      <option value="restoration">Restoration Guide</option>
                      <option value="engine">Engine Manual</option>
                      <option value="other">Other (please specify)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="details" className="mb-1 block text-sm font-medium">
                      Additional Details
                    </label>
                    <textarea
                      id="details"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      placeholder="Please provide any specific details about the documentation you're looking for..."
                      rows={4}
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="mt-2 bg-chart-1 text-white hover:bg-chart-1/90">
                    Submit Request
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
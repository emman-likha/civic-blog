import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CalendarDays, MapPin, Award, BookOpen, ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/motion'

const timelineEvents = [
  {
    year: 1972,
    title: "Development & Launch",
    description: "Honda engineers began development of the Civic with a focus on fuel efficiency and innovation.",
    image: "https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=1280",
    milestone: "First Civic unveiled at Tokyo Motor Show"
  },
  {
    year: 1973,
    title: "First Generation Release",
    description: "The original Civic was released in Japan, featuring a front-wheel drive with a transverse engine layout.",
    image: "https://images.pexels.com/photos/14861362/pexels-photo-14861362.jpeg?auto=compress&cs=tinysrgb&w=1280",
    milestone: "Civic released with 1169cc engine"
  },
  {
    year: 1975,
    title: "CVCC Technology",
    description: "Introduction of the revolutionary CVCC (Compound Vortex Controlled Combustion) engine that met US emissions standards without a catalytic converter.",
    image: "https://images.pexels.com/photos/9785221/pexels-photo-9785221.jpeg?auto=compress&cs=tinysrgb&w=1280",
    milestone: "First engine to meet US Clean Air Act standards without catalytic converter"
  },
  {
    year: 1979,
    title: "Second Generation Begins",
    description: "The Civic entered its second generation with a more angular design, increased interior space, and improved engines.",
    image: "https://images.pexels.com/photos/9254819/pexels-photo-9254819.jpeg?auto=compress&cs=tinysrgb&w=1280",
    milestone: "Increased wheelbase and more spacious interior design"
  },
  {
    year: 1983,
    title: "Third Generation Launch",
    description: "Introduction of the third generation with the iconic boxy design, expanded model range including the CRX, and fuel-injected engines.",
    image: "https://images.pexels.com/photos/12072306/pexels-photo-12072306.jpeg?auto=compress&cs=tinysrgb&w=1280",
    milestone: "Introduction of Sport Injection (Si) model"
  },
  {
    year: 1984,
    title: "CRX & HF Variants",
    description: "The sporty CRX and ultra-efficient HF (High Fuel economy) variants expanded the Civic lineup, showcasing Honda's engineering versatility.",
    image: "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1280",
    milestone: "HF model achieved 52 mpg highway rating"
  }
]

export default function History() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0 z-0 h-96 bg-gradient-to-b from-chart-5/10 to-transparent"></div>
        <div className="container relative z-10">
          <FadeIn>
            <h1 className="font-playfair text-3xl font-bold md:text-5xl">
              The <span className="text-chart-1">History</span> of Classic Civic
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Tracing the remarkable journey of one of the most iconic compact cars
              that revolutionized the automotive landscape from the 1970s through the 1980s.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* Origin Story */}
      <section className="py-8 md:py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  alt="Original Honda Civic concept"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white/90 text-sm">Tokyo Motor Show, 1972</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <h2 className="font-playfair text-3xl font-bold md:text-4xl">
                The Birth of an Icon
              </h2>
              <div className="mt-4 h-1 w-20 bg-chart-1"></div>
              <p className="mt-6 text-muted-foreground">
                The Honda Civic was born from a vision of creating an efficient, practical, 
                and affordable car during a time of global economic change. In the early 1970s, 
                with the looming oil crisis on the horizon, Honda's engineers set out to design 
                a vehicle that would challenge the conventional automotive wisdom of the era.
              </p>
              <p className="mt-4 text-muted-foreground">
                Led by chief engineer Tadashi Kume, the team created a revolutionary compact car 
                with a transverse engine front-wheel drive layout — a configuration that 
                maximized interior space while keeping the overall footprint small. This 
                engineering approach would later become the standard for compact cars worldwide.
              </p>
              <div className="mt-8 flex items-center gap-4 rounded-lg border border-border/50 bg-card/50 p-4">
                <div className="rounded-full bg-chart-1/10 p-3 text-chart-1">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Development Philosophy</p>
                  <p className="text-sm text-muted-foreground">
                    "We will create a car that is inexpensive but not cheap, compact but not cramped."
                    <span className="block mt-1 italic">— Soichiro Honda</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <FadeIn>
            <h2 className="text-center font-playfair text-3xl font-bold md:text-4xl">
              Definitive Timeline
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-chart-1"></div>
            <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
              Follow the evolution and key moments in the history of the classic Civic,
              from its conception to its transformation into a global automotive icon.
            </p>
          </FadeIn>
          
          <div className="relative mt-16">
            {/* Vertical line */}
            <div className="absolute left-[9px] top-0 hidden h-full w-0.5 bg-border/50 md:left-1/2 md:block"></div>
            
            <div className="space-y-12 md:space-y-24">
              {timelineEvents.map((event, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <div className={`relative flex flex-col gap-4 md:flex-row md:gap-8 ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    <div className="hidden md:block md:w-1/2"></div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-6 flex h-5 w-5 items-center justify-center rounded-full border-4 border-chart-1 bg-background md:left-1/2 md:top-8 md:-translate-x-1/2"></div>
                    
                    <div className="pl-8 md:w-1/2 md:pl-0 md:pr-0">
                      <div className={`rounded-lg border border-border/50 bg-card p-6 ${
                        index % 2 !== 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}>
                        <div className="mb-3 inline-block rounded bg-chart-1/10 px-3 py-1 text-sm font-medium text-chart-1">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <p className="mt-2 text-muted-foreground">{event.description}</p>
                        
                        <div className="mt-4 overflow-hidden rounded-md">
                          <Image
                            src={event.image}
                            alt={event.title}
                            width={600}
                            height={300}
                            className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        
                        <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                          <Award className="h-4 w-4 text-chart-1" />
                          <span>Key Milestone: {event.milestone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Historical Impact */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <h2 className="text-center font-playfair text-3xl font-bold md:text-4xl">
              Historical Impact & Legacy
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-chart-1"></div>
          </FadeIn>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Environmental Innovation",
                description: "The CVCC engine technology represented a breakthrough in clean emissions, meeting strict US standards without expensive catalytic converters.",
                icon: <div className="mb-4 rounded-full bg-chart-1/10 p-4 text-chart-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M2 22v-5l5-5 5 5-5 5z"/><path d="M9.5 14.5 16 8"/><path d="m17 2 5 5-5 5-5-5z"/></svg>
                </div>
              },
              {
                title: "Fuel Economy Revolution",
                description: "During the oil crisis of the 1970s, the Civic's exceptional fuel efficiency changed consumer expectations and influenced industry standards.",
                icon: <div className="mb-4 rounded-full bg-chart-1/10 p-4 text-chart-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
              },
              {
                title: "Engineering Template",
                description: "The transverse engine, front-wheel drive layout pioneered by the Civic became the industry standard for compact cars worldwide.",
                icon: <div className="mb-4 rounded-full bg-chart-1/10 p-4 text-chart-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={0.2 * index} direction="up">
                <div className="flex flex-col items-center rounded-lg border border-border/50 bg-card/50 p-6 text-center transition-all hover:border-chart-1/50 hover:bg-card">
                  {item.icon}
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      
      {/* Historic Events */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h2 className="font-playfair text-3xl font-bold md:text-4xl">
                Historic <span className="text-chart-1">Events</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Throughout its early generations, the Civic was present at numerous
                significant moments in automotive history. From award ceremonies to 
                record-setting achievements, these events helped cement the Civic's 
                place in automotive history.
              </p>
              
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "1974 Car of the Year Japan",
                    date: "December 1974",
                    location: "Tokyo, Japan",
                    description: "The Civic was awarded Japan's prestigious Car of the Year award, recognizing its revolutionary design and engineering."
                  },
                  {
                    title: "1975 US Market Introduction",
                    date: "July 1975",
                    location: "California, USA",
                    description: "The Civic with CVCC technology was introduced to the US market, quickly becoming popular during the oil crisis."
                  },
                  {
                    title: "1980 Civic Test Drive World Record",
                    date: "March 1980",
                    location: "Bonneville Salt Flats, Utah",
                    description: "A modified Civic set fuel economy records during an endurance test, achieving over.60 MPG and showcasing Honda's engineering prowess."
                  }
                ].map((event, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg border border-border/50 bg-card p-5 transition-colors hover:border-chart-1/50"
                  >
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4 text-chart-1" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-chart-1" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="mt-3 text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg lg:min-h-[600px]">
                <Image
                  src="https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  alt="Classic Civic at automotive show"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
                <div className="absolute bottom-0 w-full p-6 md:p-8">
                  <h3 className="font-playfair text-2xl font-bold text-white">
                    Cultural Icon
                  </h3>
                  <p className="mt-2 text-gray-200">
                    The classic Civic transcended its role as merely transportation and
                    became a cultural phenomenon - representing practical innovation, 
                    reliability, and accessibility to millions around the world.
                  </p>
                  <Button asChild className="mt-6 bg-chart-1 text-white hover:bg-chart-1/90">
                    <Link href="/gallery">
                      View Gallery <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
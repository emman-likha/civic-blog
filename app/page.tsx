import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, Calendar, Users, Award } from 'lucide-react'
import { FadeIn } from '@/components/motion'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[650px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Vintage Honda Civic"
            fill
            priority
            className="object-cover object-center brightness-50"
          />
        </div>
        
        <div className="container relative z-10 flex h-full items-center pt-16">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <h1 className="font-playfair text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                Timeless Innovation<br />
                <span className="text-chart-1">Classic Civic Legacy</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <p className="mt-6 max-w-xl text-lg text-gray-300">
                Discover the heritage of one of the most revolutionary compact cars 
                that changed the automotive landscape forever. A perfect blend of 
                efficiency, reliability, and innovation.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.5} direction="up">
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-chart-1 text-white hover:bg-chart-1/90">
                  <Link href="/models">Explore Models</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/history">View History</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <h2 className="text-center font-playfair text-3xl font-bold md:text-4xl">
              Why The Classic Civic Matters
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-chart-1"></div>
          </FadeIn>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Clock className="h-10 w-10" />,
                title: "Enduring Design",
                description: "Timeless aesthetics that influenced automotive design for decades to come."
              },
              {
                icon: <Calendar className="h-10 w-10" />,
                title: "Historical Impact",
                description: "Revolutionized the compact car market during the 1970s energy crisis."
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Cult Following",
                description: "Passionate community of enthusiasts and collectors worldwide."
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Engineering Excellence",
                description: "Innovative features that set new standards for efficiency and reliability."
              }
            ].map((feature, index) => (
              <FadeIn key={index} delay={0.2 * index} direction="up">
                <div className="flex flex-col items-center rounded-lg border border-border/50 bg-card/50 p-6 text-center transition-all hover:border-chart-1/50 hover:bg-card">
                  <div className="mb-4 rounded-full bg-chart-1/10 p-3 text-chart-1">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Model */}
      <section className="relative py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <div className="absolute -left-4 -top-4 z-10 h-full w-full rounded-lg border border-chart-1"></div>
                <Image
                  src="https://images.pexels.com/photos/9254819/pexels-photo-9254819.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  alt="1979 Honda Civic"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <h2 className="font-playfair text-3xl font-bold md:text-4xl">
                1979 Civic <span className="text-chart-1">CVCC</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                The second-generation Civic introduced the revolutionary CVCC engine 
                technology that met emissions standards without a catalytic converter, 
                showcasing Honda's engineering prowess during a critical period in 
                automotive history.
              </p>
              
              <ul className="mt-6 grid gap-3">
                {[
                  "1.5L CVCC Engine",
                  "Front-Wheel Drive",
                  "4-Speed Manual Transmission",
                  "EPA Estimated 35 MPG",
                  "Innovative Stratified Charge Combustion"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-chart-1"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild className="mt-8 bg-chart-1 text-white hover:bg-chart-1/90">
                <Link href="/models">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeIn>
            <h2 className="text-center font-playfair text-3xl font-bold md:text-4xl">
              Evolution Timeline
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-chart-1"></div>
            <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
              Trace the journey of the classic Civic through its formative generations
              that established its reputation for quality and innovation.
            </p>
          </FadeIn>
          
          <div className="mt-16 space-y-12">
            {[
              {
                year: "1973-1979",
                title: "First Generation",
                description: "The original Civic that started it all, arriving during the oil crisis with perfect timing.",
                image: "https://images.pexels.com/photos/14861362/pexels-photo-14861362.jpeg?auto=compress&cs=tinysrgb&w=1200"
              },
              {
                year: "1979-1983",
                title: "Second Generation",
                description: "Refined styling with the innovative CVCC engine technology that revolutionized emissions standards.",
                image: "https://images.pexels.com/photos/9254819/pexels-photo-9254819.jpeg?auto=compress&cs=tinysrgb&w=1200"
              },
              {
                year: "1983-1987",
                title: "Third Generation",
                description: "Introduced the iconic boxy design with improved performance and technological advancements.",
                image: "https://images.pexels.com/photos/12072306/pexels-photo-12072306.jpeg?auto=compress&cs=tinysrgb&w=1200"
              }
            ].map((era, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <div className={`flex flex-col gap-8 lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg lg:w-1/2">
                    <Image
                      src={era.image}
                      alt={era.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="flex w-full flex-col justify-center lg:w-1/2">
                    <div className="inline-block rounded bg-chart-1/10 px-3 py-1 text-sm font-medium text-chart-1">
                      {era.year}
                    </div>
                    <h3 className="mt-3 font-playfair text-2xl font-bold">{era.title}</h3>
                    <p className="mt-2 text-muted-foreground">{era.description}</p>
                    <Button asChild variant="link" className="mt-4 w-fit p-0 text-chart-1">
                      <Link href="/history">Learn more <ArrowRight className="ml-1 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Classic Civic on the road"
            fill
            className="object-cover brightness-25"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="font-playfair text-3xl font-bold text-white md:text-4xl">
                Join the Classic Civic Community
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Connect with fellow enthusiasts, share restoration tips, and 
                participate in meetups dedicated to preserving the legacy of these 
                iconic vehicles.
              </p>
              <Button asChild size="lg" className="mt-8 bg-chart-1 text-white hover:bg-chart-1/90">
                <Link href="/contact">Get Involved</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
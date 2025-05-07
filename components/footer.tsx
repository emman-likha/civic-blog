import Link from 'next/link'
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-card/30">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-playfair text-xl font-bold">CIVIC<span className="text-chart-1">CLASSIC</span></h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Celebrating the legacy of one of the most iconic vehicles in automotive history.
              The Classic Civic represents innovation, reliability, and timeless design.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {[
                { text: 'Home', href: '/' },
                { text: 'Models', href: '/models' },
                { text: 'Gallery', href: '/gallery' },
                { text: 'Specifications', href: '/specs' },
                { text: 'History', href: '/history' },
                { text: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ChevronRight className="mr-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    <span>{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-chart-1" />
                <span className="text-sm text-muted-foreground">
                  1234 Automotive Lane, Classic City, CA 98765
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-chart-1" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-chart-1" />
                <span className="text-sm text-muted-foreground">info@civicclassic.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Subscribe to our newsletter for updates on events, restorations, and classic Civic news.
            </p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                required
              />
              <Button type="submit" className="bg-chart-1 text-white hover:bg-chart-1/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-10 border-t border-border/20 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Civic Classic. All rights reserved.</p>
          <p className="mt-1">
            This is a fan site and is not affiliated with Honda Motor Company, Ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}
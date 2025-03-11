"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar,
  MapPin,
  Users,
  Mountain,
  Tent,
  Compass,
  PartyPopper,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

export default function EventManagementLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">OutdoorEvents</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#activities" className="text-sm font-medium hover:text-primary">
              Activities
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Log in
            </Link>
            <Button>Get Started</Button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="container md:hidden py-4 pb-6 border-t">
            <nav className="flex flex-col gap-4">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#activities"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Activities
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 mt-2">
                <Link href="#" className="text-sm font-medium hover:text-primary">
                  Log in
                </Link>
                <Button className="w-full">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/main.jpg?height=800&width=1920"
              alt="Outdoor adventure"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Manage Your Outdoor Adventures With Ease
              </h1>
              <p className="mt-6 text-lg md:text-xl">
                Plan, organize, and host unforgettable outdoor experiences. From camping trips to hiking adventures and
                social gatherings, we&apos;ve got you covered.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-medium">
                  Start Planning
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything You Need For Successful Events
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our platform provides all the tools you need to plan, manage, and host amazing outdoor activities and
                social gatherings.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <Calendar className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Event Scheduling</h3>
                <p className="text-muted-foreground">
                  Create and manage events with our intuitive calendar interface. Set dates, times, and durations with
                  ease.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Location Management</h3>
                <p className="text-muted-foreground">
                  Find and book the perfect locations for your outdoor adventures with integrated maps and venue
                  details.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Attendee Management</h3>
                <p className="text-muted-foreground">
                  Track RSVPs, manage guest lists, and communicate with participants all in one place.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Task Management</h3>
                <p className="text-muted-foreground">
                  Create checklists, assign tasks, and track progress to ensure your event runs smoothly.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <Compass className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Activity Planning</h3>
                <p className="text-muted-foreground">
                  Plan detailed itineraries for your events with customizable activity schedules and resources.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <PartyPopper className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Social Sharing</h3>
                <p className="text-muted-foreground">
                  Share your events on social media and allow attendees to connect before, during, and after the event.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Explore Activities</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our platform is perfect for organizing a wide range of outdoor activities and social gatherings.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="/camp.jpg?height=600&width=800"
                  alt="Camping"
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Tent className="h-5 w-5" />
                    <h3 className="text-xl font-bold">Camping</h3>
                  </div>
                  <p className="text-white/90">
                    Organize overnight adventures in the great outdoors with campfire stories and stargazing.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="/hiking.jpg?height=600&width=800"
                  alt="Hiking"
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Mountain className="h-5 w-5" />
                    <h3 className="text-xl font-bold">Hiking</h3>
                  </div>
                  <p className="text-white/90">
                    Plan group hikes on scenic trails with detailed route maps and difficulty levels.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="/outdoors.jpg?height=600&width=800"
                  alt="Social Gatherings"
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <PartyPopper className="h-5 w-5" />
                    <h3 className="text-xl font-bold">Social Gatherings</h3>
                  </div>
                  <p className="text-white/90">
                    Host barbecues, picnics, and outdoor parties with friends and community members.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" className="group">
                Explore More Activities
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Users Say</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Hear from event organizers who have successfully used our platform to create memorable experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Sarah J."
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah J.</h4>
                    <p className="text-sm text-muted-foreground">Hiking Group Leader</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;This platform has transformed how I organize our monthly hiking trips. The location suggestions
                  and trail maps are incredibly helpful, and the RSVP system makes tracking attendance a breeze.&quot;
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Michael T."
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael T.</h4>
                    <p className="text-sm text-muted-foreground">Camping Enthusiast</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;I&apos;ve organized three camping trips using this system, and each one has been better than the
                  last. The checklist feature ensures we never forget essential gear, and the weather integration is a
                  game-changer.&quot;
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Lisa R."
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Lisa R.</h4>
                    <p className="text-sm text-muted-foreground">Community Organizer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;Our neighborhood gatherings have become much more organized and enjoyable since we started using
                  this platform. The ability to coordinate potluck items and activities in one place has been
                  invaluable.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Ready to Plan Your Next Adventure?
                </h2>
                <p className="text-primary-foreground/90 text-lg mb-6">
                  Join thousands of event organizers who are creating memorable outdoor experiences with our platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary">
                    Get Started For Free
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Schedule a Demo
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Outdoor adventure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get In Touch</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Have questions about our platform? We&apos;re here to help you get started with your outdoor event
                  planning.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-muted-foreground">123 Adventure Way, Outdoor City, OC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Office Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9am - 5pm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-12 border-t">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Mountain className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">OutdoorEvents</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Making outdoor event planning simple and enjoyable for everyone.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#activities" className="text-muted-foreground hover:text-primary">
                    Activities
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-primary">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Activities</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Camping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Hiking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Social Gatherings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Team Building
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Outdoor Sports
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Data Protection
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} OutdoorEvents. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


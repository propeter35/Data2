"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NetworkBackground } from "@/components/network-background"
import Image from "next/image"
import { ArrowRight, Database, Microscope, Network } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <NetworkBackground />
      <main className="relative z-10">
        {/* Hero Section - Logo Only */}
        <section className="h-screen flex items-center justify-center px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="animate-float">
              <Image
                src="/data2-logo.png"
                alt="Data2 - Integrating Data. Advancing Cancer Research."
                width={800}
                height={200}
                className="w-full max-w-3xl h-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                priority
              />
            </div>
          </div>
        </section>

        {/* Mission Statement Section - Appears on Scroll */}
        <section className="min-h-screen flex items-center justify-center px-4 py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xl md:text-2xl text-foreground/70 mb-4 tracking-wide">
                Integrating Data. Advancing Cancer Research.
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed tracking-wide">
                Solving the critical issue of fragmented cancer data to{" "}
                <span className="glow-text font-semibold text-primary">improve patient care</span> and{" "}
                <span className="glow-text font-semibold text-secondary">accelerate medical breakthroughs</span>
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Button asChild size="lg" className="text-lg px-8 py-6 glow group">
                <Link href="/about" className="flex items-center gap-2">
                  Learn About Our Mission
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 group bg-transparent"
              >
                <Link href="/giving" className="flex items-center gap-2">
                  Support Our Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 glow-text">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="gradient-border rounded-xl p-10 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 group-hover:bg-primary/30 transition-colors">
                  <Network className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-bold mb-6 text-primary/50">01</div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Unified Data</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Breaking down data silos to create a comprehensive view of cancer research and patient outcomes across
                  all institutions.
                </p>
              </div>
              <div className="gradient-border rounded-xl p-10 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6 group-hover:bg-secondary/30 transition-colors">
                  <Microscope className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-5xl font-bold mb-6 text-secondary/50">02</div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Better Care</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Enabling healthcare providers to make more informed decisions with complete, real-time patient data at
                  their fingertips.
                </p>
              </div>
              <div className="gradient-border rounded-xl p-10 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6 group-hover:bg-accent/30 transition-colors">
                  <Database className="w-8 h-8 text-accent" />
                </div>
                <div className="text-5xl font-bold mb-6 text-accent/50">03</div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Faster Research</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Accelerating medical breakthroughs by providing researchers with integrated, accessible, and
                  actionable data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Highlight */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 glow-text">Flagship Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="gradient-border rounded-xl p-12 hover:scale-[1.02] transition-all duration-300 group">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6">
                  ACTIVE PROJECT
                </div>
                <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors">
                  The OncoSPHERE Project
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  A comprehensive data integration platform designed to unify cancer research data from multiple sources
                  into a single, accessible ecosystem. OncoSPHERE leverages advanced algorithms to harmonize disparate
                  datasets.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full group/btn border-primary/50 hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/oncosphere" className="flex items-center justify-between">
                    <span>Explore OncoSPHERE</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="gradient-border rounded-xl p-12 hover:scale-[1.02] transition-all duration-300 group">
                <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6">
                  ACTIVE PROJECT
                </div>
                <h3 className="text-3xl font-bold mb-6 group-hover:text-secondary transition-colors">CHRONICLE</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  An innovative longitudinal data collection system that tracks patient journeys and outcomes to improve
                  treatment strategies. CHRONICLE provides unprecedented insights into long-term treatment efficacy.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full group/btn border-secondary/50 hover:bg-secondary/10 bg-transparent"
                >
                  <Link href="/chronicle" className="flex items-center justify-between">
                    <span>Explore CHRONICLE</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 glow-text">
              Join Us in Transforming Cancer Care
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Your support helps us continue our mission to integrate cancer data and accelerate research breakthroughs
              that save lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="text-lg px-10 py-7 glow group">
                <Link href="/contact" className="flex items-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 border-primary/50 hover:bg-primary/10 group bg-transparent"
              >
                <Link href="/giving" className="flex items-center gap-2">
                  Make a Donation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

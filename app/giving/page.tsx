import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Users, Lightbulb, Mail } from "lucide-react"

export default function GivingPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center glow-text">Support Our Mission</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
              Your generous donation helps us integrate fragmented cancer data, enabling better patient care and
              accelerating life-saving research breakthroughs.
            </p>

            {/* Impact Areas */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-10 text-center">How Your Gift Makes a Difference</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-8 text-center hover:shadow-lg transition-all hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 mx-auto">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Patient Care</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Enable doctors to access complete patient histories, leading to more informed treatment decisions
                    and better outcomes.
                  </p>
                </Card>
                <Card className="p-8 text-center hover:shadow-lg transition-all hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-4 mx-auto">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Research Access</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Provide researchers with unified datasets to accelerate discoveries and develop new cancer
                    treatments.
                  </p>
                </Card>
                <Card className="p-8 text-center hover:shadow-lg transition-all hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4 mx-auto">
                    <Lightbulb className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fund platform development and new features that break down data silos across institutions.
                  </p>
                </Card>
              </div>
            </div>

            {/* Donation CTA */}
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 mb-16 text-center border border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Make a Tax-Deductible Donation</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Every contribution, large or small, brings us closer to a world where integrated cancer data saves more
                lives. Your gift is fully tax-deductible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-10 py-6 glow">
                  Donate Now
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 bg-transparent">
                  Set Up Monthly Giving
                </Button>
              </div>
            </div>

            {/* Other Ways to Give */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Other Ways to Support Data2</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Interested in corporate partnerships, planned giving, matching gifts, or in-kind contributions? We
                welcome all forms of support for our nonprofit mission.
              </p>
              <Button asChild variant="outline" size="lg" className="group bg-transparent">
                <a href="mailto:giving@data2.org" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Our Development Team
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

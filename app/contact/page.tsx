import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">Contact Us</h1>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed">
              Have questions about our work? Interested in partnering with us? We'd love to hear from you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-2">
                      Organization
                    </label>
                    <Input id="organization" placeholder="Your organization (optional)" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us how we can help..." rows={6} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">General Inquiries</h3>
                    <a
                      href="mailto:info@data2discover.org"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      info@data2discover.org
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Research Partnerships</h3>
                    <a
                      href="mailto:research@data2discover.org"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      research@data2discover.org
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Development & Giving</h3>
                    <a
                      href="mailto:giving@data2discover.org"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      giving@data2discover.org
                    </a>
                  </div>
                </div>

                <div className="mt-12 bg-muted/30 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Institutional Partnerships</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Healthcare institutions and research organizations interested in participating in OncoSPHERE or
                    CHRONICLE should reach out to our partnerships team.
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <a href="mailto:partnerships@data2discover.org">partnerships@data2discover.org</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

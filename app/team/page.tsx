import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TeamPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">Our Team</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-8 text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Lorem Ipsum</h3>
                  <p className="text-sm text-muted-foreground mb-3">Dolor Sit Amet</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-muted/30 rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud
                exercitation ullamco.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

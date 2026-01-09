import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">About Us</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  Sed do eiusmod tempor incididunt ut labore et dolore
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  Ut enim ad minim veniam quis nostrud exercitation
                </li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                provident.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                voluptates repudiandae sint et molestiae non recusandae.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

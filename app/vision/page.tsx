import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function VisionPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Vision</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Lorem Ipsum Dolor</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>

              <div className="bg-muted/30 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold mb-6">Lorem Ipsum</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Consectetur Adipiscing</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Tempor Incididunt</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Ullamco Laboris</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Quis Nostrud</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Dolor Sit Amet</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">Lorem ipsum dolor sit amet consectetur:</p>
              <ul className="space-y-3 mb-6">
                <li className="text-muted-foreground leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  Temporibus autem quibusdam et aut officiis debitis
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  Itaque earum rerum hic tenetur a sapiente delectus
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                placeat facere possimus.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

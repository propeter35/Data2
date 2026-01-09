import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ChroniclePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">CHRONICLE</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mt-12 mb-6">Lorem Ipsum</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
              </p>

              <div className="bg-muted/30 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-bold mb-6">Dolor Sit Amet</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Consectetur Adipiscing</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Tempor Incididunt</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Ullamco Laboris</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Quis Nostrud</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Exercitation Veniam</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="text-muted-foreground leading-relaxed">
                  Ut enim ad minim veniam quis nostrud exercitation ullamco
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                </li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6">Dolor Sit Amet</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="mt-12 text-center">
                <Button asChild size="lg">
                  <Link href="/contact">Lorem Ipsum Dolor</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

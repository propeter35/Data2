import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 relative z-10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/data2-logo.png"
                alt="Data2"
                width={220}
                height={60}
                className="h-14 w-auto drop-shadow-[0_0_12px_rgba(59,130,246,0.35)]"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mt-4">
              Improving cancer care and medical research by solving the issue of fragmented cancer data.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Our Vision
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Projects</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/oncosphere"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  OncoSPHERE
                </Link>
              </li>
              <li>
                <Link
                  href="/chronicle"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  CHRONICLE
                </Link>
              </li>
            </ul>
            <h3 className="font-semibold mt-8 mb-4">Get Involved</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/giving" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Giving
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Data2. All rights reserved. A nonprofit organization dedicated to advancing
            cancer research.
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/vision", label: "Our Vision" },
  { href: "/oncosphere", label: "The OncoSPHERE Project" },
  { href: "/chronicle", label: "CHRONICLE" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/95 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group">
            <Image
              src="/data2-logo.png"
              alt="Data2"
              width={180}
              height={45}
              className="h-12 w-auto transition-all group-hover:scale-105 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                  pathname === item.href
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/giving"
            className="hidden lg:inline-flex px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-all duration-200 glow"
          >
            Support Our Mission
          </Link>
        </div>
      </div>
    </nav>
  )
}

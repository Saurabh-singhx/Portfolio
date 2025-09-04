import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Mail, ExternalLink } from "lucide-react"
import TextType from "./TextType"
import profile from "@/public/profile.jpg"
import Image from "next/image"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#internship", label: "Internship" },
  { href: "#coding", label: "Coding-Platforms" },
  { href: "#trends", label: "Trends" },
  { href: "#contact", label: "Contact" },
]

export function Hero() {
  return (
    <header className="relative">
      <div className="sticky top-0 z-40 border-b border-border/60 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="font-semibold">
            <span className="text-cyan-400">{"<"}</span>
            {"Saurabh's-Portfolio"}
            <span className="text-cyan-400">{"/>"}</span>
            <span className="sr-only">Home</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>

            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="#contact" aria-label="Contact">
              <Button size="sm" className="bg-cyan-600 hover:bg-cyan-500 text-black">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            <div className="flex flex-col gap-4">
              <TextType
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                text={[
                  "Full-Stack Developer",
                  "Backend Developer",
                  "Problem Solver",
                  "Open-Source Contributor",
                  "Future Software Engineer"
                ]}
                textColors={[
                  "#e63946", // red for Full-Stack Developer
                  "#457b9d", // blue for Backend Developer
                  "#2a9d8f", // teal for Problem Solver
                  "#f4a261", // orange for Open-Source Contributor
                  "#264653"  // dark for Future Software Engineer
                ]}

                cursorCharacter="|"
                className="text-xs uppercase tracking-widest text-cyan-600"
              />
              {/* <p className="text-xs uppercase tracking-widest text-cyan-400">Aspiring Developer</p> */}
              <h1 className="text-pretty text-3xl font-semibold leading-tight md:text-5xl">
                Building reliable, accessible, and modern web apps
              </h1>

              <p className="text-muted-foreground leading-relaxed">
                I’m a fresher passionate about frontend, backend, and solving problems on coding platforms. Here’s a
                quick look at my projects, internships, and interests.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="#projects">
                  <Button className="bg-cyan-600 hover:bg-cyan-500 text-black">View Projects</Button>
                </Link>
                <Link
                  href="https://github.com/Saurabh-singhx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-foreground text-muted-foreground"
                >
                  <Github className="size-4" />
                  GitHub
                  <ExternalLink className="size-3.5" />
                </Link>
                <Link
                  href="mailto:saurabh4442kumar@gmail.com"
                  className="inline-flex items-center gap-2 text-sm hover:text-foreground text-muted-foreground"
                >
                  <Mail className="size-4" />
                  Email
                </Link>
              </div>
              <ul className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <li className="rounded border border-border px-2 py-1">TypeScript</li>
                <li className="rounded border border-border px-2 py-1">Next.js</li>
                <li className="rounded border border-border px-2 py-1">Tailwind CSS</li>
                <li className="rounded border border-border px-2 py-1">Node.js</li>
              </ul>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              {/* Decorative placeholder image */}
          
              <Image
                src={profile}
                alt="My Pic"
                width={260}
                height={260}
                className="w-[260px] h-[260px] object-cover rounded-xl border border-border/60 overflow-hidden"
              />

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

import { SectionHeading } from "./section-heading"
import Link from "next/link"
import StarBorder from "./StarBorder"

export function ContactSection() {
  return (
    <div className="py-12 md:py-16">
      <SectionHeading
        id="contact"
        title="Contact Me"
        subtitle="I’m open to internships and entry-level roles. Feel free to reach out."
      />
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3 rounded-lg border border-border p-4">
            <form action="saurabh4442kumar@gmail.com" method="POST" encType="text/plain" className="grid gap-3">
              <label className="text-sm" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-md border border-border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-600"
                placeholder="Your name"
                aria-label="Your name"
              />
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-md border border-border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-600"
                placeholder="you@example.com"
                aria-label="Your email"
              />
              <label className="text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="rounded-md border border-border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-600"
                placeholder="How can I help?"
                aria-label="Your message"
              />
              <div className="pt-2">
                <StarBorder
                  as="button"
                  className="custom-class cursor-pointer"
                  color="white "
                  speed="2s"
                  thickness={3}
                >
                  send message
                </StarBorder>
              </div>
            </form>
          </div>
          <div className="md:col-span-2 rounded-lg border border-border p-4">
            <h3 className="text-sm font-semibold">Direct Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="mailto:saurabh4442kumar@gmail.com" className="text-cyan-400 hover:underline">
                  saurabh4442kumar@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Saurabh-singhx"
                  className="text-cyan-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Saurabh-singhx
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/saurabh-kumar0/"
                  className="text-cyan-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/saurabh-kumar0
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

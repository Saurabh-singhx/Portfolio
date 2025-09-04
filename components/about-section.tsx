import FadeContent from "./FadeContent"
import { SectionHeading } from "./section-heading"

export function AboutSection() {
  return (
    <div className="py-12 md:py-16">
      <FadeContent blur={true} duration={800} easing="ease-out" initialOpacity={0}>
      <SectionHeading
        id="about"
        title="About Me"
        subtitle="Curious, disciplined, and always learning. I enjoy building useful interfaces and robust backend APIs."
      />
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3 rounded-lg border border-border p-4">
            <p className="leading-relaxed text-sm text-muted-foreground">
              I am a recent graduate looking for opportunities in software development. I love working with modern web
              technologies and solving algorithmic problems. Outside of code, I enjoy reading, note-taking, and sharing
              what I learn.
            </p>
          </div>
          <div className="md:col-span-2 rounded-lg border border-border p-4">
            <h3 className="text-sm font-semibold">Skills</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Frontend: React, Next.js, Tailwind CSS</li>
              <li>Backend: Node.js, REST APIs</li>
              <li>Databases: SQL basics,MongoDB, Firebase/Supabase basics</li>
              <li>Problem Solving: DSA with c++</li>
            </ul>
          </div>
        </div>
      </div>
      </FadeContent>
    </div>
  )
}

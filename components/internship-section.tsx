
import FadeContent from "./FadeContent"
import { SectionHeading } from "./section-heading"

export function InternshipSection() {
  return (
    <div className="py-12 md:py-16">
      <FadeContent blur={true} duration={800} easing="ease-out" initialOpacity={0}>
      <SectionHeading
        id="internship"
        title="Internship"
        subtitle="Hands-on experience applying software engineering practices in real-world scenarios."
      />
    
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-border p-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">Web Developer Intern • Pixel Mascot</h3>
            <p className="text-xs text-muted-foreground">march 2025 – june 2025 • Remote</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Implemented accessible UI components and improved page performance.</li>
              <li>Integrated REST APIs and wrote unit tests for core utilities.</li>
              <li>Collaborated using GitHub issues, PRs, and code reviews.</li>
            </ul>
          </div>
        </div>
      </div>
      </FadeContent>
    </div>
  )
}

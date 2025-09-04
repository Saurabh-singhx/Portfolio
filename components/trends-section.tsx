import FadeContent from "./FadeContent"
import { SectionHeading } from "./section-heading"

type Trend = {
  title: string
  description: string
  tag: string
}

const trends: Trend[] = [
  {
    title: "AI-assisted coding is mainstream",
    description:
      "Developers increasingly use AI tools to scaffold code, review PRs, and generate tests—productivity with responsibility.",
    tag: "AI",
  },
  {
    title: "Server Components maturity",
    description:
      "App Router patterns are stabilizing—data-fetching on the server with minimal client JS for better performance.",
    tag: "Next.js",
  },
  {
    title: "Design tokens first",
    description:
      "Teams standardize color, spacing, and typography via tokens—fewer bugs and consistent design systems.",
    tag: "Design Systems",
  },
  {
    title: "Edge-first APIs",
    description: "Low-latency user experiences by pushing logic closer to users; caching and streaming by default.",
    tag: "Edge",
  },
]

export function TrendsSection() {
  return (
    <div className="py-12 md:py-16">
      <FadeContent blur={true} duration={800} easing="ease-out" initialOpacity={0}>
      <SectionHeading
        id="trends"
        title="Latest Trends"
        subtitle="Topics I’m following and learning about—kept short and practical."
      />
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-2 lg:px-8">
        {trends.map((t) => (
          <article key={t.title} className="rounded-lg border border-border p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">{t.title}</h3>
              <span className="ml-3 text-xs rounded bg-cyan-500/10 px-2 py-1 text-cyan-400 border border-cyan-500/20">
                {t.tag}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.description}</p>
          </article>
        ))}
      </div>
      </FadeContent>
    </div>
  )
}

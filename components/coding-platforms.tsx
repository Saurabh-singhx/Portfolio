import { SectionHeading } from "./section-heading"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import ElectricBorder from "./ElectricBorder"

type Platform = {
  name: string
  handle: string
  url: string
  stat?: string
}

const platforms: Platform[] = [
  {
    name: "LeetCode",
    handle: "saurabh-kumar0x",
    url: "https://leetcode.com/u/saurabh-kumar0x/",
    stat: "250+ problems",
  },
  {
    name: "GeeksforGeeks",
    handle: "saurabh44e8ny",
    url: "https://www.geeksforgeeks.org/user/saurabh44e8ny/",
    stat: "Practice & Articles",
  },
  {
    name: "Codechef",
    handle: "saurabh66770",
    url: "https://www.codechef.com/users/saurabh66770",
    stat: "Specialist",
  },
  {
    name: "HackerRank",
    handle: "@saurabh4442kumar",
    url: "https://www.hackerrank.com/profile/saurabh4442kumar",
    stat: "5* Problem Solving",
  },
]

export function CodingPlatforms() {
  return (
    <div className="py-12 md:py-16">

      <SectionHeading
        id="coding"
        title="Coding Platforms"
        subtitle="I regularly solve problems and participate in contests on these platforms."
      />
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {platforms.map((p) => (
          <ElectricBorder
            key={p.url}
            color="#7df9ff"
            speed={1}
            chaos={0.3}
            thickness={1}
            style={{ borderRadius: 16 }}
          >
          <article className="rounded-lg border border-border p-4">
            <h3 className="text-base font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.handle}</p>
            {p.stat ? (
              <span className="mt-3 inline-block rounded bg-amber-500/10 px-2 py-1 text-xs text-amber-400 border border-amber-500/20">
                {p.stat}
              </span>
            ) : null}
            <div className="mt-4">
              <Link
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:underline"
              >
                Visit Profile <ExternalLink className="size-4" />
              </Link>
            </div>
          </article>
          </ElectricBorder>
        ))}
      </div>
    </div>
  )
}

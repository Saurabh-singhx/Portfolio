import { SectionHeading } from "./section-heading"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import ElectricBorder from "./ElectricBorder"

type Project = {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: "Real Time ChatApp",
    description: "A real time chat application where users can chat int realtime",
    tech: ["React.js", "javascript", "Tailwind","Express.js"],
    github: "https://github.com/Saurabh-singhx/Fullstack-chat-app",
    demo: "https://fullstack-chat-app-1-xk32.onrender.com/",
  },
  {
    title: "Social Media App",
    description: "A social media app where users can intract with friend and make new friends",
    tech: ["React","tailwind","Express.js","MongoDB","Authentication","cloud"],
    github: "https://github.com/Saurabh-singhx/social_media_apk",
    demo: "https://socialmediaapk.onrender.com/",
  },
  
  {
    title: "Task Distributer",
    description: "A application where Admin can asign task to its agents or create new one",
    tech: ["React","MongoDB","Node.js", "Express", "JWT"],
    github: "https://github.com/Saurabh-singhx/Task_Distributor",
    demo: "https://task-distributor-pp53.onrender.com/",
  },
]

export function ProjectsSection() {
  return (
    <div className="py-12 md:py-16">
      <SectionHeading
        id="projects"
        title="Projects"
        subtitle="A few highlights that showcase my approach to building user-centric and maintainable software."
      />
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {projects.map((p) => (
          <ElectricBorder
            key={p.title}
            color="#7df9ff"
            speed={1}
            chaos={0.3}
            thickness={1}
            style={{ borderRadius: 16 }}
          >
            <article className="rounded-lg border border-border p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="text-xs text-muted-foreground rounded border border-border px-2 py-1">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-4">
                {p.github ? (
                  <Link
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:underline"
                  >
                    <Github className="size-4" />
                    Code
                  </Link>
                ) : null}
                {p.demo ? (
                  <Link href={p.demo} className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:underline">
                    <ExternalLink className="size-4" />
                    Demo
                  </Link>
                ) : null}
              </div>
            </article>
          </ElectricBorder>
        ))}
      </div>
    </div>
  )
}

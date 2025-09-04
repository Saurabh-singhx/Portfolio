import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function SectionHeading({
  title,
  subtitle,
  id,
  className,
}: {
  title: ReactNode 
  subtitle?: ReactNode 
  id?: string
  className?: string
}) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={cn("mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8", className)}
    >
      <div className="mb-8">
        <h2
          id={id ? `${id}-title` : undefined}
          className="text-pretty text-2xl font-semibold tracking-tight md:text-3xl"
        >
          {title}
        </h2>
        <div className="mt-2 h-0.5 w-12 rounded bg-cyan-500" aria-hidden />
        {subtitle ? (
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}

"use client"

import { AboutSection } from "@/components/about-section"
import { CodingPlatforms } from "@/components/coding-platforms"
import { ContactSection } from "@/components/contact-section"
import { Hero } from "@/components/hero"
import { InternshipSection } from "@/components/internship-section"
import { ProjectsSection } from "@/components/projects-section"
import { TrendsSection } from "@/components/trends-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <InternshipSection />
      <CodingPlatforms />
      <TrendsSection />
      <ContactSection />
    </main>
  )
}

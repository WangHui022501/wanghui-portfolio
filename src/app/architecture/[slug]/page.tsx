import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ProjectDetail from '@/components/ProjectDetail'
import { architectureProjects } from '@/data/architecture'

export function generateStaticParams() {
  return architectureProjects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = architectureProjects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Architecture' }
  return {
    title: project.title,
    description: project.description,
  }
}

export default function ArchitectureProjectPage({ params }: { params: { slug: string } }) {
  const i = architectureProjects.findIndex((p) => p.slug === params.slug)
  if (i === -1) notFound()

  const project = architectureProjects[i]
  const total = architectureProjects.length
  const prev = architectureProjects[(i - 1 + total) % total]
  const next = architectureProjects[(i + 1) % total]

  return (
    <ProjectDetail
      project={project}
      prev={{ slug: prev.slug, title: prev.title, titleZh: prev.titleZh }}
      next={{ slug: next.slug, title: next.title, titleZh: next.titleZh }}
    />
  )
}

'use client'

import Link from 'next/link'
import { useLang, pick } from '@/lib/i18n'
import ProjectGallery from './ProjectGallery'
import type { Project } from '@/lib/types'

interface PagerLink {
  slug: string
  title: string
  titleZh?: string
}

interface ProjectDetailProps {
  project: Project
  prev: PagerLink
  next: PagerLink
}

export default function ProjectDetail({ project, prev, next }: ProjectDetailProps) {
  const { lang } = useLang()

  return (
    <article className="max-w-6xl mx-auto px-6 py-14">
      {/* Back */}
      <Link
        href="/architecture"
        className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted hover:text-wisteria transition-colors mb-10"
      >
        <span>←</span> {pick(lang, 'Architecture', '建筑')}
      </Link>

      {/* Header */}
      <header className="border-b border-border pb-10 mb-12 reveal">
        {project.category && (
          <p className="text-xs tracking-widest text-muted uppercase mb-4">{project.category}</p>
        )}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-tight text-ink">
            {pick(lang, project.title, project.titleZh)}
          </h1>
          {project.year && <span className="font-mono text-sm text-muted">{project.year}</span>}
        </div>
        <p className="mt-5 text-[15px] text-muted max-w-2xl leading-relaxed">
          {pick(lang, project.description, project.descriptionZh)}
        </p>
        {project.tags && (
          <div className="flex gap-2 mt-6 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] tracking-wide text-muted border border-border rounded-full px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Images */}
      {project.images && <ProjectGallery images={project.images} />}

      {/* Pager */}
      <nav className="mt-20 pt-8 border-t border-border flex items-center justify-between gap-4 text-sm">
        <Link
          href={`/architecture/${prev.slug}`}
          className="group flex-1 min-w-0"
        >
          <span className="block text-xs tracking-widest uppercase text-muted mb-1">
            {pick(lang, 'Prev', '上一个')}
          </span>
          <span className="block truncate text-ink group-hover:text-wisteria transition-colors">
            ← {pick(lang, prev.title, prev.titleZh)}
          </span>
        </Link>
        <Link
          href={`/architecture/${next.slug}`}
          className="group flex-1 min-w-0 text-right"
        >
          <span className="block text-xs tracking-widest uppercase text-muted mb-1">
            {pick(lang, 'Next', '下一个')}
          </span>
          <span className="block truncate text-ink group-hover:text-wisteria transition-colors">
            {pick(lang, next.title, next.titleZh)} →
          </span>
        </Link>
      </nav>
    </article>
  )
}

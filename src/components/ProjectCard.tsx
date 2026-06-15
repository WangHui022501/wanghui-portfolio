'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang, pick } from '@/lib/i18n'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  href?: string
  index?: number
}

export default function ProjectCard({ project, href, index = 0 }: ProjectCardProps) {
  const { lang } = useLang()

  const inner = (
    <div className="group reveal" style={{ animationDelay: `${Math.min(index * 70, 500)}ms` }}>
      <div className="overflow-hidden rounded-sm bg-lavender/40 mb-4 relative aspect-[4/3]">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover img-hover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-[15px] font-medium text-ink group-hover:text-wisteria transition-colors">
            {pick(lang, project.title, project.titleZh)}
          </h3>
          <p className="text-[13px] text-muted mt-1 leading-relaxed line-clamp-2">
            {pick(lang, project.description, project.descriptionZh)}
          </p>
          {project.tags && (
            <div className="flex gap-2 mt-3 flex-wrap">
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
        </div>
        {project.year && (
          <span className="text-xs text-muted whitespace-nowrap font-mono pt-0.5">{project.year}</span>
        )}
      </div>
    </div>
  )

  if (href) return <Link href={href}>{inner}</Link>
  if (project.link)
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    )
  return inner
}

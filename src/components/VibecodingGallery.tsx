'use client'

import Image from 'next/image'
import { useLang, pick } from '@/lib/i18n'
import { vibecodingProjects } from '@/data/vibecoding'
import type { VibecodingProject } from '@/data/vibecoding'

function ProjectCard({ project, index }: { project: VibecodingProject; index: number }) {
  const { lang } = useLang()

  return (
    <div
      className="reveal flex flex-col rounded-lg border border-border overflow-hidden bg-paper shadow-sm hover:shadow-md transition-shadow"
      style={{ animationDelay: `${Math.min(index * 80, 400)}ms` }}
    >
      {/* Media area — keeps original proportions */}
      <div className="relative w-full bg-lavender/20 overflow-hidden">
        {project.video ? (
          <video
            src={project.video}
            controls
            playsInline
            loop
            muted
            className="w-full h-auto block"
          >
            Your browser does not support the video tag.
          </video>
        ) : project.images && project.images.length > 0 ? (
          <div className="relative w-full">
            <Image
              src={project.images[0]}
              alt={project.title}
              width={1200}
              height={900}
              className="w-full h-auto block"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : null}
      </div>

      {/* Info area */}
      <div className="flex flex-col p-5">
        <div>
          <h3 className="text-[16px] font-medium text-ink leading-snug">
            {pick(lang, project.title, project.titleZh)}
          </h3>
          <p className="text-[13px] text-muted mt-2 leading-relaxed line-clamp-3">
            {pick(lang, project.description, project.descriptionZh)}
          </p>
        </div>

        {/* Links */}
        {(project.link || project.links) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-periwinkle hover:text-wisteria transition-colors"
              >
                {project.link.replace(/^https?:\/\//, '')}
                <span className="ml-0.5">↗</span>
              </a>
            )}
            {project.links?.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-periwinkle hover:text-wisteria transition-colors"
              >
                {l.label}
                <span className="ml-0.5">↗</span>
              </a>
            ))}
          </div>
        )}

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
    </div>
  )
}

export default function VibecodingGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {vibecodingProjects.map((project, i) => (
        <ProjectCard key={project.title} project={project} index={i} />
      ))}
    </div>
  )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useLang, pick } from '@/lib/i18n'
import { vibecodingProjects } from '@/data/vibecoding'
import type { VibecodingProject } from '@/data/vibecoding'

const websiteProjects = vibecodingProjects.filter((project) => !project.video)
const motionProjects = vibecodingProjects.filter((project) => project.video)

function ProjectCard({
  project,
  index,
  compactMedia = false,
}: {
  project: VibecodingProject
  index: number
  compactMedia?: boolean
}) {
  const { lang } = useLang()
  const [imageIndex, setImageIndex] = useState(0)
  const imageCount = project.images?.length ?? 0

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
            poster={project.videoPoster}
            preload="none"
            controls
            playsInline
            loop
            muted
            className="w-full h-auto block"
          >
            Your browser does not support the video tag.
          </video>
        ) : project.images && project.images.length > 0 ? (
          <div
            className={`relative w-full bg-lavender/10 ${
              project.imageLayout === 'portrait' && !compactMedia ? 'aspect-[3/4]' : 'aspect-[4/3]'
            }`}
          >
            <Image
              src={project.images[imageIndex]}
              alt={`${project.title} ${imageIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {imageCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setImageIndex((imageIndex - 1 + imageCount) % imageCount)}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-paper/90 text-ink shadow-sm transition-colors hover:bg-paper"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setImageIndex((imageIndex + 1) % imageCount)}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-paper/90 text-ink shadow-sm transition-colors hover:bg-paper"
                >
                  →
                </button>
                <span className="absolute bottom-3 right-3 rounded-full bg-ink/75 px-2.5 py-1 font-mono text-[10px] tracking-wider text-paper">
                  {String(imageIndex + 1).padStart(2, '0')} / {String(imageCount).padStart(2, '0')}
                </span>
              </>
            )}
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
    <div className="space-y-16 md:space-y-20">
      <section>
        <div className="mb-7 flex items-baseline justify-between border-b border-border pb-3">
          <h2 className="font-serif text-2xl font-light text-ink">Web Projects</h2>
          <span className="text-xs tracking-widest text-muted">网站项目</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {websiteProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} compactMedia />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-7 flex items-baseline justify-between border-b border-border pb-3">
          <h2 className="font-serif text-2xl font-light text-ink">Motion Experiments</h2>
          <span className="text-xs tracking-widest text-muted">动态实验</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {motionProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}

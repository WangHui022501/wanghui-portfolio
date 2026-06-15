'use client'

import { useLang, pick } from '@/lib/i18n'

interface PageHeaderProps {
  num?: string
  title: string
  titleZh: string
  description?: string
  descriptionZh?: string
}

export default function PageHeader({ num, title, titleZh, description, descriptionZh }: PageHeaderProps) {
  const { lang } = useLang()
  return (
    <div className="border-b border-border pb-10 mb-14 reveal">
      <div className="flex items-baseline gap-3 mb-4">
        {num && <span className="font-mono text-xs text-periwinkle">{num}</span>}
        <p className="text-xs tracking-widest text-muted uppercase">
          {pick(lang, titleZh, title)}
        </p>
      </div>
      <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight text-ink">
        {pick(lang, title, titleZh)}
      </h1>
      {description && (
        <p className="mt-5 text-muted text-[15px] max-w-xl leading-relaxed">
          {pick(lang, description, descriptionZh)}
        </p>
      )}
    </div>
  )
}

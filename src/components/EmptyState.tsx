'use client'

import { useLang, pick } from '@/lib/i18n'

interface EmptyStateProps {
  label?: string
  labelZh?: string
}

export default function EmptyState({
  label = 'Coming soon',
  labelZh = '敬请期待',
}: EmptyStateProps) {
  const { lang } = useLang()
  return (
    <div className="relative overflow-hidden rounded-lg border border-border reveal">
      {/* Soft palette gradient field */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender via-periwinkle/50 to-aqua/40" />
      <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-wisteria/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-aqua/30 blur-3xl" />

      <div className="relative flex flex-col items-center justify-center text-center px-6 py-28 md:py-36">
        <p className="text-xs tracking-widest text-ink/50 uppercase mb-4">
          {pick(lang, 'In progress', '更新中')}
        </p>
        <p className="font-serif text-3xl md:text-4xl font-light text-ink">
          {pick(lang, label, labelZh)}
        </p>
        <p className="mt-4 text-sm text-ink/60 max-w-xs leading-relaxed">
          {pick(
            lang,
            'New work for this section is being prepared. Please check back soon.',
            '这一部分的新作品正在整理中，敬请稍后再来。'
          )}
        </p>
      </div>
    </div>
  )
}

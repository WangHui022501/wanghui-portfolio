'use client'

import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import { useLang, pick } from '@/lib/i18n'
import type { Category, GalleryItem } from '@/lib/types'

interface CategoryGalleryProps {
  categories: Category[]
}

type Tab = number | 'all'

export default function CategoryGallery({ categories }: CategoryGalleryProps) {
  const { lang } = useLang()
  const [active, setActive] = useState<Tab>('all')
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  // Flatten every image, tagged with its category, into one continuous list.
  const all: { item: GalleryItem; cat: Category; ci: number }[] = []
  categories.forEach((cat, ci) => cat.items.forEach((item) => all.push({ item, cat, ci })))

  const visible = active === 'all' ? all : all.filter((x) => x.ci === active)

  const slides = visible.map(({ item, cat }) => ({
    src: item.src,
    alt: item.alt,
    title: pick(lang, cat.name, cat.nameZh),
    description: item.year,
  }))

  const openAt = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  const tabClass = (on: boolean) =>
    clsx(
      'relative whitespace-nowrap text-sm tracking-wide py-1 transition-colors',
      on ? 'text-ink' : 'text-muted hover:text-ink'
    )

  return (
    <>
      {/* Filter tabs — categories preserved while the masonry flows as one sheet */}
      <div className="sticky top-16 z-30 -mx-6 mb-8 border-b border-border bg-paper/90 px-6 backdrop-blur-md">
        <div className="no-scrollbar flex flex-nowrap gap-x-5 gap-y-1 overflow-x-auto py-3 md:flex-wrap md:overflow-visible">
          <button type="button" onClick={() => setActive('all')} className={tabClass(active === 'all')}>
            {pick(lang, 'All', '全部')}
            <span className="ml-1 align-super font-mono text-[10px] text-periwinkle">{all.length}</span>
            <span
              className={clsx(
                'absolute -bottom-px left-0 h-px bg-wisteria transition-all duration-300',
                active === 'all' ? 'w-full' : 'w-0'
              )}
            />
          </button>
          {categories.map((cat, ci) => (
            <button key={ci} type="button" onClick={() => setActive(ci)} className={tabClass(active === ci)}>
              {pick(lang, cat.name, cat.nameZh)}
              <span className="ml-1 align-super font-mono text-[10px] text-periwinkle">{cat.items.length}</span>
              <span
                className={clsx(
                  'absolute -bottom-px left-0 h-px bg-wisteria transition-all duration-300',
                  active === ci ? 'w-full' : 'w-0'
                )}
              />
            </button>
          ))}
        </div>
      </div>

      {/* One continuous Pinterest masonry (re-keyed per tab to re-trigger the reveal) */}
      <div
        key={String(active)}
        className="columns-2 gap-4 [column-fill:_balance] md:columns-3 md:gap-5 lg:columns-4 xl:columns-5"
      >
        {visible.map(({ item, cat }, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => openAt(i)}
            className="group mb-4 block w-full cursor-zoom-in break-inside-avoid text-left reveal md:mb-5"
            style={{ animationDelay: `${Math.min(i * 25, 300)}ms` }}
          >
            <div className="overflow-hidden rounded-sm bg-lavender/30 shadow-sm ring-1 ring-ink/5 transition-all duration-500 group-hover:shadow-xl group-hover:ring-aqua/50">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-auto w-full object-cover img-hover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              />
            </div>
            {active === 'all' && (
              <p className="mt-2 px-0.5 text-[11px] text-muted transition-colors group-hover:text-wisteria">
                {pick(lang, cat.name, cat.nameZh)}
              </p>
            )}
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        plugins={[Captions]}
        captions={{ descriptionTextAlign: 'center' }}
      />
    </>
  )
}

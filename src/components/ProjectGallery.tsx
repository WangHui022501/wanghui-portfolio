'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import type { ProjectImage } from '@/lib/types'

interface ProjectGalleryProps {
  images: ProjectImage[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <>
      <div className="space-y-6 md:space-y-10">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            className="block w-full cursor-zoom-in group reveal"
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            style={{ animationDelay: `${Math.min(i * 60, 400)}ms` }}
          >
            <div className="overflow-hidden rounded-sm bg-lavender/40">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="w-full h-auto object-cover img-hover"
                sizes="(max-width: 1152px) 100vw, 1152px"
                priority={i === 0}
              />
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((i) => ({ src: i.src, alt: i.alt }))}
        index={index}
      />
    </>
  )
}

/** A single image in a gallery (drawing, photography, maps). */
export interface GalleryItem {
  src: string
  alt: string
  width: number
  height: number
  title?: string
  titleZh?: string
  year?: string
}

/** A named group of images — a series, subject, or place. */
export interface Category {
  name: string
  nameZh: string
  items: GalleryItem[]
}

/** An image within an architecture project detail page. */
export interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
}

/** An architecture project shown as a card and on its own detail page. */
export interface Project {
  slug: string
  title: string
  titleZh?: string
  year?: string
  category?: string
  categoryZh?: string
  description: string
  descriptionZh?: string
  cover: string
  coverWidth: number
  coverHeight: number
  tags?: string[]
  images?: ProjectImage[]
  link?: string
}

import type { Category } from '@/lib/types'

// Photography, grouped by subject / place. Images live in /public/images/photography
// (full-resolution masters in src/app/photography). Landscape 2200x1467, portrait 1467x2200.
export const photoCategories: Category[] = [
  {
    name: 'Cedar',
    nameZh: '雪松',
    items: [
      { src: '/images/photography/cedar-1.jpg', alt: 'Cedar 1', width: 2200, height: 1467 },
      { src: '/images/photography/cedar-2.jpg', alt: 'Cedar 2', width: 2200, height: 1467 },
      { src: '/images/photography/cedar-3.jpg', alt: 'Cedar 3', width: 2200, height: 1467 },
      { src: '/images/photography/cedar-4.jpg', alt: 'Cedar 4', width: 2200, height: 1467 },
    ],
  },
  {
    name: 'Laoshan Mountain',
    nameZh: '崂山',
    items: [
      { src: '/images/photography/laoshan-1.jpg', alt: 'Laoshan Mountain 1', width: 1467, height: 2200 },
      { src: '/images/photography/laoshan-2.jpg', alt: 'Laoshan Mountain 2', width: 1467, height: 2200 },
    ],
  },
  {
    name: 'Maple',
    nameZh: '枫',
    items: [
      { src: '/images/photography/maple-1.jpg', alt: 'Maple 1', width: 2200, height: 1467 },
      { src: '/images/photography/maple-2.jpg', alt: 'Maple 2', width: 2200, height: 1467 },
      { src: '/images/photography/maple-3.jpg', alt: 'Maple 3', width: 2200, height: 1467 },
      { src: '/images/photography/maple-4.jpg', alt: 'Maple 4', width: 2200, height: 1467 },
    ],
  },
  {
    name: 'Linggu Maple',
    nameZh: '灵谷 · 枫',
    items: [
      { src: '/images/photography/linggu-maple-1.jpg', alt: 'Linggu maple 1', width: 1467, height: 2200 },
      { src: '/images/photography/linggu-maple-2.jpg', alt: 'Linggu maple 2', width: 1467, height: 2200 },
    ],
  },
  {
    name: 'Hydrangea',
    nameZh: '绣球',
    items: [
      { src: '/images/photography/hydrangea-1.jpg', alt: 'Hydrangea 1', width: 2200, height: 1467 },
      { src: '/images/photography/hydrangea-2.jpg', alt: 'Hydrangea 2', width: 2200, height: 1467 },
    ],
  },
  {
    name: 'Xuanwu Lake',
    nameZh: '玄武湖',
    items: [
      { src: '/images/photography/xuanwu-lake-1.jpg', alt: 'Xuanwu Lake 1', width: 1467, height: 2200 },
      { src: '/images/photography/xuanwu-lake-2.jpg', alt: 'Xuanwu Lake 2', width: 1467, height: 2200 },
      { src: '/images/photography/xuanwu-lake-3.jpg', alt: 'Xuanwu Lake 3', width: 1467, height: 2200 },
    ],
  },
  {
    name: 'Wisteria',
    nameZh: '紫藤',
    items: [
      { src: '/images/photography/still-1.jpg', alt: 'Wisteria on a pergola', width: 1467, height: 2200 },
    ],
  },
]

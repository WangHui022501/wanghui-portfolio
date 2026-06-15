import type { Category } from '@/lib/types'

// Drawings, grouped into named series. Images live in /public/images/drawing.
export const drawingCategories: Category[] = [
  {
    name: 'Sea',
    nameZh: '海',
    items: [
      { src: '/images/drawing/sea-1.jpg', alt: 'Sea, drawing 1', width: 1628, height: 2200 },
      { src: '/images/drawing/sea-2.jpg', alt: 'Sea, drawing 2', width: 1628, height: 2200 },
      { src: '/images/drawing/sea-3.jpg', alt: 'Sea, drawing 3', width: 1629, height: 2200 },
      { src: '/images/drawing/sea-4.jpg', alt: 'Sea, drawing 4', width: 1628, height: 2200 },
    ],
  },
  {
    name: 'Lotus',
    nameZh: '荷',
    items: [
      { src: '/images/drawing/lotus-1.jpg', alt: 'Lotus, drawing 1', width: 1466, height: 2200 },
      { src: '/images/drawing/lotus-2.jpg', alt: 'Lotus, drawing 2', width: 1467, height: 2200 },
      { src: '/images/drawing/lotus-3.jpg', alt: 'Lotus, drawing 3', width: 1467, height: 2200 },
      { src: '/images/drawing/lotus-4.jpg', alt: 'Lotus, drawing 4', width: 1467, height: 2200 },
    ],
  },
  {
    name: 'Autumn',
    nameZh: '秋',
    items: [
      { src: '/images/drawing/autumn-01.jpg', alt: 'Autumn, drawing 1', width: 1650, height: 2200 },
      { src: '/images/drawing/autumn-02.jpg', alt: 'Autumn, drawing 2', width: 1650, height: 2200 },
      { src: '/images/drawing/autumn-03.jpg', alt: 'Autumn, drawing 3', width: 1650, height: 2200 },
      { src: '/images/drawing/autumn-04.jpg', alt: 'Autumn, drawing 4', width: 1650, height: 2200 },
    ],
  },
  {
    name: 'Polygonum',
    nameZh: '蓼',
    items: [
      { src: '/images/drawing/polygonum-1.jpg', alt: 'Polygonum, drawing 1', width: 1650, height: 2200 },
      { src: '/images/drawing/polygonum-2.jpg', alt: 'Polygonum, drawing 2', width: 1650, height: 2200 },
      { src: '/images/drawing/polygonum-3.jpg', alt: 'Polygonum, drawing 3', width: 1650, height: 2200 },
    ],
  },
  {
    name: 'Sea · Poster',
    nameZh: '海报',
    items: [
      { src: '/images/drawing/sea-poster-1.jpg', alt: 'Sea poster study 1', width: 1650, height: 2200 },
      { src: '/images/drawing/sea-poster-2.jpg', alt: 'Sea poster study 2', width: 1650, height: 2200 },
      { src: '/images/drawing/sea-poster-3.jpg', alt: 'Sea poster study 3', width: 1650, height: 2200 },
      { src: '/images/drawing/sea-poster-4.jpg', alt: 'Sea poster study 4', width: 1650, height: 2200 },
    ],
  },
  {
    name: 'Tree',
    nameZh: '树',
    items: [
      { src: '/images/drawing/tree-1.jpg', alt: 'Tree, drawing 1', width: 1650, height: 2200 },
      { src: '/images/drawing/tree-2.jpg', alt: 'Tree, drawing 2', width: 1956, height: 2200 },
    ],
  },
]

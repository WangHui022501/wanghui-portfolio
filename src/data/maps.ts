import type { Category } from '@/lib/types'

// Hand-drawn and designed maps, grouped by city / place. Images live in /public/images/maps.
export const mapCategories: Category[] = [
  {
    name: 'Nanjing',
    nameZh: '南京',
    items: [
      { src: '/images/maps/nanjing-cover.jpg', alt: 'Nanjing map', width: 2200, height: 2200 },
      { src: '/images/maps/nanjing-1.jpg', alt: 'Nanjing map detail 1', width: 2200, height: 1556 },
      { src: '/images/maps/nanjing-2.jpg', alt: 'Nanjing map detail 2', width: 2200, height: 1556 },
      { src: '/images/maps/nanjing-3.jpg', alt: 'Nanjing map detail 3', width: 2200, height: 1556 },
      { src: '/images/maps/nanjing-4.jpg', alt: 'Nanjing map detail 4', width: 2200, height: 1556 },
      { src: '/images/maps/nanjing-5.jpg', alt: 'Nanjing map detail 5', width: 2200, height: 1556 },
      { src: '/images/maps/nanjing-6.jpg', alt: 'Nanjing map detail 6', width: 2200, height: 1556 },
    ],
  },
  {
    name: 'Florence',
    nameZh: '佛罗伦萨',
    items: [
      { src: '/images/maps/florence-1.jpg', alt: 'Florence map 1', width: 1572, height: 2200 },
      { src: '/images/maps/florence-2.png', alt: 'Florence map 2', width: 1417, height: 1890 },
    ],
  },
  {
    name: 'Sanya',
    nameZh: '三亚',
    items: [
      { src: '/images/maps/sanya-1.jpg', alt: 'Sanya map 1', width: 1650, height: 2200 },
      { src: '/images/maps/sanya-2.jpg', alt: 'Sanya map 2', width: 2200, height: 1555 },
    ],
  },
  {
    name: 'Qingdao',
    nameZh: '青岛',
    items: [
      { src: '/images/maps/qingdao.jpg', alt: 'Qingdao map', width: 2200, height: 1556 },
    ],
  },
  {
    name: 'Quanzhou',
    nameZh: '泉州',
    items: [
      { src: '/images/maps/quanzhou.jpg', alt: 'Quanzhou map', width: 1417, height: 2125 },
    ],
  },
  {
    name: 'Yangzhou',
    nameZh: '扬州',
    items: [
      { src: '/images/maps/yangzhou.jpg', alt: 'Yangzhou map', width: 1260, height: 1890 },
    ],
  },
  {
    name: 'Yixian',
    nameZh: '黟县',
    items: [
      { src: '/images/maps/yixian.jpg', alt: 'Yixian map', width: 1427, height: 2140 },
    ],
  },
  {
    name: 'Zijinshan',
    nameZh: '紫金山',
    items: [
      { src: '/images/maps/zijinshan.jpg', alt: 'Zijinshan map', width: 1469, height: 2200 },
    ],
  },
]

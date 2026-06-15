export interface VibecodingProject {
  title: string
  titleZh: string
  description: string
  descriptionZh: string
  /** Video source (mutually exclusive with images) */
  video?: string
  /** Image sources for image-based projects */
  images?: string[]
  link?: string
  /** Multiple links for projects with more than one external URL */
  links?: { label: string; url: string }[]
  tags?: string[]
}

export const vibecodingProjects: VibecodingProject[] = [
  {
    title: 'Photo to Particle',
    titleZh: '照片粒子化',
    description:
      'Transform photos into dynamic particle systems — an exploration of computational aesthetics.',
    descriptionZh:
      '将照片转化为动态粒子系统——计算美学的探索。',
    video: '/images/vibecoding/PhototoPaticle.mp4',
    tags: ['AIGC', 'Creative Coding'],
  },
  {
    title: 'Pixel Art Live Wallpaper',
    titleZh: '像素艺术动态壁纸',
    description:
      'A pixel art live wallpaper engine built with creative coding techniques.',
    descriptionZh:
      '使用创意编程技术构建的像素艺术动态壁纸引擎。',
    video: '/images/vibecoding/PixelArtLiveWallpaper.mp4',
    link: 'https://github.com/WangHui022501/PixelArtLiveWallpaper',
    tags: ['Creative Coding', 'Open Source'],
  },
  {
    title: 'Bookverse',
    titleZh: 'Bookverse',
    description:
      'An AI-powered reading companion that transforms books into interactive experiences.',
    descriptionZh:
      'AI驱动的阅读伴侣，将书籍转化为互动体验。',
    images: ['/images/vibecoding/bookverse.png'],
    link: 'https://web-production-c48525.up.railway.app/',
    tags: ['AIGC', 'Product Design'],
  },
  {
    title: 'Travel Map',
    titleZh: '旅行地图',
    description:
      'Seasonal city maps and travel guides reimagined through data-driven design.',
    descriptionZh:
      '通过数据驱动设计重塑季节城市地图与旅行指南。',
    images: [
      '/images/vibecoding/map1_SeasonCity.png',
      '/images/vibecoding/map2_TravelNanJingwithIcons.png',
    ],
    links: [
      { label: 'SeasonCity', url: 'https://github.com/WangHui022501/SeasonCity' },
      { label: 'TravelNanJing', url: 'https://github.com/WangHui022501/TravelNanJingwithIcons' },
    ],
    tags: ['Map Design', 'Data Viz'],
  },
]

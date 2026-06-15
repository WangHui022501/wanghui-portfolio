import type { Project } from '@/lib/types'

// Architecture projects. Each links to /architecture/[slug] for the full set.
// Images live in /public/images/architecture. Edit titles/descriptions freely.
export const architectureProjects: Project[] = [
  {
    slug: 'student-center',
    title: 'Student Center',
    titleZh: '学生活动中心',
    category: 'Education',
    description:
      'A campus student center stitching study, performance, and social space along a daylit interior street.',
    descriptionZh: '校园学生活动中心，沿采光中庭串联学习、演艺与社交空间。',
    cover: '/images/architecture/student-center-1.jpg',
    coverWidth: 2200,
    coverHeight: 1554,
    tags: ['Education', 'Public'],
    images: [
      { src: '/images/architecture/student-center-1.jpg', alt: 'Student Center 1', width: 2200, height: 1554 },
      { src: '/images/architecture/student-center-2.jpg', alt: 'Student Center 2', width: 2200, height: 1554 },
      { src: '/images/architecture/student-center-3.jpg', alt: 'Student Center 3', width: 2200, height: 1554 },
      { src: '/images/architecture/student-center-4.jpg', alt: 'Student Center 4', width: 2200, height: 1561 },
      { src: '/images/architecture/student-center-5.jpg', alt: 'Student Center 5', width: 2200, height: 1561 },
      { src: '/images/architecture/student-center-6.jpg', alt: 'Student Center 6', width: 2200, height: 1561 },
      { src: '/images/architecture/student-center-7.jpg', alt: 'Student Center 7', width: 2200, height: 1561 },
      { src: '/images/architecture/student-center-8.jpg', alt: 'Student Center 8', width: 2200, height: 1561 },
      { src: '/images/architecture/student-center-9.jpg', alt: 'Student Center 9', width: 2200, height: 1561 },
      { src: '/images/architecture/student-center-10.jpg', alt: 'Student Center 10', width: 2200, height: 1561 },
      { src: '/images/architecture/student-center-11.jpg', alt: 'Student Center 11', width: 2200, height: 1561 },
    ],
  },
  {
    slug: 'exhibition-hall',
    title: 'Exhibition Hall',
    titleZh: '展览馆',
    category: 'Cultural',
    description:
      'An exhibition hall organized around a sequence of top-lit galleries and a generous public foyer.',
    descriptionZh: '围绕一系列顶部采光展厅与开阔公共门厅组织的展览馆。',
    cover: '/images/architecture/exhibition-hall-1.jpg',
    coverWidth: 2200,
    coverHeight: 1554,
    tags: ['Cultural', 'Public'],
    images: [
      { src: '/images/architecture/exhibition-hall-1.jpg', alt: 'Exhibition Hall 1', width: 2200, height: 1554 },
      { src: '/images/architecture/exhibition-hall-2.jpg', alt: 'Exhibition Hall 2', width: 2200, height: 1554 },
      { src: '/images/architecture/exhibition-hall-3.jpg', alt: 'Exhibition Hall 3', width: 2200, height: 1554 },
      { src: '/images/architecture/exhibition-hall-4.jpg', alt: 'Exhibition Hall 4', width: 2200, height: 1554 },
    ],
  },
  {
    slug: 'city-park',
    title: 'City Park',
    titleZh: '城市公园',
    category: 'Landscape',
    description:
      'A public park masterplan weaving water, terrain, and circulation into a continuous civic landscape.',
    descriptionZh: '以水系、地形与流线编织而成的城市公园总体设计。',
    cover: '/images/architecture/citypark-1.jpg',
    coverWidth: 2200,
    coverHeight: 1405,
    tags: ['Landscape', 'Urban'],
    images: [
      { src: '/images/architecture/citypark-1.jpg', alt: 'City Park 1', width: 2200, height: 1405 },
      { src: '/images/architecture/citypark-2.jpg', alt: 'City Park 2', width: 2200, height: 733 },
      { src: '/images/architecture/citypark-3.jpg', alt: 'City Park 3', width: 2200, height: 733 },
      { src: '/images/architecture/citypark-4.jpg', alt: 'City Park 4', width: 2200, height: 733 },
      { src: '/images/architecture/citypark-5.jpg', alt: 'City Park 5', width: 2200, height: 733 },
      { src: '/images/architecture/citypark-6.jpg', alt: 'City Park 6', width: 2200, height: 852 },
      { src: '/images/architecture/citypark-7.jpg', alt: 'City Park 7', width: 2200, height: 981 },
      { src: '/images/architecture/citypark-8.png', alt: 'City Park 8', width: 1627, height: 2200 },
    ],
  },
  {
    slug: 'factory-renovation',
    title: 'Factory Renovation',
    titleZh: '工厂改造',
    category: 'Adaptive Reuse',
    description:
      'Adaptive reuse of an industrial complex — preserving the structural frame while inserting new program.',
    descriptionZh: '工业厂区的改造再利用，保留结构骨架并植入新的功能。',
    cover: '/images/architecture/factory-1.jpg',
    coverWidth: 2200,
    coverHeight: 1034,
    tags: ['Adaptive Reuse', 'Industrial'],
    images: [
      { src: '/images/architecture/factory-1.jpg', alt: 'Factory Renovation 1', width: 2200, height: 1034 },
      { src: '/images/architecture/factory-2.jpg', alt: 'Factory Renovation 2', width: 1557, height: 2200 },
      { src: '/images/architecture/factory-3.jpg', alt: 'Factory Renovation 3', width: 1557, height: 2200 },
      { src: '/images/architecture/factory-4.jpg', alt: 'Factory Renovation 4', width: 1557, height: 2200 },
      { src: '/images/architecture/factory-5.jpg', alt: 'Factory Renovation 5', width: 1557, height: 2200 },
    ],
  },
  {
    slug: 'urban-renewal',
    title: 'Urban Renewal',
    titleZh: '城市更新',
    category: 'Urban',
    description:
      'An urban renewal study mapping block typologies and proposing incremental, fine-grained regeneration.',
    descriptionZh: '城市更新研究：梳理街区类型，提出渐进式、细颗粒度的更新策略。',
    cover: '/images/architecture/urban-renewal-1.jpg',
    coverWidth: 2200,
    coverHeight: 1556,
    tags: ['Urban', 'Research'],
    images: [
      { src: '/images/architecture/urban-renewal-1.jpg', alt: 'Urban Renewal 1', width: 2200, height: 1556 },
      { src: '/images/architecture/urban-renewal-2.jpg', alt: 'Urban Renewal 2', width: 2200, height: 1556 },
      { src: '/images/architecture/urban-renewal-3.jpg', alt: 'Urban Renewal 3', width: 2200, height: 1556 },
    ],
  },
  {
    slug: 'shared-community',
    title: 'Shared Community',
    titleZh: '共享社区',
    category: 'Housing',
    description:
      'A residential block reorganized around shared courtyards, terraces, and ground-floor commons.',
    descriptionZh: '围绕共享庭院、平台与底层公共空间重新组织的居住社区。',
    cover: '/images/architecture/shared-community-2.jpg',
    coverWidth: 2200,
    coverHeight: 1556,
    tags: ['Housing', 'Community'],
    images: [
      { src: '/images/architecture/shared-community-2.jpg', alt: 'Shared Community 2', width: 2200, height: 1556 },
      { src: '/images/architecture/shared-community-1.jpg', alt: 'Shared Community 1', width: 1871, height: 1323 },
      { src: '/images/architecture/shared-community-3.jpg', alt: 'Shared Community 3', width: 2198, height: 1554 },
      { src: '/images/architecture/shared-community-4.jpg', alt: 'Shared Community 4', width: 2200, height: 1556 },
      { src: '/images/architecture/shared-community-5.jpg', alt: 'Shared Community 5', width: 2200, height: 1555 },
    ],
  },
  {
    slug: 'botanical-expo',
    title: 'Botanical Expo',
    titleZh: '植物科普展馆',
    category: 'Pavilion',
    description:
      'A pavilion for botanical education, pairing greenhouse volumes with shaded outdoor rooms.',
    descriptionZh: '植物科普展馆，将温室体量与遮荫的户外空间相结合。',
    cover: '/images/architecture/botanical-expo-1.jpg',
    coverWidth: 1557,
    coverHeight: 2200,
    tags: ['Pavilion', 'Exhibition'],
    images: [
      { src: '/images/architecture/botanical-expo-1.jpg', alt: 'Botanical Expo 1', width: 1557, height: 2200 },
      { src: '/images/architecture/botanical-expo-2.jpg', alt: 'Botanical Expo 2', width: 1555, height: 2200 },
    ],
  },
  {
    slug: 'timber-construction',
    title: 'Timber Construction',
    titleZh: '木构建造',
    category: 'Construction',
    description:
      'A small timber structure exploring joinery, prefabrication, and hand assembly at full scale.',
    descriptionZh: '探索节点、预制与足尺手工装配的小型木构建造。',
    cover: '/images/architecture/timber-1.jpg',
    coverWidth: 2200,
    coverHeight: 2200,
    tags: ['Timber', 'Construction'],
    images: [
      { src: '/images/architecture/timber-1.jpg', alt: 'Timber Construction 1', width: 2200, height: 2200 },
      { src: '/images/architecture/timber-2.jpg', alt: 'Timber Construction 2', width: 1440, height: 1080 },
      { src: '/images/architecture/timber-3.jpg', alt: 'Timber Construction 3', width: 1706, height: 1280 },
      { src: '/images/architecture/timber-4.jpg', alt: 'Timber Construction 4', width: 1556, height: 2200 },
    ],
  },
]

export function getProject(slug: string) {
  return architectureProjects.find((p) => p.slug === slug)
}

import PageHeader from '@/components/PageHeader'
import CategoryGallery from '@/components/CategoryGallery'
import { photoCategories } from '@/data/photography'

export const metadata = { title: 'Photography' }

export default function PhotographyPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <PageHeader
        num="05"
        title="Photography"
        titleZh="摄影"
        description="Landscape and botanical photography — cedar, maple, and water, by subject and place."
        descriptionZh="风景与植物摄影——雪松、枫与水，按主题与地点编排。"
      />
      <CategoryGallery categories={photoCategories} />
    </div>
  )
}

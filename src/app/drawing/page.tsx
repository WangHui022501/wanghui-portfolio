import PageHeader from '@/components/PageHeader'
import CategoryGallery from '@/components/CategoryGallery'
import { drawingCategories } from '@/data/drawing'

export const metadata = { title: 'Drawing' }

export default function DrawingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <PageHeader
        num="04"
        title="Drawing"
        titleZh="绘画"
        description="Botanical and landscape drawings — autumn leaves, lotus, sea, and tree studies."
        descriptionZh="植物与风景绘画——秋叶、荷花、海与树木写生。"
      />
      <CategoryGallery categories={drawingCategories} />
    </div>
  )
}

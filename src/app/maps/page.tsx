import PageHeader from '@/components/PageHeader'
import CategoryGallery from '@/components/CategoryGallery'
import { mapCategories } from '@/data/maps'

export const metadata = { title: 'Maps' }

export default function MapsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <PageHeader
        num="03"
        title="Maps"
        titleZh="地图"
        description="Hand-drawn and designed maps — Nanjing, Florence, Sanya, and more."
        descriptionZh="手绘与设计地图——南京、佛罗伦萨、三亚等城市。"
      />
      <CategoryGallery categories={mapCategories} />
    </div>
  )
}

import PageHeader from '@/components/PageHeader'
import VibecodingGallery from '@/components/VibecodingGallery'

export const metadata = { title: 'AIGC&Vibecoding' }

export default function VibeCodingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <PageHeader
        num="02"
        title="AIGC&Vibecoding"
        titleZh="编程"
        description="Creative code at the intersection of design, architecture, and computation."
        descriptionZh="位于设计、建筑与计算交汇处的创意编程。"
      />
      <VibecodingGallery />
    </div>
  )
}

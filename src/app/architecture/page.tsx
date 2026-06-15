import PageHeader from '@/components/PageHeader'
import ProjectCard from '@/components/ProjectCard'
import { architectureProjects } from '@/data/architecture'

export const metadata = { title: 'Architecture' }

export default function ArchitecturePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <PageHeader
        num="01"
        title="Architecture"
        titleZh="建筑"
        description="Built projects, competitions, and studio work — from pavilions to urban form."
        descriptionZh="建成项目、竞赛与设计研究——从亭台尺度到城市形态。"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
        {architectureProjects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            href={`/architecture/${project.slug}`}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}

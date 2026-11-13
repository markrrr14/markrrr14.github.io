import { projects } from '../data/portfolio'
import Section from './Section'
import WorkItem from './WorkItem'

export default function Work() {
  return (
    <Section id="work" eyebrow="selected work" title="My work">
      <div className="work-list">
        {projects.map((project, index) => (
          <WorkItem key={project.title} index={index + 1} {...project} />
        ))}
      </div>
    </Section>
  )
}

import { skills } from '../data/portfolio'
import Section from './Section'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="capabilities" title="Skills & tools">
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={skill.label} index={index + 1} {...skill} />
        ))}
      </div>
    </Section>
  )
}

import markPhoto from '../assets/mark.jpg'
import { typewriterPhrases } from '../data/portfolio'
import ButtonLink from './ButtonLink'
import Section from './Section'
import Terminal from './Terminal'
import Typewriter from './Typewriter'

export default function Hero() {
  return (
    <Section id="home" wrapClassName="hero-grid">
      <div className="hero-text">
        <h1 className="hero-name">Stephen Mark O. Maluto</h1>
        <p className="hero-role">BSCS Student and an Aspiring Developer.</p>

        <Terminal>
          <Typewriter phrases={typewriterPhrases} />
        </Terminal>

        <div className="hero-cta">
          <ButtonLink href="#work" variant="primary" icon="fa-solid fa-arrow-right">
            View my work
          </ButtonLink>
          <ButtonLink href="#contact" variant="outline" icon="fa-solid fa-envelope">
            Get in touch
          </ButtonLink>
        </div>
      </div>

      <div className="hero-photo">
        <div className="hero-photo-frame">
          <img
            src={markPhoto}
            alt="Stephen Mark O. Maluto"
            className="hero-photo-img"
          />
        </div>
      </div>
    </Section>
  )
}

import { contact, socials } from '../data/portfolio'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="get in touch" wrapClassName="contact-wrap">
      <h2 className="contact-big">
        Let's build something.
        <br />
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </h2>

      <div className="contact-socials">
        {socials.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
            <i className={social.icon} aria-hidden="true" /> {social.label}
          </a>
        ))}
      </div>
    </Section>
  )
}

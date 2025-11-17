import './App.css'
import ShinyText from './components/shiny-text/ShinyText'
import PillNav from './components/pill-nav/PillNav'
import { ModeToggle } from './components/mode-toggle'
import ShuffleText from './components/shuffle/Shuffle'
import CountUp from './components/count-up/CountUp'
import logoImage from './assets/Logo.png'
import {
  contact,
  experience,
  gallery,
  highlights,
  profile,
  projects,
  resources,
  metrics,
} from './content'

const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="section">
    <header className="section-heading">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2>
        <ShinyText text={title} as="span" className="section-title-shiny" speed={6} />
      </h2>
    </header>
    {children}
  </section>
)

function App() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  const pillNavItems = [
    {
      key: 'logo',
      href: '#top',
      ariaLabel: `${profile.name} home`,
      className: 'pill-nav-link--logo',
      node: (
        <span className="pill-nav-logo" aria-hidden="true">
          <img src={logoImage} alt="" loading="lazy" />
        </span>
      ),
    },
    ...navItems,
    { key: 'mode-toggle', node: <ModeToggle className="mode-toggle--pill" /> },
  ]

  const resumeLink = resources[0]?.url ?? `mailto:${contact.email}`
  const currentStatus =
    highlights.find((item) => item.label.toLowerCase().includes('current'))?.value ??
    highlights[0]?.value ??
    profile.availability

  return (
    <div className="page">
      <header className="site-header">
        <PillNav items={pillNavItems} defaultActiveHref="#about" />
      </header>

      <section className="hero" id="top">
        <div className="hero-text">
          <ShuffleText
            text={profile.name}
            className="hero-name"
            textAlign="left"
            rootMargin="-40px"
            shuffleTimes={1}
            triggerOnHover={true}
          />
          <p className="eyebrow">{profile.availability}</p>
          <h1>
            <ShinyText text={profile.tagline} disabled ={false} as="span" className="hero-heading" speed={4} />
          </h1>
          <p className="lead">{profile.summary}</p>
          <div className="hero-meta">
            <span>{profile.location}</span>
          </div>
        </div>
        {/* <div className="hero-card">
          <p className="kicker">Currently</p>
          <p className="hero-status">{currentStatus}</p>
          <p className="hero-note">
            Swap this card with a portrait, looping video, or any visual you want to highlight.
          </p>
        </div> */}
      </section>

      <main>
        <Section id="about" kicker="About" title="Impact">
          <div className="about-grid">
            <p className="lead">{profile.bio}</p>
            <ul className="highlight-grid">
              {highlights.map((item) => (
                <li key={item.label}>
                  <p className="label">{item.label}</p>
                  <p className="value">{item.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="experience" kicker="Professional Experience" title="My Professional Journey">
          <div className="experience-list">
            {experience.map((role) => (
              <article key={role.company} className="experience-card">
                <div>
                  <p className="label">{role.period}</p>
                  <h3>
                    <ShinyText text={role.role} as="span" className="experience-title-shiny" speed={5} />
                  </h3>
                  <p className="company">{role.company}</p>
                </div>
                <ul>
                  {role.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" kicker="Projects" title="Highlighted Projects">
          <div className="card-grid">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <header>
                  <h3>
                    <ShinyText text={project.title} as="span" className="card-title-shiny" speed={5} />
                  </h3>
                  <p>{project.description}</p>
                </header>
                <ul className="tag-list">
                  {project.tech.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {project.link && (
                  <a className="inline-link" href={project.link} target="_blank" rel="noreferrer">
                    Read the case study →
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>

        {/* <Section id="resources" kicker="Resources" title="Links you share often">
          <div className="resource-grid">
            {resources.map((item) => (
              <a key={item.label} href={item.url} target="_blank" rel="noreferrer" className="resource-card">
                <p className="label">{item.label}</p>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </Section> */}

        <Section id="gallery" kicker="Gallery" title="Visual Showcase">
          <div className="gallery-grid">
            {gallery.map((item) => (
              <figure key={item.alt}>
                <img src={item.url} alt={item.alt} loading="lazy" />
                <figcaption>{item.alt}</figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section id="metrics" kicker="Wins" title="Impact by the numbers">
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <CountUp end={metric.value} suffix={metric.suffix} duration={1.4} />
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" kicker="Contact" title="Let's Connect!">
          <div className="contact-panel">
            {/* <p className="lead">
              Prefer introductions through email? Replace this text with details on how to start a
              project, what you need in an inquiry, or your response time.
            </p> */}
            <a className="btn primary" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <div className="social-list">
              {contact.socials.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Passionate about building scalable, impact-driven solutions.
        </p>
      </footer>
    </div>
  )
}

export default App

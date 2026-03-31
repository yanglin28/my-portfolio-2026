import { siteContent } from './content/siteContent';
import type { ContactItem, Project } from './types';

function App() {
  const { brand, about, featuredProjects, awards, contact, heroStats, footerNote } =
    siteContent;

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Frank Yang Design home">
          <span className="brand-name">{brand.studioName}</span>
          <span className="brand-subtitle">{brand.localName}</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio 2026</p>
            <h1>{brand.intro}</h1>
            <p className="hero-description">{brand.description}</p>

            <div className="hero-actions">
              <a className="button-primary" href="#work">
                View selected work
              </a>
              <a className="button-secondary" href="#contact">
                Get in touch
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <p className="panel-label">{brand.role}</p>
            <ul className="stat-list">
              {heroStats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-grid intro-strip">
          <p>
            Inspired by editorial portfolio pacing, this site keeps the presentation calm and
            spacious while letting each project carry a clear technical and design narrative.
          </p>
          <p>
            The content architecture is intentionally modular, so future projects can be added by
            updating a single data file instead of rebuilding page sections manually.
          </p>
        </section>

        <section className="content-section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Design, engineering, and digital storytelling in one place.</h2>
          </div>

          <div className="project-list">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index + 1} />
            ))}
          </div>
        </section>

        <section className="content-section split-layout" id="about">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">About</p>
            <h2>
              A multidisciplinary practice shaped by product design, R&D, and hands-on technical
              development.
            </h2>
          </div>

          <div className="rich-text">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="content-section split-layout" id="awards">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">Recognition</p>
            <h2>Honors, awards, and milestone projects.</h2>
          </div>

          <div className="award-list">
            {awards.map((award) => (
              <a className="award-item" href={award.href} key={award.title} target="_blank" rel="noreferrer">
                <span>{award.title}</span>
                <small>{award.context}</small>
              </a>
            ))}
          </div>
        </section>

        <section className="content-section contact-panel" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Open to product design, visualization, and cross-disciplinary collaboration.</h2>
          </div>

          <div className="contact-grid">
            {contact.map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{brand.name}</p>
        <p>{footerNote}</p>
      </footer>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-meta">
        <span className="project-index">0{index}</span>
        <div>
          <p className="project-year">{project.year}</p>
          <p className="project-category">{project.category}</p>
        </div>
      </div>

      <div className="project-main">
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-details">{project.details}</p>

        <ul className="tag-list" aria-label={`${project.title} tags`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.links.map((link) => (
            <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function ContactCard({ item }: { item: ContactItem }) {
  const content = (
    <>
      <small>{item.label}</small>
      <strong>{item.value}</strong>
    </>
  );

  if (item.href) {
    return (
      <a className="contact-card" href={item.href}>
        {content}
      </a>
    );
  }

  return <div className="contact-card">{content}</div>;
}

export default App;

import { useEffect, useRef, useState } from 'react'
import heroPhoto from './assets/frontpage.jpg'
import {
  competitive,
  contact,
  earlierEducation,
  education,
  honors,
  ielts,
  leadership,
  moreTeaching,
  navLinks,
  role,
  outreach,
  projects,
  research,
  researchInterests,
  skills,
  socials,
  teaching,
} from './data'
import { isDarkBrand, skillIcons, skillMonograms } from './skillIcons'

const emptyForm = { name: '', email: '', message: '' }

function Icon({ path, size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

const icons = {
  moon: 'M20.4 14.1a1 1 0 0 0-1.2-1.3 7 7 0 0 1-8-9.2 1 1 0 0 0-1.3-1.2 9.5 9.5 0 1 0 10.500 11.700z',
  sun: 'M12 7.500a4.500 4.500 0 1 0 0 9 4.500 4.500 0 0 0 0-9zM12 1.500a1 1 0 0 1 1 1V4a1 1 0 1 1-2 0V2.500a1 1 0 0 1 1-1zm0 17.500a1 1 0 0 1 1 1v1.500a1 1 0 1 1-2 0V20a1 1 0 0 1 1-1zM1.500 12a1 1 0 0 1 1-1H4a1 1 0 1 1 0 2H2.500a1 1 0 0 1-1-1zM19 12a1 1 0 0 1 1-1h1.500a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1zM4.600 4.600a1 1 0 0 1 1.400 0l1.100 1.100a1 1 0 0 1-1.400 1.400L4.600 6a1 1 0 0 1 0-1.400zm12.300 12.300a1 1 0 0 1 1.400 0l1.100 1.100a1 1 0 0 1-1.400 1.400l-1.100-1.100a1 1 0 0 1 0-1.400zM4.600 19.400a1 1 0 0 1 0-1.400l1.100-1.100a1 1 0 0 1 1.400 1.400L6 19.400a1 1 0 0 1-1.400 0zM16.900 7.100a1 1 0 0 1 0-1.400L18 4.600A1 1 0 0 1 19.400 6l-1.100 1.100a1 1 0 0 1-1.400 0z',
  chevron: 'M5.3 8.3a1 1 0 0 1 1.4 0l5.3 5.300 5.300-5.300a1 1 0 1 1 1.400 1.400l-6 6a1 1 0 0 1-1.400 0l-6-6a1 1 0 0 1 0-1.400z',
  arrow: 'M13.2 5.3a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 1 1-1.4-1.4l4.3-4.3H4a1 1 0 1 1 0-2h13.5l-4.3-4.3a1 1 0 0 1 0-1.4z',
  download:
    'M12 3a1 1 0 0 1 1 1v9.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4l3.3 3.3V4a1 1 0 0 1 1-1zM5 19a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5z',
  external:
    'M14 4a1 1 0 1 0 0 2h2.6l-6.3 6.3a1 1 0 1 0 1.4 1.4L18 7.4V10a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1h-5zM6 7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-4a1 1 0 1 0-2 0v4H6V9h4a1 1 0 1 0 0-2H6z',
  mail: 'M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm.4 2h15.2L12 12.7 4.400 7zM4 9.200l7.400 5.600a1 1 0 0 0 1.200 0L20 9.200V17H4V9.200z',
  pin: 'M12 2a7 7 0 0 0-7 7c0 4.700 5.500 11.500 6.200 12.300a1 1 0 0 0 1.600 0C13.500 20.500 19 13.700 19 9a7 7 0 0 0-7-7zm0 9.500a2.500 2.500 0 1 1 0-5 2.500 2.500 0 0 1 0 5z',
}

// Neural-network mark shown beside the name in the nav and footer.
function LogoMark() {
  return (
    <svg className="logo__mark" viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#0b0c0e" />
      <path
        d="M16 21 32 14M16 21 32 32M16 21 32 50M16 43 32 14M16 43 32 32M16 43 32 50M32 14 48 32M32 32h16M32 50 48 32"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <g fill="#fff">
        <circle cx="16" cy="21" r="5" />
        <circle cx="16" cy="43" r="5" />
        <circle cx="32" cy="14" r="5" />
        <circle cx="32" cy="32" r="5" />
        <circle cx="32" cy="50" r="5" />
        <circle cx="48" cy="32" r="5" />
      </g>
    </svg>
  )
}

function SectionHead({ eyebrow, title, text }) {
  return (
    <header className="section-head reveal">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  )
}

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

// Skill tiles: a logo (or lettered fallback) above each skill name.
function SkillTiles({ items }) {
  return (
    <ul className="tiles">
      {items.map((item) => {
        const icon = skillIcons[item]
        const brand = icon && !isDarkBrand(icon.hex) ? `#${icon.hex}` : undefined
        return (
          <li key={item} style={{ '--brand': brand }}>
            {icon ? (
              <Icon path={icon.path} size={28} />
            ) : (
              <b aria-hidden="true">{skillMonograms[item] || item.slice(0, 2)}</b>
            )}
            <span>{item}</span>
          </li>
        )
      })}
    </ul>
  )
}

// Social tiles; an entry with `copy` copies that text to the clipboard instead of linking.
function SocialLinks() {
  const [copied, setCopied] = useState(false)

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${text}`
    }
  }

  return (
    <ul className="socials">
      {socials.map((social) => (
        <li key={social.label}>
          {social.copy ? (
            <button
              type="button"
              onClick={() => copy(social.copy)}
              aria-label={`Copy email address ${social.copy}`}
              title={`Copy ${social.copy}`}
            >
              <Icon path={social.icon} />
              <span className="socials__note" role="status">
                {copied && 'Copied'}
              </span>
            </button>
          ) : (
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
            >
              <Icon path={social.icon} />
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

// Facebook video that only loads, and so only starts playing, once it scrolls into view.
function FacebookVideo({ href, title }) {
  const frame = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(frame.current)
    return () => observer.disconnect()
  }, [])

  const src = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(href)}&show_text=false&autoplay=true&mute=true`

  return (
    <div className="video" ref={frame}>
      {inView && (
        <iframe
          src={src}
          title={title}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  // index.html sets data-theme before first paint, from the saved choice.
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('main section[id]').forEach((el) => spy.observe(el))

    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            reveal.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el))

    return () => {
      spy.disconnect()
      reveal.disconnect()
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage can be blocked; the toggle still works for this visit.
    }
  }, [theme])

  const updateField = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  const submit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Message: form.message,
          _subject: `Portfolio message from ${form.name} <${form.email}>`,
          _replyto: form.email,
          _template: 'box',
        }),
      })
      if (!response.ok) throw new Error('Request failed')
      setForm(emptyForm)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <header className={`nav${scrolled ? ' nav--solid' : ''}`}>
        <div className="container nav__inner">
          <a className="logo" href="#home">
            <LogoMark />
            <span>
              Adnan<b>Shad</b>
            </span>
          </a>
          <nav className={`nav__links${menuOpen ? ' is-open' : ''}`} aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? 'is-active' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a className="btn btn--primary nav__cv" href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <Icon path={theme === 'dark' ? icons.sun : icons.moon} size={20} />
          </button>
          <button
            className={`burger${menuOpen ? ' is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero__inner">
            <div className="hero__text">
              <h1>
                Hi, I&apos;m <span className="accent">Abu Adnan Shad</span>
              </h1>
              <p className="hero__role">
                {role}
              </p>
              <p className="hero__lead">
                I am a Computer Science and Engineering graduate from Leading University,
                Bangladesh, interested in machine learning for healthcare and trustworthy AI. My
                undergraduate thesis built a chronic kidney disease screening model on highly
                imbalanced data, explained with SHAP. I am looking for a funded MS or PhD position
                starting in Fall 2027.
              </p>
              <div className="hero__more">
                <div className="hero__links">
                  <a className="btn btn--primary" href={contact.resume} download>
                    <Icon path={icons.download} size={16} /> Download CV
                  </a>
                  <SocialLinks />
                </div>
              </div>
            </div>

            <div className="hero__visual">
              <div className="portrait">
                <img src={heroPhoto} alt="Abu Adnan Shad" width="960" height="1200" />
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <SectionHead title="Academic Background" />
            <div className="grid">
              {education.map((item) => (
                <article key={item.degree} className="card education reveal">
                  <div>
                    <time>{item.period}</time>
                    <h3>{item.degree}</h3>
                    <p>{item.school}</p>
                    {item.coursework && (
                      <p className="education__courses">
                        Relevant coursework: {item.coursework}
                      </p>
                    )}
                  </div>
                  <p className="education__score">
                    <strong>{item.score}</strong>
                    <span>{item.scoreLabel}</span>
                  </p>
                </article>
              ))}
              <p className="ielts reveal">
                <b>IELTS Academic</b> ({ielts.date}):{' '}
                {ielts.scores.map((score) => `${score.label} ${score.value}`).join(' · ')}
              </p>
            </div>
            <details className="more reveal">
              <summary>
                Earlier education <Icon path={icons.chevron} size={16} />
              </summary>
              <ul className="card more__list">
                {earlierEducation.map((item) => (
                  <li key={item.title}>
                    <time>{item.period}</time>
                    <div>
                      <b>{item.title}</b>
                      {item.school && <span>{item.school}</span>}
                    </div>
                    <p>
                      <strong>{item.score}</strong>
                      <span>{item.note}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>

        <section id="research" className="section">
          <div className="container">
            <SectionHead title="Research Experience" />
            <div className="interests reveal">
              <h3>Research interests</h3>
              <Tags items={researchInterests} />
            </div>
            <article className="card research reveal">
              <span className="badge">{research.kind}</span>
              <h3>
                <a href={research.href} target="_blank" rel="noreferrer">
                  {research.title} <Icon path={icons.external} size={16} />
                </a>
              </h3>
              <p className="research__meta">
                Supervised by {research.supervisor} · {research.period}
              </p>
              <Tags items={research.tags} />
              <ul className="metrics">
                {research.metrics.map((metric) => (
                  <li key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </li>
                ))}
              </ul>
              <dl className="points">
                {research.points.map((point) => (
                  <div key={point.label}>
                    <dt>{point.label}</dt>
                    <dd>{point.text}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </section>

        <section id="skills" className="section section--alt">
          <div className="container">
            <SectionHead title="Skills & Tools" />
            <div className="grid grid--skills">
              {skills.map((area) => (
                <article
                  key={area.title}
                  className={`card skills reveal${area.wide ? ' skills--wide' : ''}`}
                >
                  <h3>
                    {area.title}
                    {area.learning && <span className="badge">In progress</span>}
                  </h3>
                  <dl>
                    {area.groups.map((group) => (
                      <div key={group.label}>
                        <dt>{group.label}</dt>
                        <dd>
                          <SkillTiles items={group.items} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
              <article className="card skills skills--wide skills--cp reveal">
                <h3>Competitive Programming</h3>
                <ul className="cp">
                  {competitive.map((item) => (
                    <li key={item.value}>
                      <strong>{item.value}</strong>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section section--alt">
          <div className="container">
            <SectionHead title="Technical Projects" />
            <div className="grid grid--projects">
              {projects.map((project, index) => (
                <article key={project.title} className="card project reveal">
                  <div className="project__top">
                    <span className="project__num" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{project.title}</h3>
                    {project.href && (
                      <a
                        className="project__link"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} on GitHub`}
                      >
                        <Icon path={icons.external} />
                      </a>
                    )}
                  </div>
                  <Tags items={project.tags} />
                  <ul className="project__points">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="teaching" className="section">
          <div className="container">
            <SectionHead title="Teaching & Leadership" />
            <div className="grid grid--experience">
              <article className="card reveal">
                <h3>Teaching</h3>
                <ol className="timeline">
                  {teaching.map((item) => (
                    <li key={item.role}>
                      {item.period && <time>{item.period}</time>}
                      <h4>{item.role}</h4>
                      {item.org && (
                        <p className="timeline__org">
                          {item.href ? (
                            <a href={item.href} target="_blank" rel="noreferrer">
                              {item.org}
                            </a>
                          ) : (
                            item.org
                          )}
                        </p>
                      )}
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ol>
                <details className="more more--left">
                  <summary>
                    More teaching <Icon path={icons.chevron} size={16} />
                  </summary>
                  <ol className="timeline">
                    {moreTeaching.map((item) => (
                      <li key={item.role}>
                        {item.period && <time>{item.period}</time>}
                        <h4>{item.role}</h4>
                        {item.org && (
                          <p className="timeline__org">
                            {item.href ? (
                              <a href={item.href} target="_blank" rel="noreferrer">
                                {item.org}
                              </a>
                            ) : (
                              item.org
                            )}
                          </p>
                        )}
                        <p>{item.text}</p>
                      </li>
                    ))}
                  </ol>
                </details>
              </article>

              <article className="card reveal">
                <h3>Leadership</h3>
                <ol className="timeline">
                  {leadership.map((item) => (
                    <li key={item.role}>
                      {item.period && <time>{item.period}</time>}
                      <h4>{item.role}</h4>
                      {item.org && (
                        <p className="timeline__org">
                          {item.href ? (
                            <a href={item.href} target="_blank" rel="noreferrer">
                              {item.org}
                            </a>
                          ) : (
                            item.org
                          )}
                        </p>
                      )}
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ol>
              </article>

              <article className="card reveal">
                <h3>Affiliations & awards</h3>
                <ul className="honors">
                  {honors.map((honor) => (
                    <li key={honor.org}>
                      <time>{honor.period}</time>
                      <b>{honor.title}</b>
                      <span>{honor.org}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <article className="card outreach reveal">
              <div>
                <span className="eyebrow">Outreach · {outreach.period}</span>
                <h3>{outreach.role}</h3>
                <p className="timeline__org">
                  <a href={outreach.href} target="_blank" rel="noreferrer">
                    {outreach.org}
                  </a>
                </p>
                <p className="outreach__text">{outreach.text}</p>
                <a
                  className="btn btn--primary"
                  href={outreach.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit the page <Icon path={icons.external} size={16} />
                </a>
              </div>
              <FacebookVideo href={outreach.video} title={`${outreach.org} video`} />
            </article>
          </div>
        </section>

        <section id="contact" className="section section--alt">
          <div className="container">
            <SectionHead
              title="Get in Touch"
              text="I am looking for funded MS or PhD positions starting Fall 2027 and am always happy to talk about research."
            />
            <div className="contact">
              <form className="card form reveal" onSubmit={submit}>
                <div className="form__row">
                  <label>
                    Name
                    <input
                      name="name"
                      value={form.name}
                      onChange={updateField}
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={updateField}
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>
                <label>
                  Message
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={updateField}
                    placeholder="How can I help?"
                    required
                  />
                </label>
                <button className="btn btn--primary" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                <p className="form__status" role="status">
                  {status === 'sent' && 'Thanks — your message has been sent.'}
                  {status === 'error' &&
                    'Something went wrong. Please email me directly instead.'}
                </p>
              </form>

              <ul className="contact__info reveal">
                <li>
                  <span className="contact__icon">
                    <Icon path={icons.mail} size={20} />
                  </span>
                  <div>
                    <span>Email</span>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </li>
                <li>
                  <span className="contact__icon">
                    <Icon path={icons.pin} size={20} />
                  </span>
                  <div>
                    <span>Location</span>
                    <p>{contact.location}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <a className="logo" href="#home">
            <LogoMark />
            <span>
              Adnan<b>Shad</b>
            </span>
          </a>
          <p>© {new Date().getFullYear()} Abu Adnan Shad. All rights reserved.</p>
          <SocialLinks />
        </div>
      </footer>
    </>
  )
}

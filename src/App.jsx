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
  outreach,
  projects,
  research,
  researchInterests,
  roles,
  skills,
  socials,
  teaching,
} from './data'

const emptyForm = { name: '', email: '', message: '' }

function Icon({ path, size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

const icons = {
  chevron: 'M5.3 8.3a1 1 0 0 1 1.4 0l5.3 5.300 5.300-5.300a1 1 0 1 1 1.400 1.400l-6 6a1 1 0 0 1-1.400 0l-6-6a1 1 0 0 1 0-1.400z',
  arrow: 'M13.2 5.3a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 1 1-1.4-1.4l4.3-4.3H4a1 1 0 1 1 0-2h13.5l-4.3-4.3a1 1 0 0 1 0-1.4z',
  download:
    'M12 3a1 1 0 0 1 1 1v9.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.4l3.3 3.3V4a1 1 0 0 1 1-1zM5 19a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5z',
  external:
    'M14 4a1 1 0 1 0 0 2h2.6l-6.3 6.3a1 1 0 1 0 1.4 1.4L18 7.4V10a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1h-5zM6 7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-4a1 1 0 1 0-2 0v4H6V9h4a1 1 0 1 0 0-2H6z',
  mail: 'M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4zm.4 2h15.2L12 12.7 4.400 7zM4 9.200l7.400 5.600a1 1 0 0 0 1.200 0L20 9.200V17H4V9.200z',
  pin: 'M12 2a7 7 0 0 0-7 7c0 4.700 5.500 11.500 6.200 12.300a1 1 0 0 0 1.600 0C13.500 20.500 19 13.700 19 9a7 7 0 0 0-7-7zm0 9.500a2.500 2.500 0 1 1 0-5 2.500 2.500 0 0 1 0 5z',
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

// Cycles through the hero roles with a typewriter effect.
function useTyped(words) {
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(words[0].length)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const word = words[index]
    let delay = deleting ? 40 : 80
    if (!deleting && length === word.length) delay = 1800
    const timer = setTimeout(() => {
      if (!deleting && length === word.length) setDeleting(true)
      else if (deleting && length === 0) {
        setDeleting(false)
        setIndex((index + 1) % words.length)
      } else setLength(length + (deleting ? -1 : 1))
    }, delay)
    return () => clearTimeout(timer)
  }, [words, index, length, deleting])

  return words[index].slice(0, length)
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const typed = useTyped(roles)

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
            Adnan<span>Shad</span>
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
              Contact Me
            </a>
          </nav>
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
                <span>{typed}</span>
                <i className="caret" aria-hidden="true" />
              </p>
              <p className="hero__lead">
                I am a Computer Science and Engineering graduate from Leading University,
                Bangladesh, interested in machine learning for healthcare. For my undergraduate
                thesis, I built a chronic kidney disease screening model on highly imbalanced data,
                set its decision threshold to keep missed cases low, and used SHAP to check what it
                learned. My broader interests include trustworthy AI and data science, and I also
                build Android and Flutter apps. I am looking for a funded MS or PhD position
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
            <SectionHead eyebrow="Education" title="Academic Background" />
            <div className="grid">
              {education.map((item) => (
                <article key={item.degree} className="card education reveal">
                  <div>
                    <time>{item.period}</time>
                    <h3>{item.degree}</h3>
                    <p>{item.school}</p>
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
            <SectionHead
              eyebrow="Technical expertise"
              title="Skills & tools"
              text="The languages, methods, and platforms I work with."
            />
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
                          <Tags items={group.items} />
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
            <SectionHead
              eyebrow="Selected work"
              title="Technical projects"
              text="Mobile apps and hardware built to solve everyday problems."
            />
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
                  <p>
                    <b>Problem:</b> {project.problem}
                  </p>
                  <p>
                    <b>Solution:</b> {project.solution}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="teaching" className="section">
          <div className="container">
            <SectionHead title="Teaching & Leadership" />
            <article className="card outreach reveal">
              <div>
                <span className="eyebrow">Outreach</span>
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
          </div>
        </section>

        <section id="contact" className="section section--alt">
          <div className="container">
            <SectionHead
              eyebrow="Contact"
              title="Let's work together"
              text="Open to research collaborations, graduate opportunities, and software roles."
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
            Adnan<span>Shad</span>
          </a>
          <p>© {new Date().getFullYear()} Abu Adnan Shad. All rights reserved.</p>
          <SocialLinks />
        </div>
      </footer>
    </>
  )
}

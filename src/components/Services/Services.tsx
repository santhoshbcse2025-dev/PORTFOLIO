'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Services.module.css'

const services = [
  {
    mono: 'WA',
    name: 'Web Applications',
    tagline: 'Full-stack sites and web apps, built to spec and shipped.',
    tools: ['Next.js', 'React', 'Python', 'Flask'],
    deliverables: [
      'Responsive build across desktop and mobile',
      'Deployed live and connected to your domain',
      'Basic SEO and performance tuning included',
    ],
  },
  {
    mono: 'ML',
    name: 'AI & Machine Learning',
    tagline: 'Models trained on your data, wrapped in something usable.',
    tools: ['TensorFlow', 'CNN', 'OpenCV', 'Flask API'],
    deliverables: [
      'Model trained and tuned on your dataset',
      'Simple interface to run predictions',
      'Handover docs so you can maintain it',
    ],
  },
  {
    mono: 'LP',
    name: 'Landing Pages & MVPs',
    tagline: 'A fast, focused build to test an idea or launch something new.',
    tools: ['React', 'HTML/CSS', 'JavaScript'],
    deliverables: [
      'Live in days, not weeks',
      'Mobile-first, built for conversion',
      'Contact or lead-capture wired in',
    ],
  },
  {
    mono: 'AT',
    name: 'Automation & Scripts',
    tagline: 'Python tools that take a repetitive task off your plate.',
    tools: ['Python', 'APIs', 'Data processing'],
    deliverables: [
      'Script or small tool built around your workflow',
      'Clear instructions to run and adjust it',
      'Edge cases you flag are handled up front',
    ],
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.' + styles.animate).forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.animate}`}>
          <span className={styles.label}>Services</span>
          <h2 className={styles.heading}>What I Can <em>Build for You</em></h2>
          <p className={styles.subhead}>
            Open to freelance and contract work, remote, for clients anywhere in the world.
          </p>
        </div>

        <div className={styles.ledger}>
          {services.map((s, i) => {
            const open = openIndex === i
            return (
              <div key={s.mono} className={`${styles.row} ${styles.animate}`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <button
                  className={styles.rowHead}
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className={styles.mono}>{s.mono}</span>
                  <span className={styles.nameCol}>
                    <span className={styles.name}>{s.name}</span>
                    <span className={styles.tagline}>{s.tagline}</span>
                  </span>
                  <span className={styles.toolsCol}>
                    {s.tools.map(t => <span key={t} className={styles.tool}>{t}</span>)}
                  </span>
                  <span className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}>+</span>
                </button>
                <div className={`${styles.panel} ${open ? styles.panelOpen : ''}`}>
                  <ul className={styles.deliverables}>
                    {s.deliverables.map(d => <li key={d}>{d}</li>)}
                  </ul>
                  <a href="#contact" className={styles.panelCta}>Discuss this</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

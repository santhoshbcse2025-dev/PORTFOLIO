'use client'
import { useEffect, useRef } from 'react'
import styles from './Internships.module.css'

const internships = [
  {
    role: 'DSA (C++) Programming Intern',
    company: 'InternPe',
    duration: '04 May 2026 – 31 May 2026',
    type: 'Certificate ID: IPI#75291',
    skills: ['Data Structures & Algorithms', 'C++ Programming', 'Problem Solving'],
    note: 'Recognized as a sincere, dedicated intern with a professional attitude and excellent job knowledge.',
    color: 'blue',
  },
  {
    role: 'Full Stack Development Intern',
    company: 'Certified Internship Course',
    duration: 'Completed & Certified',
    type: 'Frontend & Backend',
    skills: ['Frontend Development', 'Backend Development', 'Web Applications', 'Database Management'],
    note: undefined as string | undefined,
    color: 'green',
  },
  {
    role: 'Machine Learning Intern',
    company: 'Presevex',
    duration: '3-Month Internship',
    type: 'Stipend: ₹15,000',
    skills: ['Machine Learning', 'Python', 'TransitPulse AI', 'Resume Analyzer'],
    note: 'Delivered TransitPulse AI and an NLP-based Resume Analyzer during the internship.',
    color: 'orange',
  },
]

export default function Internships() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add(styles.visible)),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.' + styles.animate).forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="internships" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.animate}`}>
          <span className={styles.label}>Experience</span>
          <h2 className={styles.heading}>Internships &amp; <em>Work</em></h2>
        </div>
        <div className={styles.list}>
          {internships.map((intern, i) => (
            <div key={i} className={`${styles.card} ${styles.animate} ${styles[intern.color]}`} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className={styles.cardLeft}>
                <div className={styles.iconWrap}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                  </svg>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.role}>{intern.role}</h3>
                    <p className={styles.company}>{intern.company}</p>
                  </div>
                  <div className={styles.cardMeta}>
                    <span className={styles.duration}>{intern.duration}</span>
                    <span className={styles.typeBadge}>{intern.type}</span>
                  </div>
                </div>
                <div className={styles.skillTags}>
                  {intern.skills.map(s => <span key={s} className={styles.skillTag}>{s}</span>)}
                </div>
                {intern.note && <p className={styles.note}>{intern.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

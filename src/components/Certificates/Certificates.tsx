'use client'
import { useEffect, useRef } from 'react'
import styles from './Certificates.module.css'

const certificates = [
  { title: 'DSA with C++ Programming', issuer: 'InternPe · Certificate ID IPI#75291', year: '2026', category: 'DSA / C++', link: '#' },
  { title: 'Full Stack Development', issuer: 'Certified Internship Course', year: '2026', category: 'Full Stack', link: '#' },
  { title: 'Machine Learning', issuer: 'Presevex', year: '2026', category: 'ML / AI', link: '#' },
  { title: 'Solving 50 Problems in C++', issuer: 'Skill Certificates', year: '2025', category: 'Problem Solving', link: '#' },
  { title: 'Python Programming', issuer: 'Online Platform', year: '2025', category: 'Programming', link: '#' },
  { title: 'Web Development Basics', issuer: 'Online Platform', year: '2024', category: 'Web Dev', link: '#' },
]

const achievements = [
  { icon: '🏆', title: '2nd Place — Hackarena 2.0 Zonals', desc: 'Team Blue Horizon, Ignite Room · qualified for National Finals, Delhi' },
  { icon: '🚀', title: 'Funded — CIT-CITIL Innovest 3.0', desc: 'National-level hackathon, with Team OrbitX' },
  { icon: '🧭', title: '5 More National Hackathons', desc: 'Participated across additional national-level events' },
  { icon: '⭐', title: '400+ LeetCode · 250+ in C++', desc: '100-day coding streak badge · 237 problems on SkillRack' },
  { icon: '💼', title: '3 Internships Completed', desc: 'DSA (C++) · Full Stack · Machine Learning' },
  { icon: '🎓', title: 'Chennai Institute of Technology', desc: 'B.E. CSE · 2025 – 2029' },
]

export default function Certificates() {
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
    <section ref={sectionRef} id="certificates" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.animate}`}>
          <span className={styles.label}>Certifications & Achievements</span>
          <h2 className={styles.heading}>Credentials &amp; <em>Recognition</em></h2>
        </div>
        <div className={styles.twoCol}>
          <div>
            <h3 className={`${styles.subHeading} ${styles.animate}`}>Certifications</h3>
            <div className={styles.certGrid}>
              {certificates.map((c, i) => (
                <a key={i} href={c.link} target="_blank" rel="noreferrer" className={`${styles.certCard} ${styles.animate}`} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className={styles.certTop}>
                    <span className={styles.certCategory}>{c.category}</span>
                    <span className={styles.certYear}>{c.year}</span>
                  </div>
                  <h4 className={styles.certTitle}>{c.title}</h4>
                  <p className={styles.certIssuer}>{c.issuer}</p>
                  <span className={styles.certView}>View Certificate →</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className={`${styles.subHeading} ${styles.animate}`}>Achievements</h3>
            <div className={styles.achieveList}>
              {achievements.map((a, i) => (
                <div key={i} className={`${styles.achieveCard} ${styles.animate}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className={styles.achieveIcon}>{a.icon}</span>
                  <div>
                    <h4 className={styles.achieveTitle}>{a.title}</h4>
                    <p className={styles.achieveDesc}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

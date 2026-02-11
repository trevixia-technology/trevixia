import { RiHeartLine, RiTeamLine, RiRocketLine, RiPlantLine, RiGlobalLine, RiFlashlightLine, RiEyeLine } from 'react-icons/ri'
import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import company from '../../data/company.json'
import styles from './About.module.css'

const valueIcons = [<RiPlantLine />, <RiFlashlightLine />, <RiHeartLine />, <RiEyeLine />]
const values = company.values.map((v, i) => ({
  icon: valueIcons[i],
  title: v.title,
  text: v.description,
}))

const team = [
  { emoji: '👨‍💻', name: 'Founder & CEO', role: 'Visionary', bio: 'Driving the mission to build products that blend technology with nature-inspired design.' },
  { emoji: '🎨', name: 'Head of Design', role: 'Creative Lead', bio: 'Crafting interfaces that are as beautiful as they are functional — pixel by pixel.' },
  { emoji: '⚙️', name: 'Head of Engineering', role: 'Tech Lead', bio: 'Architecting scalable systems that stand the test of time and traffic.' },
]

const timeline = [
  { year: company.founded, title: 'The Seed Was Planted', text: `${company.name} was founded in ${company.location.city} with a vision to build software products inspired by nature.` },
  { year: '2025', title: 'First Product Launch', text: 'Our flagship product went live, serving thousands of users from day one.' },
  { year: '2026', title: 'Growing & Scaling', text: 'Expanding our product suite and team, building a global presence from Chennai.' },
]

export default function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className={styles['about-hero']}>
        <div className={styles['about-hero-bg']} />
        <div className="container">
          <AnimatedSection className={styles['about-hero-content']}>
            <span className="section-label">
              <RiTeamLine /> About Trevixia
            </span>
            <h1>The Story Behind the {company.brand.plantName}</h1>
            <p>
              We're an {company.type.toLowerCase()} from {company.location.full} — building
              software products that are elegant, resilient, and alive with purpose. Our name
              is inspired by the {company.brand.plantSpecies}, the iconic {company.brand.plantName.toLowerCase()}.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className={`section ${styles.story}`}>
        <div className="container">
          <div className={styles['story-grid']}>
            <AnimatedSection>
              <div className={styles['story-image']}>
                <span className={styles['story-image-emoji']}>❄️🌿</span>
                <span className={styles['story-image-label']}>{company.brand.plantSpecies} • {company.brand.plantName}</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="section-label">
                <RiPlantLine /> Our Origin
              </span>
              <h2 className="section-title">Born From Nature's Blueprint</h2>
              <div className={styles['story-text']}>
                <p>
                  {company.brand.plantDescription}
                </p>
                <p>
                  This extraordinary plant became our muse. Like it, we believe in
                  building products that are both beautiful and resilient — solutions
                  that adapt to their environment while maintaining a distinct identity.
                </p>
                <p>
                  Founded in the vibrant city of {company.location.city}, {company.name} brings together a team
                  of passionate builders, designers, and thinkers who share a common goal:
                  to create software products that leave a lasting impression.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.values}`}>
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="section-label">
              <RiHeartLine /> Our Values
            </span>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle mx-auto">
              These aren't just words on a wall — they're the principles
              that guide every decision we make.
            </p>
          </AnimatedSection>

          <div className={styles['values-grid']}>
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`glass-card ${styles['value-card']}`}>
                  <div className={styles['value-icon']}>{v.icon}</div>
                  <h4 className={styles['value-title']}>{v.title}</h4>
                  <p className={styles['value-text']}>{v.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="section">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="section-label">
              <RiRocketLine /> Our Journey
            </span>
            <h2 className="section-title">Milestones Along the Way</h2>
            <p className="section-subtitle mx-auto">
              Every great story has chapters. Here's how ours is unfolding.
            </p>
          </AnimatedSection>

          <div className={styles.timeline}>
            {timeline.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className={styles['timeline-item']}>
                  <div className={styles['timeline-dot']} />
                  <div className={styles['timeline-year']}>{t.year}</div>
                  <h4 className={styles['timeline-title']}>{t.title}</h4>
                  <p className={styles['timeline-text']}>{t.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.values}`}>
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="section-label">
              <RiTeamLine /> The Team
            </span>
            <h2 className="section-title">The People Behind the Plant</h2>
            <p className="section-subtitle mx-auto">
              A small but mighty team of builders who believe in craft,
              collaboration, and constant evolution.
            </p>
          </AnimatedSection>

          <div className={styles['team-grid']}>
            {team.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className={`glass-card ${styles['team-card']}`}>
                  <div className={styles['team-avatar']}>{t.emoji}</div>
                  <h4 className={styles['team-name']}>{t.name}</h4>
                  <div className={styles['team-role']}>{t.role}</div>
                  <p className={styles['team-bio']}>{t.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

import {
  RiTeamLine, RiRocketLine, RiShieldCheckLine,
  RiEyeLine, RiTimeLine
} from 'react-icons/ri'
import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import company from '../../data/company.json'
import styles from './About.module.css'

const timeline = [
  { year: '2024', title: 'Founded in Chennai', text: 'Trevixia was established with a focus on building reliable, user-first software products.' },
  { year: '2024', title: 'First Product Launch', text: 'Shipped FlowBoard — a collaborative project management tool built for distributed teams.' },
  { year: '2025', title: 'Expanding the Suite', text: 'Grew the product line with VaultKey and PixelCraft, adding security and design tools to the portfolio.' },
]

const valueIcons = {
  'Engineering Excellence': <RiRocketLine />,
  'Product Thinking': <RiEyeLine />,
  'Reliability': <RiShieldCheckLine />,
  'Transparency': <RiTeamLine />,
}

const valueCopy = {
  'Engineering Excellence':
    'We write clean, maintainable code with comprehensive testing and architecture that scales with demand.',
  'Product Thinking':
    'Every technical decision is grounded in user impact and business value, not just elegance.',
  'Reliability':
    'Our systems are designed for uptime. Monitoring, alerting, and disaster recovery are built in from day one.',
  'Transparency':
    'Open communication with stakeholders at every stage — from sprint planning to production deployments.',
}

export default function About() {
  return (
    <PageTransition>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label">About</div>
            <h1 className={styles['header-title']}>
              Building Software Products<br />
              <span className={styles['header-accent']}>That Stand the Test of Scale</span>
            </h1>
            <p className={styles['header-desc']}>
              {company.description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className={`section ${styles.mission}`}>
        <div className="container">
          <div className={styles['mission-grid']}>
            <AnimatedSection>
              <div className={styles['mission-block']}>
                <h3>Our Mission</h3>
                <p>{company.mission}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className={styles['mission-block']}>
                <h3>Our Approach</h3>
                <p>
                  We treat every product as a long-term system — architected for
                  maintainability, tested for reliability, and designed for the
                  people who use it every day.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.values}`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label">Principles</div>
            <h2 className="section-title">What Drives Us</h2>
          </AnimatedSection>

          <div className={styles['values-grid']}>
            {company.values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`card ${styles['value-card']}`}>
                  <div className={styles['value-icon']}>
                    {valueIcons[v.title] || <RiRocketLine />}
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/*
      <section className={`section ${styles.timeline}`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label">Journey</div>
            <h2 className="section-title">Our Timeline</h2>
          </AnimatedSection>

          <div className={styles['timeline-list']}>
            {timeline.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={styles['timeline-item']}>
                  <div className={styles['timeline-marker']}>
                    <RiTimeLine />
                  </div>
                  <div className={styles['timeline-content']}>
                    <span className={styles['timeline-year']}>{t.year}</span>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Team - hidden for now
      <section className={`section ${styles.team}`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label">Team</div>
            <h2 className="section-title">Leadership</h2>
            <p className="section-subtitle">
              A lean team of engineers and designers focused on shipping
              quality software from Chennai to the world.
            </p>
          </AnimatedSection>

          <div className={styles['team-grid']}>
            {company.team.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`card ${styles['team-card']}`}>
                  <div className={styles['team-avatar']}>
                    {m.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3>{m.name}</h3>
                  <span className={styles['team-role']}>{m.role}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      */}
    </PageTransition>
  )
}



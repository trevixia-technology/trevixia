import { motion } from 'framer-motion'
import { RiCodeBoxLine, RiDatabase2Line, RiRepeat2Line } from 'react-icons/ri'
import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import SEO from '../../components/SEO/SEO'
import styles from './Tech.module.css'

const techAreas = [
  {
    icon: <RiCodeBoxLine />,
    title: 'Web Applications',
    text: 'Practical web systems focused on clarity, reliability, and maintainability.',
  },
  {
    icon: <RiDatabase2Line />,
    title: 'Backend Systems',
    text: 'Structured backend services and data layers for stable product operations.',
  },
  {
    icon: <RiRepeat2Line />,
    title: 'Automation Tools',
    text: 'Workflow automation and internal systems that reduce repetitive effort.',
  },
]

export default function Tech() {
  return (
    <PageTransition>
      <SEO
        title="Trevixia Technologies"
        description="Scalable software systems and digital product engineering by Trevixia Technologies."
        path="/tech"
        keywords="Trevixia Technologies, web apps, backend systems, automation tools"
      />

      <section className={styles.hero}>
        <motion.div
          className={styles.nodes}
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className={`container ${styles.heroInner}`}>
          <AnimatedSection>
            <div className="section-label">Digital Engineering</div>
            <h1>Trevixia Technologies</h1>
            <p>We build scalable software systems and digital products.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className={`section ${styles.main}`}>
        <div className="container">
          <div className={styles.grid}>
            {techAreas.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <article className={styles.card}>
                  <span className={styles.icon}>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

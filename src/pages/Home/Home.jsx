import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiArrowRightLine, RiCpuLine, RiBox3Line, RiLeafLine } from 'react-icons/ri'
import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import SEO from '../../components/SEO/SEO'
import styles from './Home.module.css'

const buildItems = [
  '3D Printed Prototypes',
  'Custom Hardware Solutions',
  'Web Applications',
  'Internal Business Tools',
  'MVP Development',
]

const particles = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  size: 2 + (index % 3),
  x: `${(index * 7) % 100}%`,
  duration: 18 + (index % 5) * 4,
  delay: (index % 4) * 1.8,
}))

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="Trevixia Control Center"
        description="Control center for Trevixia modules across 3D Labs and Technologies."
        path="/"
        keywords="Trevixia dashboard, 3D labs, software systems, engineering startup Chennai"
      />

      <section className={styles.hero}>
        <div className={styles.wave} />

        <div className={styles.particles} aria-hidden="true">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className={styles.particle}
              style={{
                left: particle.x,
                width: particle.size,
                height: particle.size,
                '--duration': `${particle.duration}s`,
                '--delay': `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        <div className={`container ${styles.heroInner}`}>
          <AnimatedSection>
            <div className={styles.microTag}>
              <RiLeafLine /> Startup building 3D solutions + software systems
            </div>
            <h1 className={styles.title}>Inspired by Nature. Built for Technology.</h1>
            <p className={styles.subtitle}>
              Trevixia builds practical engineering systems across physical and digital domains.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className={`section ${styles.modules}`}>
        <div className="container">
          <div className={styles.moduleGrid}>
            <AnimatedSection>
              <article className={styles.moduleCard}>
                <span className={styles.moduleIcon}><RiBox3Line /></span>
                <h2>Trevixia 3D Labs</h2>
                <p>Physical prototyping, 3D printing, product development.</p>
                <Link to="/labs" className={styles.moduleBtn}>
                  Explore Labs <RiArrowRightLine />
                </Link>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <article className={`${styles.moduleCard} ${styles.techCard}`}>
                <span className={styles.moduleIcon}><RiCpuLine /></span>
                <h2>Trevixia Technologies</h2>
                <p>Software systems, web apps, automation, platforms.</p>
                <Link to="/tech" className={styles.moduleBtn}>
                  Explore Tech <RiArrowRightLine />
                </Link>
              </article>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={`section ${styles.about}`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label">About Snapshot</div>
            <p className={styles.aboutText}>
              Trevixia is an early-stage engineering startup focused on building real-world solutions by
              combining hardware prototyping and software systems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className={`section ${styles.buildStrip}`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label">What We Build</div>
            <div className={styles.chips}>
              {buildItems.map((item, index) => (
                <motion.div
                  key={item}
                  className={styles.chip}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}

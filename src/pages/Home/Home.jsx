import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiSeedlingLine, RiLightbulbLine, RiShieldCheckLine, RiArrowRightLine, RiSparklingLine } from 'react-icons/ri'
import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import company from '../../data/company.json'
import styles from './Home.module.css'

const features = [
  {
    icon: <RiSeedlingLine />,
    iconClass: 'feature-icon-green',
    title: 'Rooted in Nature',
    text: 'Like the snowflake plant that thrives in any environment, our products are designed to adapt, grow, and flourish wherever they are deployed.',
  },
  {
    icon: <RiLightbulbLine />,
    iconClass: 'feature-icon-warm',
    title: 'Innovation First',
    text: 'Every product we build is born from a deep understanding of real-world problems, crafted with cutting-edge technology and timeless design principles.',
  },
  {
    icon: <RiShieldCheckLine />,
    iconClass: 'feature-icon-coral',
    title: 'Built to Last',
    text: 'Reliability isn\'t an afterthought — it\'s embedded in our DNA. We ship products that stand the test of time and scale with your ambitions.',
  },
]

const stats = [
  { number: '10+', label: 'Products Built' },
  { number: '50K+', label: 'Users Served' },
  { number: '99.9%', label: 'Uptime' },
]

export default function Home() {
  return (
    <PageTransition>
      {/* ═══ HERO ═══ */}
      <section className={styles.hero}>
        <div className={styles['hero-bg']}>
          <div className={styles['hero-gradient']} />
          <div className={`${styles['hero-orb']} ${styles['hero-orb-1']}`} />
          <div className={`${styles['hero-orb']} ${styles['hero-orb-2']}`} />
          <div className={`${styles['hero-orb']} ${styles['hero-orb-3']}`} />
        </div>

        <div className={`container ${styles['hero-content']}`}>
          <motion.div
            className={styles['hero-text']}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles['hero-badge']}>
              <span className={styles['hero-badge-dot']} />
              {company.type} • {company.location.city}, {company.location.country}
            </div>

            <h1 className={styles['hero-title']}>
              {company.slogan.split('. ')[0]}.{' '}
              <span className={styles['hero-title-accent']}>{company.slogan.split('. ')[1]}</span>
            </h1>

            <p className={styles['hero-description']}>
              {company.description}
            </p>

            <div className={styles['hero-actions']}>
              <Link to="/products" className="btn btn-primary btn-lg">
                Explore Products <RiArrowRightLine />
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Our Story
              </Link>
            </div>

            <div className={styles['hero-stats']}>
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                >
                  <div className={styles['hero-stat-number']}>{s.number}</div>
                  <div className={styles['hero-stat-label']}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles['hero-visual']}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className={styles['hero-plant-card']}>
              <div className={`${styles['hero-plant-decoration']} ${styles['hero-plant-decoration-1']}`} />
              <div className={`${styles['hero-plant-decoration']} ${styles['hero-plant-decoration-2']}`} />
              <div className={styles['hero-plant-inner']}>
                <div className={styles['hero-plant-emoji']}>🌿</div>
                <div className={styles['hero-plant-name']}>{company.brand.plantName}</div>
                <div className={styles['hero-plant-species']}>{company.brand.plantSpecies}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className={`section ${styles.features}`}>
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="section-label">
              <RiSparklingLine /> Why Trevixia
            </span>
            <h2 className="section-title">Built Different, By Design</h2>
            <p className="section-subtitle mx-auto">
              We don't just ship code — we cultivate products that grow with intention,
              adapting to cycles just like nature does.
            </p>
          </AnimatedSection>

          <div className={styles['features-grid']}>
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className={`glass-card ${styles['feature-card']}`}>
                  <div className={`${styles['feature-icon']} ${styles[f.iconClass]}`}>
                    {f.icon}
                  </div>
                  <h3 className={styles['feature-title']}>{f.title}</h3>
                  <p className={styles['feature-text']}>{f.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MISSION ═══ */}
      <section className={`section ${styles.mission}`}>
        <div className="container">
          <div className={styles['mission-grid']}>
            <AnimatedSection>
              <div className={styles['mission-visual']}>
                <span className={styles['mission-visual-text']}>🌱</span>
                <p className={styles['mission-visual-quote']}>
                  "Like the Trevesia palmata, we believe in quiet strength —
                  growing steadily, blooming beautifully, and leaving a lasting impression."
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="section-label">
                <RiSeedlingLine /> Our Mission
              </span>
              <h2 className="section-title">Grow. Innovate. Impact.</h2>
              <div className={styles['mission-text']}>
                <p>
                  {company.mission}
                </p>
                <p>
                  From our roots in {company.location.city}, we're building a global product studio
                  where every line of code and every pixel serves a purpose.
                  Our name comes from the {company.brand.plantSpecies} — the {company.brand.plantName.toLowerCase()} —
                  a symbol of resilience, beauty, and quiet strength.
                </p>
              </div>
              <Link to="/about" className="btn btn-primary">
                Learn More <RiArrowRightLine />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles['cta-content']}>
              <h2>Ready to Build Something Beautiful?</h2>
              <p>
                Whether you have an idea, a challenge, or a vision — we'd love to
                help you bring it to life. Let's create something remarkable together.
              </p>
              <div className={styles['cta-actions']}>
                <Link to="/contact" className={styles['btn-white']}>
                  Start a Conversation
                </Link>
                <Link to="/products" className={styles['btn-white-outline']}>
                  View Products
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}

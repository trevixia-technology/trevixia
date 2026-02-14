import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  RiCodeSSlashLine, RiLightbulbLine, RiShieldCheckLine,
  RiArrowRightLine, RiCheckLine
} from 'react-icons/ri'
import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import company from '../../data/company.json'
import styles from './Home.module.css'

const capabilities = [
  {
    icon: <RiCodeSSlashLine />,
    title: 'Product Engineering',
    text: 'Full-stack development of scalable web and mobile applications using modern frameworks and cloud-native architecture.',
  },
  {
    icon: <RiLightbulbLine />,
    title: 'Product Design',
    text: 'User-centered design systems, prototyping, and interface development that aligns with business objectives.',
  },
  {
    icon: <RiShieldCheckLine />,
    title: 'Infrastructure & DevOps',
    text: 'Automated CI/CD pipelines, cloud infrastructure management, and monitoring to ensure reliability at scale.',
  },
]

const metrics = [
  { value: '99.9%', label: 'System Uptime' },
  { value: '10+', label: 'Products Shipped' },
  { value: '50K+', label: 'Users Served' },
]

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles['hero-bg']} />
        <div className={`container ${styles['hero-inner']}`}>
          <motion.div
            className={styles['hero-content']}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles['hero-label']}>
              <span className={styles['hero-label-dot']} />
              {company.type} — {company.location.city}, {company.location.country}
            </div>

            <h1 className={styles['hero-title']}>
              {company.slogan.split('. ')[0]}.<br />
              <span className={styles['hero-accent']}>{company.slogan.split('. ')[1]}</span>
            </h1>

            <p className={styles['hero-desc']}>
              {company.description}
            </p>

            <div className={styles['hero-actions']}>
              <Link to="/products" className="btn btn-primary btn-lg">
                View Products <RiArrowRightLine />
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                About Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={styles['hero-metrics']}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {metrics.map((m, i) => (
              <div key={i} className={styles.metric}>
                <div className={styles['metric-value']}>{m.value}</div>
                <div className={styles['metric-label']}>{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className={`section ${styles.capabilities}`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Core Capabilities</h2>
            <p className="section-subtitle">
              End-to-end software product development, from concept and
              architecture to production deployment and ongoing operations.
            </p>
          </AnimatedSection>

          <div className={styles['cap-grid']}>
            {capabilities.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`card ${styles['cap-card']}`}>
                  <div className={styles['cap-icon']}>{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trevixia */}
      <section className={`section ${styles.why}`}>
        <div className="container">
          <div className={styles['why-grid']}>
            <AnimatedSection>
              <div className="section-label">Why Trevixia</div>
              <h2 className="section-title">Engineered for Impact</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                {company.mission}
              </p>
              <ul className={styles['why-list']}>
                <li><RiCheckLine className={styles['why-check']} /> Modern tech stack with proven frameworks</li>
                <li><RiCheckLine className={styles['why-check']} /> Scalable architecture from day one</li>
                <li><RiCheckLine className={styles['why-check']} /> Automated testing and deployment pipelines</li>
                <li><RiCheckLine className={styles['why-check']} /> Transparent communication and delivery</li>
              </ul>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Learn More <RiArrowRightLine />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className={styles['why-visual']}>
                <div className={styles['why-visual-inner']}>
                  <div className={styles['why-code-block']}>
                    <div className={styles['why-code-dots']}>
                      <span /><span /><span />
                    </div>
                    <pre className={styles['why-code']}>
{`// trevixia.config
{
  "quality": "production",
  "uptime": "99.9%",
  "scale": "infinite",
  "location": "${company.location.city}"
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles['cta-inner']}>
              <h2>Build Your Next Product With Us</h2>
              <p>
                We partner with startups and enterprises to ship software
                products that users depend on.
              </p>
              <div className={styles['cta-actions']}>
                <Link to="/contact" className={styles['cta-btn-primary']}>
                  Contact Us
                </Link>
                <Link to="/products" className={styles['cta-btn-outline']}>
                  Explore Products
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}

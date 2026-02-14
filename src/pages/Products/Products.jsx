import { RiArrowRightLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import company from '../../data/company.json'
import styles from './Products.module.css'

const products = company.products.map((p) => ({
  ...p,
  tags: getProductTags(p.name),
}))

function getProductTags(name) {
  switch (name) {
    case 'FlowBoard': return ['React', 'Node.js', 'MongoDB']
    case 'VaultKey': return ['TypeScript', 'PostgreSQL', 'Docker']
    case 'PixelCraft': return ['React', 'Figma API', 'AWS']
    case 'DevNest': return ['Angular', 'Node.js', 'Docker']
    default: return []
  }
}

const process = [
  { step: '01', title: 'Discovery', text: 'Requirements analysis, user research, and technical feasibility assessment.' },
  { step: '02', title: 'Architecture', text: 'System design, data modeling, and infrastructure planning for scale.' },
  { step: '03', title: 'Development', text: 'Agile sprints with continuous integration, code review, and automated testing.' },
  { step: '04', title: 'Deployment', text: 'Production release, performance monitoring, and iterative improvements.' },
]

export default function Products() {
  return (
    <PageTransition>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label">Products</div>
            <h1 className={styles['header-title']}>
              Software That Solves<br />
              <span className={styles['header-accent']}>Real Problems</span>
            </h1>
            <p className={styles['header-desc']}>
              Our product suite addresses core operational challenges — from project
              management and security to design tooling and developer workflows.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Grid */}
      <section className={`section ${styles.products}`}>
        <div className="container">
          <div className={styles['product-grid']}>
            {products.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`card ${styles['product-card']}`}>
                  <div className={styles['product-top']}>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                  </div>
                  <div className={styles['product-tags']}>
                    {p.tags.map((t, j) => (
                      <span key={j} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`section ${styles.process}`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label">Process</div>
            <h2 className="section-title">How We Build</h2>
            <p className="section-subtitle">
              A structured, repeatable process that delivers predictable outcomes.
            </p>
          </AnimatedSection>

          <div className={styles['process-grid']}>
            {process.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={styles['process-item']}>
                  <div className={styles['process-step']}>{p.step}</div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={`section ${styles.stack}`}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label">Technology</div>
            <h2 className="section-title">Our Stack</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className={styles['stack-grid']}>
              {company.techStack.map((tech, i) => (
                <div key={i} className={styles['stack-item']}>
                  {tech}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles['cta-inner']}>
              <h2>Have a product idea?</h2>
              <p>We help companies turn requirements into production-ready software.</p>
              <Link to="/contact" className={styles['cta-btn']}>
                Get in Touch <RiArrowRightLine />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}

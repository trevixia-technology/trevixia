import { RiAppsLine, RiCodeSSlashLine, RiDashboardLine, RiShieldKeyholeLine, RiPaletteLine, RiTerminalBoxLine, RiSearchLine, RiBrushLine } from 'react-icons/ri'
import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import styles from './Products.module.css'

const products = [
  {
    icon: <RiDashboardLine />,
    iconClass: 'product-icon-1',
    tag: 'SaaS',
    name: 'FlowBoard',
    description: 'A modern project management tool designed for fast-moving teams. Kanban boards, real-time collaboration, and smart workflows — all in one beautiful interface.',
    features: ['Real-time Sync', 'Kanban & List Views', 'Team Analytics', 'API Integrations'],
  },
  {
    icon: <RiShieldKeyholeLine />,
    iconClass: 'product-icon-2',
    tag: 'Security',
    name: 'VaultKey',
    description: 'Enterprise-grade password and secrets management built for teams who take security seriously. Zero-knowledge encryption, beautiful UI, and seamless sharing.',
    features: ['Zero-Knowledge', 'Team Vaults', 'Browser Extension', '2FA Built-in'],
  },
  {
    icon: <RiPaletteLine />,
    iconClass: 'product-icon-3',
    tag: 'Design Tool',
    name: 'PixelCraft',
    description: 'A design-to-code platform that bridges the gap between designers and developers. Export production-ready code from your designs in seconds.',
    features: ['Design Tokens', 'Code Export', 'Component Library', 'Figma Plugin'],
  },
  {
    icon: <RiTerminalBoxLine />,
    iconClass: 'product-icon-4',
    tag: 'Developer Tool',
    name: 'DevNest',
    description: 'The all-in-one developer environment that brings your terminal, editor, and deployment pipeline together. Built for speed and simplicity.',
    features: ['Cloud IDE', 'Git Integration', 'One-Click Deploy', 'Team Workspaces'],
  },
]

const approach = [
  { title: 'Research', text: 'We deeply understand the problem space before writing a single line of code.' },
  { title: 'Design', text: 'Beautiful, intuitive interfaces designed around user needs and accessibility.' },
  { title: 'Build', text: 'Clean, scalable architecture with modern technologies and best practices.' },
  { title: 'Ship', text: 'Continuous delivery with rigorous testing and real user feedback loops.' },
]

const techStack = ['React', 'Angular', 'JavaScript', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Figma']

export default function Products() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className={styles['products-hero']}>
        <div className={styles['products-hero-bg']} />
        <div className="container">
          <AnimatedSection className={styles['products-hero-content']}>
            <span className="section-label">
              <RiAppsLine /> Our Products
            </span>
            <h1>Products That Grow With You</h1>
            <p>
              Every product we build is designed with intention — solving real problems
              with elegant technology, beautiful design, and relentless focus on the user.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <div className={styles['products-grid']}>
            {products.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`glass-card ${styles['product-card']}`}>
                  <div className={styles['product-card-header']}>
                    <div className={`${styles['product-icon']} ${styles[p.iconClass]}`}>
                      {p.icon}
                    </div>
                    <div className={styles['product-info']}>
                      <span className={styles['product-tag']}>{p.tag}</span>
                      <h3>{p.name}</h3>
                    </div>
                  </div>
                  <p className={styles['product-description']}>{p.description}</p>
                  <div className={styles['product-features']}>
                    {p.features.map((f, j) => (
                      <span key={j} className={styles['product-feature-chip']}>{f}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className={`section ${styles.approach}`}>
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="section-label">
              <RiSearchLine /> Our Process
            </span>
            <h2 className="section-title">How We Build</h2>
            <p className="section-subtitle mx-auto">
              A thoughtful, iterative process that prioritizes quality at every stage.
            </p>
          </AnimatedSection>

          <div className={styles['approach-grid']}>
            {approach.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={styles['approach-step']}>
                  <h4>{a.title}</h4>
                  <p>{a.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container">
          <AnimatedSection className="text-center">
            <span className="section-label">
              <RiCodeSSlashLine /> Tech Stack
            </span>
            <h2 className="section-title">Built With Modern Tools</h2>
            <p className="section-subtitle mx-auto">
              We use the best tools available to build products that are fast, reliable, and scalable.
            </p>

            <div className={styles['tech-stack']}>
              {techStack.map((t, i) => (
                <span key={i} className={styles['tech-badge']}>
                  <RiBrushLine />
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}

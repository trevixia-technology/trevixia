import { motion } from 'framer-motion'
import { RiBox3Line, RiToolsLine, RiSettings4Line } from 'react-icons/ri'
import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import SEO from '../../components/SEO/SEO'
import styles from './Labs.module.css'

const labAreas = [
  {
    icon: <RiBox3Line />,
    title: 'Prototyping',
    text: 'Fast, practical 3D printed prototypes for design validation and testing.',
  },
  {
    icon: <RiToolsLine />,
    title: 'Product Development',
    text: 'Structured development support from concept models to functional parts.',
  },
  {
    icon: <RiSettings4Line />,
    title: 'Custom Builds',
    text: 'Purpose-built physical components and assemblies for specific workflows.',
  },
]

export default function Labs() {
  return (
    <PageTransition>
      <SEO
        title="Trevixia 3D Labs"
        description="Physical prototyping and 3D printed solutions by Trevixia 3D Labs."
        path="/labs"
        keywords="Trevixia 3D Labs, 3D prototyping, product development, custom hardware builds"
      />

      <section className={styles.hero}>
        <motion.div
          className={styles.wireframe}
          animate={{ rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        />
        <div className={`container ${styles.heroInner}`}>
          <AnimatedSection>
            <div className="section-label">Physical Engineering</div>
            <h1>Trevixia 3D Labs</h1>
            <p>
              We design and produce physical prototypes and functional 3D printed solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className={`section ${styles.main}`}>
        <div className="container">
          <div className={styles.grid}>
            {labAreas.map((item, index) => (
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

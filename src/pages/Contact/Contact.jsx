import { RiMailLine, RiMapPinLine, RiGlobalLine } from 'react-icons/ri'
import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import SEO from '../../components/SEO/SEO'
import company from '../../data/company.json'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <PageTransition>
      <SEO
        title="Contact Trevixia"
        description="Contact Trevixia for product engineering, software development, and collaboration inquiries."
        path="/contact"
        keywords="contact trevixia, software consultation, product engineering inquiry"
      />

      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label">Contact</div>
            <h1 className={styles['header-title']}>
              Get in Touch
            </h1>
            <p className={styles['header-desc']}>
              Whether you have a project in mind or want to explore a
              partnership, reach us directly through email or website.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main */}
      <section className={`section ${styles.main}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.info}>
              <div className={`card ${styles['info-card']}`}>
                <div className={styles['info-icon']}>
                  <RiMailLine />
                </div>
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${company.contact.email}`} className={styles['info-link']}>
                    {company.contact.email}
                  </a>
                </div>
              </div>

              <div className={`card ${styles['info-card']}`}>
                <div className={styles['info-icon']}>
                  <RiGlobalLine />
                </div>
                <div>
                  <h3>Website</h3>
                  <a
                    href={company.contact.website}
                    className={styles['info-link']}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {company.contact.website}
                  </a>
                </div>
              </div>

              <div className={`card ${styles['info-card']}`}>
                <div className={styles['info-icon']}>
                  <RiMapPinLine />
                </div>
                <div>
                  <h3>Office</h3>
                  <p className={styles['info-text']}>
                    {company.location.city}, {company.location.state}<br />
                    {company.location.country}
                  </p>
                </div>
              </div>

              <div className={`card ${styles['notice-card']}`}>
                <h3>Response Time</h3>
                <p>We usually respond within 1 to 2 business days.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}

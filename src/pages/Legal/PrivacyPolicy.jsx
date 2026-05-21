import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import company from '../../data/company.json'
import styles from './Legal.module.css'

const lastUpdated = 'May 21, 2026'

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <section className={styles.page}>
        <div className="container">
          <AnimatedSection>
            <header className={styles.header}>
              <h1 className={styles.title}>Privacy Policy</h1>
              <p className={styles.subtitle}>
                This Privacy Policy explains how {company.legalName} collects, uses, and protects
                personal information when you use our website and contact us.
              </p>
              <span className={styles.lastUpdated}>Last updated: {lastUpdated}</span>
            </header>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <article className={styles.content}>
              <section className={styles.section}>
                <h2>1. Information We Collect</h2>
                <p>We may collect the following categories of information:</p>
                <ul>
                  <li>Contact details you share with us, such as name, email address, and business details.</li>
                  <li>Communication data when you email us or submit inquiries.</li>
                  <li>Technical data like browser type, pages visited, and device metadata through standard logs.</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>2. How We Use Information</h2>
                <ul>
                  <li>To respond to inquiries and provide support.</li>
                  <li>To improve website performance, usability, and security.</li>
                  <li>To communicate service updates or relevant product information.</li>
                  <li>To comply with legal obligations and protect against abuse.</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>3. Data Sharing</h2>
                <p>
                  We do not sell personal information. We may share data with trusted infrastructure,
                  analytics, communication, or security providers solely to operate our services.
                </p>
              </section>

              <section className={styles.section}>
                <h2>4. Data Retention</h2>
                <p>
                  We retain personal data only as long as necessary for legitimate business or legal
                  purposes, after which it is deleted or anonymized where feasible.
                </p>
              </section>

              <section className={styles.section}>
                <h2>5. Your Rights</h2>
                <p>
                  Subject to applicable law, you may request access, correction, deletion, or restriction
                  of your personal data.
                </p>
              </section>

              <section className={styles.section}>
                <h2>6. Security</h2>
                <p>
                  We use reasonable technical and organizational measures to protect data from unauthorized
                  access, disclosure, or misuse.
                </p>
              </section>

              <section className={styles.section}>
                <h2>7. Contact</h2>
                <p>
                  For privacy requests, email us at <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>.
                </p>
              </section>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}

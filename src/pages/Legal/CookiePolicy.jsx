import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import SEO from '../../components/SEO/SEO'
import company from '../../data/company.json'
import styles from './Legal.module.css'

const lastUpdated = 'May 21, 2026'

export default function CookiePolicy() {
  return (
    <PageTransition>
      <SEO
        title="Cookie Policy"
        description="Understand how Trevixia uses cookies and similar technologies to improve functionality and performance."
        path="/cookie-policy"
        keywords="cookie policy, trevixia cookies, website cookies"
        type="article"
      />

      <section className={styles.page}>
        <div className="container">
          <AnimatedSection>
            <header className={styles.header}>
              <h1 className={styles.title}>Cookie Policy</h1>
              <p className={styles.subtitle}>
                This Cookie Policy explains how {company.legalName} uses cookies and similar technologies
                on this website.
              </p>
              <span className={styles.lastUpdated}>Last updated: {lastUpdated}</span>
            </header>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <article className={styles.content}>
              <section className={styles.section}>
                <h2>1. What Are Cookies</h2>
                <p>
                  Cookies are small text files stored on your device to remember preferences and improve
                  website functionality.
                </p>
              </section>

              <section className={styles.section}>
                <h2>2. Types of Cookies We Use</h2>
                <ul>
                  <li>Essential cookies required for core site functionality.</li>
                  <li>Performance cookies used to understand usage and improve experience.</li>
                  <li>Security cookies that help detect abuse and protect systems.</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>3. Managing Cookies</h2>
                <p>
                  You can control cookies through browser settings. Disabling certain cookies may affect
                  website functionality.
                </p>
              </section>

              <section className={styles.section}>
                <h2>4. Third-Party Services</h2>
                <p>
                  If we use third-party tools (such as analytics), those providers may set cookies
                  according to their own policies.
                </p>
              </section>

              <section className={styles.section}>
                <h2>5. Updates</h2>
                <p>
                  We may update this Cookie Policy to reflect legal or technical changes. Please review
                  this page periodically.
                </p>
              </section>

              <section className={styles.section}>
                <h2>6. Contact</h2>
                <p>
                  Questions about cookies can be sent to <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>.
                </p>
              </section>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}

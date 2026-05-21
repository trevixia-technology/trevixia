import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import SEO from '../../components/SEO/SEO'
import company from '../../data/company.json'
import styles from './Legal.module.css'

const lastUpdated = 'May 21, 2026'

export default function TermsOfService() {
  return (
    <PageTransition>
      <SEO
        title="Terms of Service"
        description="Review Trevixia's Terms of Service governing access and use of our website and content."
        path="/terms"
        keywords="terms of service, trevixia terms, website terms"
        type="article"
      />

      <section className={styles.page}>
        <div className="container">
          <AnimatedSection>
            <header className={styles.header}>
              <h1 className={styles.title}>Terms of Service</h1>
              <p className={styles.subtitle}>
                These Terms govern your access to and use of the {company.name} website.
              </p>
              <span className={styles.lastUpdated}>Last updated: {lastUpdated}</span>
            </header>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <article className={styles.content}>
              <section className={styles.section}>
                <h2>1. Acceptance</h2>
                <p>
                  By accessing or using this website, you agree to these Terms. If you do not agree,
                  please discontinue use of the site.
                </p>
              </section>

              <section className={styles.section}>
                <h2>2. Use of Website</h2>
                <ul>
                  <li>You agree to use this website only for lawful purposes.</li>
                  <li>You must not attempt to interfere with the website or related systems.</li>
                  <li>You must not use our content in a misleading or unauthorized manner.</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>3. Intellectual Property</h2>
                <p>
                  All content on this site, including text, graphics, branding, and code, is owned by
                  or licensed to {company.legalName}, unless otherwise noted.
                </p>
              </section>

              <section className={styles.section}>
                <h2>4. Third-Party Links</h2>
                <p>
                  Our website may include links to third-party services. We are not responsible for the
                  content, policies, or practices of those external websites.
                </p>
              </section>

              <section className={styles.section}>
                <h2>5. Disclaimer</h2>
                <p>
                  This website is provided on an "as is" and "as available" basis without warranties of
                  any kind to the extent permitted by law.
                </p>
              </section>

              <section className={styles.section}>
                <h2>6. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, {company.legalName} is not liable for indirect,
                  incidental, special, or consequential damages arising from your use of this website.
                </p>
              </section>

              <section className={styles.section}>
                <h2>7. Changes to Terms</h2>
                <p>
                  We may update these Terms from time to time. Continued use of the website after updates
                  means you accept the revised Terms.
                </p>
              </section>

              <section className={styles.section}>
                <h2>8. Contact</h2>
                <p>
                  For legal inquiries, email <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>.
                </p>
              </section>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}

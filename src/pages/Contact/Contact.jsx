import { useState } from 'react'
import { RiMailLine, RiMapPinLine, RiSendPlaneLine } from 'react-icons/ri'
import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import company from '../../data/company.json'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <PageTransition>
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
              partnership, we are happy to discuss how we can work together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main */}
      <section className={`section ${styles.main}`}>
        <div className="container">
          <div className={styles.grid}>
            {/* Info */}
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
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.15}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles['form-row']}>
                  <div className={styles.field}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Project inquiry"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={styles['submit-btn']}>
                  <RiSendPlaneLine /> Send Message
                </button>

                {submitted && (
                  <p className={styles.success}>
                    Message received. We will get back to you shortly.
                  </p>
                )}
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

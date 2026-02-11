import { useState } from 'react'
import { RiMailLine, RiMapPinLine, RiSendPlaneLine, RiMapPin2Line } from 'react-icons/ri'
import PageTransition from '../../components/PageTransition/PageTransition'
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection'
import company from '../../data/company.json'
import styles from './Contact.module.css'

const contactInfo = [
  {
    icon: <RiMailLine />,
    title: 'Email',
    value: <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>,
  },
  {
    icon: <RiMapPinLine />,
    title: 'Office',
    value: company.location.full,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section className={styles['contact-hero']}>
        <div className={styles['contact-hero-bg']} />
        <div className="container">
          <AnimatedSection className={styles['contact-hero-content']}>
            <span className="section-label">
              <RiMailLine /> Contact
            </span>
            <h1>Let's Start a Conversation</h1>
            <p>
              Have an idea, a question, or just want to say hello? We'd love to hear from you.
              Reach out and let's explore how we can work together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section">
        <div className="container">
          <div className={styles['contact-layout']}>
            <AnimatedSection>
              <div className={`glass-card ${styles['contact-form-card']}`}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌿</div>
                    <h3 style={{ marginBottom: '0.5rem' }}>Message Sent!</h3>
                    <p>Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className={styles['form-group']}>
                      <label className={styles['form-label']}>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className={styles['form-input']}
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles['form-group']}>
                      <label className={styles['form-label']}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className={styles['form-input']}
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles['form-group']}>
                      <label className={styles['form-label']}>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className={styles['form-input']}
                        placeholder="What's this about?"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles['form-group']}>
                      <label className={styles['form-label']}>Message</label>
                      <textarea
                        name="message"
                        className={styles['form-textarea']}
                        placeholder="Tell us more about your project or idea..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button type="submit" className={`btn btn-primary btn-lg ${styles['form-submit']}`}>
                      <RiSendPlaneLine /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className={styles['contact-info']}>
                {contactInfo.map((c, i) => (
                  <div key={i} className={`glass-card ${styles['info-card']}`}>
                    <div className={styles['info-icon']}>{c.icon}</div>
                    <div>
                      <div className={styles['info-title']}>{c.title}</div>
                      <div className={styles['info-value']}>{c.value}</div>
                    </div>
                  </div>
                ))}

                <div className={styles['map-placeholder']}>
                  <RiMapPin2Line className={styles['map-placeholder-icon']} />
                  Chennai, Tamil Nadu, India
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

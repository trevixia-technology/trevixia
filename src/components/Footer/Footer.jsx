import { Link } from 'react-router-dom'
import { RiLeafLine, RiTwitterXFill, RiLinkedinFill, RiInstagramLine, RiGithubFill } from 'react-icons/ri'
import company from '../../data/company.json'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-decoration']} />
      <div className="container">
        <div className={styles['footer-grid']}>
          <div className={styles['footer-brand']}>
            <h3>
              <span className={styles['footer-brand-icon']}>
                <RiLeafLine />
              </span>
              Trevixia
            </h3>
            <p>
              {company.slogan}. {company.shortDescription}{' '}
              Based in {company.location.full}.
            </p>
          </div>

          <div className={styles['footer-col']}>
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className={styles['footer-col']}>
            <h4>Company</h4>
            <Link to="/about">Our Story</Link>
            <Link to="/about">Team</Link>
            <Link to="/about">Careers</Link>
            <Link to="/contact">Partner With Us</Link>
          </div>

          <div className={styles['footer-col']}>
            <h4>Connect</h4>
            <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
            <p style={{ color: 'rgba(232,245,232,0.7)', fontSize: '0.95rem', maxWidth: '100%' }}>
              {company.location.full}
            </p>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          <p>&copy; {new Date().getFullYear()} Trevixia. All rights reserved.</p>
          <div className={styles['footer-socials']}>
            {[
              { icon: <RiTwitterXFill />, href: company.socials.twitter },
              { icon: <RiLinkedinFill />, href: company.socials.linkedin },
              { icon: <RiInstagramLine />, href: company.socials.instagram },
              { icon: <RiGithubFill />, href: company.socials.github },
            ].map((s, i) => (
              <a key={i} href={s.href} className={styles['footer-social-link']} target="_blank" rel="noopener noreferrer">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

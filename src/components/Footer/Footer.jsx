import { Link } from 'react-router-dom'
import {
  RiGithubLine, RiLinkedinBoxLine, RiTwitterXLine
} from 'react-icons/ri'
import company from '../../data/company.json'
import styles from './Footer.module.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Labs', to: '/labs' },
  { label: 'Tech', to: '/tech' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Cookie Policy', to: '/cookie-policy' },
]

const logoSrc = `${import.meta.env.BASE_URL}logo/trevixia-tbg-2.png`

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img src={logoSrc} alt="Trevixia" className={styles['logo-image']} />
            </Link>
            <p className={styles.tagline}>{company.slogan}</p>
            <p className={styles.tagline}>A startup building practical systems across physical and digital engineering.</p>
          </div>

          <nav className={styles.nav}>
            {links.map((l) => (
              <Link key={l.to} to={l.to} className={styles['nav-link']}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className={styles.socials} style={{ display: 'none' }}>
            <a href="#" aria-label="GitHub"><RiGithubLine /></a>
            <a href="#" aria-label="LinkedIn"><RiLinkedinBoxLine /></a>
            <a href="#" aria-label="Twitter"><RiTwitterXLine /></a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles['bottom-left']}>
            <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
            <span className={styles.location}>
              {company.location.city}, {company.location.country}
            </span>
          </div>

          <nav className={styles.legal} aria-label="Legal">
            {legalLinks.map((l) => (
              <Link key={l.to} to={l.to} className={styles['legal-link']}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

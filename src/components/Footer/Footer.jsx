import { Link } from 'react-router-dom'
import {
  RiGithubLine, RiLinkedinBoxLine, RiTwitterXLine
} from 'react-icons/ri'
import company from '../../data/company.json'
import styles from './Footer.module.css'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>{company.name}</Link>
            <p className={styles.tagline}>{company.slogan}</p>
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
          <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span className={styles.location}>
            {company.location.city}, {company.location.country}
          </span>
        </div>
      </div>
    </footer>
  )
}

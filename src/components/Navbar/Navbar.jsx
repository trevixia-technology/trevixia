import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Labs', path: '/labs' },
  { label: 'Tech', path: '/tech' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const logoSrc = `${import.meta.env.BASE_URL}logo/trevixia-tbg-2.png`

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles['navbar-inner']}>
        <Link to="/" className={styles['nav-logo']}>
          <img
            src={logoSrc}
            alt="Trevixia"
            className={styles['nav-logo-image']}
          />
        </Link>

        <button
          className={`${styles['nav-toggle']} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${styles['nav-links']} ${menuOpen ? styles.open : ''}`}>
          {navItems.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `${styles['nav-link']} ${isActive ? styles.active : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

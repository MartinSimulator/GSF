import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={`site-header${navOpen ? ' site-header--nav-open' : ''}`}>
      <div className="container">
        <Link to="/" className="site-header__brand" onClick={() => setNavOpen(false)}>
          <img src="/gsf-logo.png" alt="ASUC Grants & Scholarships Foundation" className="site-header__logo" />
        </Link>

        <nav className="site-nav" id="main-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
            }
            onClick={() => setNavOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/grants"
            className={({ isActive }) =>
              `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
            }
            onClick={() => setNavOpen(false)}
          >
            Grants
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
            }
            onClick={() => setNavOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/get-involved"
            className={({ isActive }) =>
              `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
            }
            onClick={() => setNavOpen(false)}
          >
            Get Involved
          </NavLink>
          <NavLink
            to="/transparency"
            className={({ isActive }) =>
              `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
            }
            onClick={() => setNavOpen(false)}
          >
            Transparency
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
            }
            onClick={() => setNavOpen(false)}
          >
            Contact
          </NavLink>
        </nav>

        <button
          className="site-header__menu-btn"
          aria-label="Toggle navigation"
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

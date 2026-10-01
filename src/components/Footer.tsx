import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__col">
          <h4 className="site-footer__heading">GSF</h4>
          <p className="site-footer__text">
            The ASUC Grants &amp; Scholarships Foundation is dedicated to
            expanding access to financial support for UC Berkeley students.
          </p>
        </div>

        <div className="site-footer__col">
          <h4 className="site-footer__heading">Quick Links</h4>
          <Link to="/grants" className="site-footer__link">Grants</Link>
          <Link to="/about" className="site-footer__link">About Us</Link>
          <Link to="/get-involved" className="site-footer__link">Get Involved</Link>
          <Link to="/transparency" className="site-footer__link">Transparency</Link>
        </div>

        <div className="site-footer__col">
          <h4 className="site-footer__heading">Contact</h4>
          <p className="site-footer__text">
            400 Eshleman Hall<br />
            University of California, Berkeley<br />
            Berkeley, CA 94720
          </p>
          <a href="mailto:grants@asuc.org" className="site-footer__link" style={{ marginTop: '0.5rem' }}>
            grants@asuc.org
          </a>
        </div>

        <div className="site-footer__col">
          <h4 className="site-footer__heading">Part of the ASUC</h4>
          <img
            src="/asuc-seal.png"
            alt="ASUC Seal"
            style={{ height: '72px', width: 'auto', marginTop: '0.25rem', opacity: 0.85 }}
          />
        </div>
      </div>

      <div className="site-footer__bottom">
        &copy; {new Date().getFullYear()} ASUC Grants &amp; Scholarships Foundation. All rights reserved.
      </div>
    </footer>
  );
}

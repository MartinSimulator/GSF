import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <span className="hero__badge">ASUC · UC Berkeley</span>
            <h1 className="hero__title">
              Grants &amp; Scholarships Foundation
            </h1>
            <p className="hero__subtitle">
              Established to expand financial opportunity for every student at
              the University of California, Berkeley, the ASUC Grants &amp;
              Scholarships Foundation provides need-based grants, merit
              scholarships, and emergency funding to support the diverse
              aspirations of the Cal community.
            </p>
            <div className="hero__actions">
              <Link to="/grants" className="btn btn--primary">
                View Our Grants
              </Link>
              <Link to="/get-involved" className="btn btn--outline">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission snapshot */}
      <section className="section">
        <div className="container">
          <h2>Our Purpose</h2>
          <hr className="divider" style={{ maxWidth: 80, margin: '1rem 0 1.5rem' }} />
          <div className="info-row">
            <div className="info-row__content prose">
              <p>
                The Grants &amp; Scholarships Foundation (GSF) was created under
                the authority of the Associated Students of the University of
                California (ASUC) to serve as the principal body for
                administering student-funded grants and scholarships. Through
                transparent governance and rigorous stewardship of student fees,
                the Foundation works to ensure every Bear has the resources they
                need to thrive.
              </p>
              <p>
                Since its founding, the GSF has distributed funding across a wide
                range of programs—from academic research grants and community
                service awards to emergency financial assistance—reflecting the
                breadth of talent and need within the UC Berkeley student body.
              </p>
            </div>
            <aside className="info-row__aside">
              <h3>At a Glance</h3>
              <ul>
                <li>Administered by ASUC student leaders</li>
                <li>Open to all enrolled UC Berkeley students</li>
                <li>Multiple grant cycles per academic year</li>
                <li>Transparent financial reporting</li>
                <li>Committed to equitable access</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Contact snapshot */}
      <section className="section section--alt">
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h2>Get in Touch</h2>
          <hr className="divider" style={{ maxWidth: 80, margin: '1rem auto 1.5rem' }} />
          <p style={{ marginBottom: '0.5rem' }}>
            Have questions about our grants, eligibility, or application
            timelines? We're here to help.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Email:</strong>{' '}
            <a href="mailto:grants@asuc.org">grants@asuc.org</a>
          </p>
          <Link to="/contact" className="btn btn--primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

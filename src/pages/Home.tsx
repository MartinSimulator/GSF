import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Full-bleed hero with campus photograph */}
      <section className="hero-banner">
        <img
          src="/campus-hero.jpg"
          alt="UC Berkeley campus looking toward the Campanile"
          className="hero-banner__img"
        />
        <div className="hero-banner__overlay" />
        <div className="hero-banner__body">
          <div className="container">
            <span className="hero-banner__badge">ASUC · UC Berkeley</span>
            <h1 className="hero-banner__title">
              Grants &amp; Scholarships Foundation
            </h1>
            <p className="hero-banner__subtitle">
              Expanding financial opportunity for every student at the University
              of California, Berkeley through need-based grants, merit
              scholarships, and emergency funding.
            </p>
            <div className="hero-banner__actions">
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

      {/* Stats bar */}
      <section className="stat-bar">
        <div className="container">
          <div className="stat-bar__item">
            <span className="stat-bar__number">$315K+</span>
            <span className="stat-bar__label">Distributed Annually</span>
          </div>
          <div className="stat-bar__item">
            <span className="stat-bar__number">6</span>
            <span className="stat-bar__label">Grant Programs</span>
          </div>
          <div className="stat-bar__item">
            <span className="stat-bar__number">500+</span>
            <span className="stat-bar__label">Students Funded</span>
          </div>
          <div className="stat-bar__item">
            <span className="stat-bar__number">100%</span>
            <span className="stat-bar__label">Student Run</span>
          </div>
        </div>
      </section>

      {/* Purpose — image/text split */}
      <section className="split">
        <div className="split__image">
          <img
            src="/graduation-ceremony.jpg"
            alt="Berkeley students at graduation commencement"
          />
        </div>
        <div className="split__content">
          <h2>Our Purpose</h2>
          <p>
            The Grants &amp; Scholarships Foundation (GSF) was created under the
            authority of the ASUC to serve as the principal body for
            administering student-funded grants and scholarships. Through
            transparent governance and rigorous stewardship of student fees, the
            Foundation ensures every Bear has the resources they need to thrive.
          </p>
          <p>
            Since its founding, the GSF has distributed funding across
            need-based grants, merit scholarships, research funding, emergency
            assistance, and community service awards—reflecting the full
            spectrum of student achievement and need at Berkeley.
          </p>
          <Link to="/about" className="link-arrow">
            Learn more about our mission
          </Link>
        </div>
      </section>

      {/* Quick links section */}
      <section className="feature-list section--alt">
        <div className="container">
          <h2>Explore Our Programs</h2>
          <div className="feature-list__items">
            <Link to="/grants" className="feature-list__item">
              <span className="feature-list__label">Need-Based</span>
              <div className="feature-list__text">
                <h3>General Assistance Grant</h3>
                <p>
                  Financial support for tuition, books, and housing for students
                  with demonstrated need.
                </p>
              </div>
              <span className="feature-list__arrow">→</span>
            </Link>

            <Link to="/grants" className="feature-list__item">
              <span className="feature-list__label">Merit</span>
              <div className="feature-list__text">
                <h3>Academic Excellence Scholarship</h3>
                <p>
                  Recognizing outstanding academic achievement among UC Berkeley
                  students.
                </p>
              </div>
              <span className="feature-list__arrow">→</span>
            </Link>

            <Link to="/grants" className="feature-list__item">
              <span className="feature-list__label">Emergency</span>
              <div className="feature-list__text">
                <h3>Emergency Financial Aid</h3>
                <p>
                  Rapid-response funding for students facing unexpected
                  financial hardship.
                </p>
              </div>
              <span className="feature-list__arrow">→</span>
            </Link>

            <Link to="/grants" className="feature-list__item">
              <span className="feature-list__label">Research</span>
              <div className="feature-list__text">
                <h3>Undergraduate Research Grant</h3>
                <p>
                  Funding independent research projects across all disciplines.
                </p>
              </div>
              <span className="feature-list__arrow">→</span>
            </Link>
          </div>
          <div style={{ marginTop: 'var(--space-xl)' }}>
            <Link to="/grants" className="btn btn--outline-blue">
              View All Grants &amp; Scholarships
            </Link>
          </div>
        </div>
      </section>

      {/* Get involved — reverse split */}
      <section className="split split--reverse">
        <div className="split__image">
          <img
            src="/campus-event.png"
            alt="Students at a campus involvement fair"
          />
        </div>
        <div className="split__content">
          <h2>Join the Foundation</h2>
          <p>
            The GSF is run entirely by UC Berkeley students. Whether you want
            to serve on the board, review applications, coordinate outreach, or
            volunteer at events, there's a role for you.
          </p>
          <Link to="/get-involved" className="link-arrow">
            See open positions and apply
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Questions?</h2>
          <p>
            Have questions about our grants, eligibility, or application
            timelines? We're here to help.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:grants@asuc.org" className="btn btn--primary">
              Email grants@asuc.org
            </a>
            <Link to="/contact" className="btn btn--outline">
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

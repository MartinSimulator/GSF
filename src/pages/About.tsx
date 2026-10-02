import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* Page Header with background image */}
      <section className="page-header page-header--image">
        <img
          src="/graduation-ceremony.jpg"
          alt="Students celebrating at graduation"
          className="page-header__bg"
        />
        <div className="container">
          <h1 className="page-header__title">About the Foundation</h1>
          <p className="page-header__subtitle">
            Our history, mission, and the people behind the work.
          </p>
        </div>
      </section>

      {/* Mission — split with image */}
      <section className="split">
        <div className="split__image">
          <img
            src="/student-studying.jpg"
            alt="Student studying in the library"
          />
        </div>
        <div className="split__content">
          <h2>Our Mission</h2>
          <p>
            The ASUC Grants &amp; Scholarships Foundation exists to ensure that
            financial barriers never stand between a UC Berkeley student and
            their potential. We believe that access to funding is a fundamental
            pillar of educational equity, and we are committed to distributing
            resources fairly, transparently, and effectively.
          </p>
          <Link to="/grants" className="link-arrow">
            Explore our grant programs
          </Link>
        </div>
      </section>

      {/* History — editorial prose */}
      <section className="editorial section--alt">
        <div className="container">
          <h2>History</h2>
          <p>
            The Foundation was established by the Associated Students of the
            University of California to formalize and expand the ASUC's
            long-standing commitment to student financial support. What began as
            a small committee distributing a handful of awards has grown into a
            comprehensive grants program serving hundreds of students each year.
          </p>
          <p>
            Over the years, the Foundation has broadened its scope to include
            need-based grants, merit scholarships, research funding, emergency
            assistance, and community service awards—reflecting the full
            spectrum of student achievement and need at Berkeley.
          </p>

          <figure className="editorial-image">
            <img
              src="/asuc-image.webp"
              alt="The Associated Students of the University of California (ASUC) seal at Eshleman Hall"
            />
            <figcaption>
              The Associated Students of the University of California seal at Eshleman Hall
            </figcaption>
          </figure>

          <h2>Governance</h2>
          <p>
            The Foundation is governed by a board of student leaders appointed
            through the ASUC. Board members serve on a volunteer basis and are
            responsible for setting grant policy, reviewing applications, and
            overseeing the Foundation's finances. All governance proceedings are
            open to the public in accordance with ASUC bylaws.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="values-list">
        <div className="container">
          <h2>Our Values</h2>
          <dl>
            <dt>Equity</dt>
            <dd>
              We prioritize fair and inclusive access to every program we
              administer.
            </dd>

            <dt>Transparency</dt>
            <dd>
              Our finances, decisions, and processes are open to the student
              body.
            </dd>

            <dt>Stewardship</dt>
            <dd>
              We treat student fees as a public trust and manage them with the
              highest standard of care.
            </dd>

            <dt>Impact</dt>
            <dd>
              We measure our success by the tangible difference our funding
              makes in students' lives.
            </dd>

            <dt>Community</dt>
            <dd>
              We are Berkeley students serving Berkeley students.
            </dd>
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Want to learn more?</h2>
          <p>
            Read our financial disclosures and governance documents on the
            Transparency page, or reach out to our team directly.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/transparency" className="btn btn--primary">
              View Transparency Reports
            </Link>
            <Link to="/contact" className="btn btn--outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

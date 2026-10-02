import { Link } from 'react-router-dom';

export default function Grants() {
  return (
    <>
      {/* Page Header with background image */}
      <section className="page-header page-header--image">
        <img
          src="/student-studying.jpg"
          alt="Student studying in the library"
          className="page-header__bg"
        />
        <div className="container">
          <h1 className="page-header__title">Grants &amp; Scholarships</h1>
          <p className="page-header__subtitle">
            Explore the funding opportunities administered by the Foundation.
          </p>
        </div>
      </section>

      {/* Grants as a feature list — not cards */}
      <section className="feature-list section">
        <div className="container">
          <h2>Available Programs</h2>
          <div className="feature-list__items">
            <div className="feature-list__item">
              <span className="feature-list__label">Need-Based</span>
              <div className="feature-list__text">
                <h3>General Assistance Grant</h3>
                <p>
                  Open to all enrolled undergraduate and graduate students
                  demonstrating financial need. Awards offset tuition, books,
                  and housing expenses.
                </p>
              </div>
              <span className="feature-list__arrow" />
            </div>

            <div className="feature-list__item">
              <span className="feature-list__label">Merit</span>
              <div className="feature-list__text">
                <h3>Academic Excellence Scholarship</h3>
                <p>
                  Recognizes outstanding academic achievement. Evaluated on GPA,
                  course rigor, and a personal statement. Requires minimum 3.5
                  GPA.
                </p>
              </div>
              <span className="feature-list__arrow" />
            </div>

            <div className="feature-list__item">
              <span className="feature-list__label">Community</span>
              <div className="feature-list__text">
                <h3>Community Service Award</h3>
                <p>
                  Supports students with sustained commitment to community
                  service and civic engagement. Requires 50+ documented service
                  hours.
                </p>
              </div>
              <span className="feature-list__arrow" />
            </div>

            <div className="feature-list__item">
              <span className="feature-list__label">Emergency</span>
              <div className="feature-list__text">
                <h3>Emergency Financial Aid</h3>
                <p>
                  Rapid-response funding for students facing unexpected
                  hardship—medical emergencies, housing insecurity, food
                  insecurity, or other urgent needs.
                </p>
              </div>
              <span className="feature-list__arrow" />
            </div>

            <div className="feature-list__item">
              <span className="feature-list__label">Research</span>
              <div className="feature-list__text">
                <h3>Undergraduate Research Grant</h3>
                <p>
                  Funds independent research projects across all disciplines.
                  Covers materials, travel, and conference costs. Requires
                  faculty sponsorship.
                </p>
              </div>
              <span className="feature-list__arrow" />
            </div>

            <div className="feature-list__item">
              <span className="feature-list__label">Leadership</span>
              <div className="feature-list__text">
                <h3>Student Leadership Scholarship</h3>
                <p>
                  Recognizes exceptional leadership through student
                  organizations, campus governance, or community initiatives.
                </p>
              </div>
              <span className="feature-list__arrow" />
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply — split with image */}
      <section className="split split--reverse split--blue">
        <div className="split__image">
          <img
            src="/students-collaborating.jpg"
            alt="Students collaborating on campus"
          />
        </div>
        <div className="split__content">
          <h2>How to Apply</h2>
          <p>
            Applications for each grant cycle are announced at the beginning of
            every semester. All applications are submitted through the ASUC
            grants portal and reviewed by the Foundation's awards committee.
          </p>
          <p style={{ paddingLeft: '1.25rem', borderLeft: '3px solid var(--california-gold)' }}>
            <strong>1.</strong> Review the eligibility criteria for each grant.<br />
            <strong>2.</strong> Prepare supporting documents (transcripts, personal statement).<br />
            <strong>3.</strong> Submit your application before the published deadline.<br />
            <strong>4.</strong> Decisions are communicated via email within four weeks.
          </p>
          <Link to="/contact" className="btn btn--primary" style={{ marginTop: '0.5rem' }}>
            Questions? Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

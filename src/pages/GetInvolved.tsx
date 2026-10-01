import { Link } from 'react-router-dom';

export default function GetInvolved() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Get Involved</h1>
          <p className="page-header__subtitle">
            Join the Foundation as a board member, reviewer, or advocate.
          </p>
        </div>
      </section>

      {/* Ways to get involved */}
      <section className="section">
        <div className="container">
          <div className="info-row">
            <div className="info-row__content prose">
              <h2>Why Get Involved?</h2>
              <p>
                The Foundation is run entirely by UC Berkeley students. Joining
                our team is an opportunity to develop leadership skills, make a
                meaningful impact on your peers' lives, and gain firsthand
                experience in nonprofit governance and grant administration.
              </p>

              <h2>Open Roles</h2>

              <h3>Board Member</h3>
              <p>
                Board members set the Foundation's strategic direction, approve
                grant awards, and represent the Foundation within the ASUC.
                Positions are appointed each spring through the ASUC appointment
                process.
              </p>

              <h3>Application Reviewer</h3>
              <p>
                Reviewers evaluate grant and scholarship applications during
                each cycle. Training is provided. This role requires a
                commitment of approximately 5–8 hours per grant cycle.
              </p>

              <h3>Outreach Coordinator</h3>
              <p>
                Help us spread the word about available grants and ensure
                underrepresented communities are aware of and able to access
                Foundation funding. Coordinators organize info sessions and
                manage social media outreach.
              </p>

              <h3>General Volunteer</h3>
              <p>
                Volunteers assist with events, information sessions, and
                administrative tasks throughout the semester. No prior experience
                is required.
              </p>
            </div>

            <aside className="info-row__aside">
              <h3>Application Timeline</h3>
              <ul>
                <li>
                  <strong>Spring Recruitment:</strong> Applications open in
                  January and close in early February.
                </li>
                <li>
                  <strong>Fall Recruitment:</strong> Applications open in August
                  and close in early September.
                </li>
                <li>
                  <strong>Interviews:</strong> Conducted within two weeks of the
                  application deadline.
                </li>
                <li>
                  <strong>Decisions:</strong> Communicated via email.
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--alt">
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h2>Ready to Apply?</h2>
          <hr className="divider" style={{ maxWidth: 80, margin: '1rem auto 1.5rem' }} />
          <p style={{ marginBottom: '1.5rem' }}>
            Interested in joining the Foundation? Reach out to us for more
            information about current openings and the application process.
          </p>
          <Link to="/contact" className="btn btn--primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

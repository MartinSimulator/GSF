import { Link } from 'react-router-dom';

export default function GetInvolved() {
  return (
    <>
      {/* Page Header with background image */}
      <section className="page-header page-header--image">
        <img
          src="/campus-event.png"
          alt="Students at a campus involvement fair"
          className="page-header__bg"
        />
        <div className="container">
          <h1 className="page-header__title">Get Involved</h1>
          <p className="page-header__subtitle">
            Join the Foundation as a board member, reviewer, or advocate.
          </p>
        </div>
      </section>

      {/* Why — split with image */}
      <section className="split">
        <div className="split__image">
          <img
            src="/meeting-room.jpg"
            alt="Foundation board meeting in progress"
          />
        </div>
        <div className="split__content">
          <h2>Why Get Involved?</h2>
          <p>
            The Foundation is run entirely by UC Berkeley students. Joining our
            team is an opportunity to develop leadership skills, make a
            meaningful impact on your peers' lives, and gain firsthand
            experience in nonprofit governance and grant administration.
          </p>
          <p>
            Board members, reviewers, and outreach coordinators work together
            each semester to evaluate applications, allocate funding, and
            connect students with the support they need.
          </p>
        </div>
      </section>

      {/* Open roles — editorial */}
      <section className="editorial section--alt">
        <div className="container">
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
            Reviewers evaluate grant and scholarship applications during each
            cycle. Training is provided. This role requires a commitment of
            approximately 5–8 hours per grant cycle.
          </p>

          <h3>Outreach Coordinator</h3>
          <p>
            Help us spread the word about available grants and ensure
            underrepresented communities are aware of and able to access
            Foundation funding. Coordinators organize info sessions and manage
            social media outreach.
          </p>

          <h3>General Volunteer</h3>
          <p>
            Volunteers assist with events, information sessions, and
            administrative tasks throughout the semester. No prior experience is
            required.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <div className="container">
          <h2>Application Timeline</h2>
          <div className="timeline__items">
            <div className="timeline__item">
              <h3>Spring Recruitment</h3>
              <p>
                Applications open in January and close in early February.
              </p>
            </div>
            <div className="timeline__item">
              <h3>Fall Recruitment</h3>
              <p>
                Applications open in August and close in early September.
              </p>
            </div>
            <div className="timeline__item">
              <h3>Interviews</h3>
              <p>
                Conducted within two weeks of the application deadline.
              </p>
            </div>
            <div className="timeline__item">
              <h3>Decisions</h3>
              <p>
                Communicated via email shortly after interviews conclude.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Ready to Apply?</h2>
          <p>
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

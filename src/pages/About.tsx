export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">About Us</h1>
          <p className="page-header__subtitle">
            Learn more about the Foundation's history, mission, and the people
            behind it.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container prose" style={{ maxWidth: 800 }}>
          <h2>Our Mission</h2>
          <p>
            The ASUC Grants &amp; Scholarships Foundation exists to ensure that
            financial barriers never stand between a UC Berkeley student and
            their potential. We believe that access to funding is a fundamental
            pillar of educational equity, and we are committed to distributing
            resources fairly, transparently, and effectively.
          </p>

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

          <h2>Governance</h2>
          <p>
            The Foundation is governed by a board of student leaders appointed
            through the ASUC. Board members serve on a volunteer basis and are
            responsible for setting grant policy, reviewing applications, and
            overseeing the Foundation's finances. All governance proceedings are
            open to the public in accordance with ASUC bylaws.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Equity:</strong> We prioritize fair and inclusive access to
              every program we administer.
            </li>
            <li>
              <strong>Transparency:</strong> Our finances, decisions, and
              processes are open to the student body.
            </li>
            <li>
              <strong>Stewardship:</strong> We treat student fees as a public
              trust and manage them with the highest standard of care.
            </li>
            <li>
              <strong>Impact:</strong> We measure our success by the tangible
              difference our funding makes in students' lives.
            </li>
            <li>
              <strong>Community:</strong> We are Berkeley students serving
              Berkeley students.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

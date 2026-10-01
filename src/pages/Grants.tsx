export default function Grants() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Grants &amp; Scholarships</h1>
          <p className="page-header__subtitle">
            Explore the funding opportunities administered by the Foundation.
          </p>
        </div>
      </section>

      {/* Grants listing */}
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {/* Grant 1 */}
            <div className="card">
              <span className="card__label">Need-Based</span>
              <h3 className="card__title">General Assistance Grant</h3>
              <div className="card__body">
                <p>
                  Open to all currently enrolled UC Berkeley undergraduate and
                  graduate students demonstrating financial need. Awards are
                  intended to offset educational expenses such as tuition, books,
                  and housing.
                </p>
              </div>
              <div className="card__footer">
                <strong>Eligibility:</strong> All enrolled students with
                demonstrated financial need.
              </div>
            </div>

            {/* Grant 2 */}
            <div className="card">
              <span className="card__label">Merit</span>
              <h3 className="card__title">Academic Excellence Scholarship</h3>
              <div className="card__body">
                <p>
                  Recognizes outstanding academic achievement among UC Berkeley
                  students. Applicants are evaluated on GPA, course rigor, and a
                  personal statement describing their academic goals.
                </p>
              </div>
              <div className="card__footer">
                <strong>Eligibility:</strong> Undergraduate students with a
                minimum 3.5 GPA.
              </div>
            </div>

            {/* Grant 3 */}
            <div className="card">
              <span className="card__label">Community</span>
              <h3 className="card__title">Community Service Award</h3>
              <div className="card__body">
                <p>
                  Supports students who have demonstrated sustained commitment
                  to community service and civic engagement. Priority is given
                  to applicants whose service directly benefits the Berkeley
                  community.
                </p>
              </div>
              <div className="card__footer">
                <strong>Eligibility:</strong> Students with 50+ documented
                community service hours.
              </div>
            </div>

            {/* Grant 4 */}
            <div className="card">
              <span className="card__label">Emergency</span>
              <h3 className="card__title">Emergency Financial Aid</h3>
              <div className="card__body">
                <p>
                  Provides rapid-response funding for students facing unexpected
                  financial hardship—medical emergencies, housing insecurity,
                  food insecurity, or other urgent needs.
                </p>
              </div>
              <div className="card__footer">
                <strong>Eligibility:</strong> Any enrolled student experiencing
                an emergency financial situation.
              </div>
            </div>

            {/* Grant 5 */}
            <div className="card">
              <span className="card__label">Research</span>
              <h3 className="card__title">Undergraduate Research Grant</h3>
              <div className="card__body">
                <p>
                  Funds independent research projects pursued by undergraduate
                  students across all disciplines. Grants cover materials,
                  travel, and conference presentation costs.
                </p>
              </div>
              <div className="card__footer">
                <strong>Eligibility:</strong> Undergraduate students with
                faculty sponsorship.
              </div>
            </div>

            {/* Grant 6 */}
            <div className="card">
              <span className="card__label">Leadership</span>
              <h3 className="card__title">Student Leadership Scholarship</h3>
              <div className="card__body">
                <p>
                  Recognizes students who demonstrate exceptional leadership
                  through student organizations, campus governance, or community
                  initiatives.
                </p>
              </div>
              <div className="card__footer">
                <strong>Eligibility:</strong> Students holding a leadership role
                in a registered campus organization.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application info */}
      <section className="section section--alt">
        <div className="container prose" style={{ maxWidth: 720 }}>
          <h2>How to Apply</h2>
          <p>
            Applications for each grant cycle are announced at the beginning of
            every semester. All applications are submitted through the ASUC
            grants portal and reviewed by the Foundation's awards committee.
          </p>
          <ol>
            <li>Review the eligibility criteria for each grant above.</li>
            <li>
              Prepare supporting documents (transcripts, personal statement,
              etc.).
            </li>
            <li>Submit your application before the published deadline.</li>
            <li>
              Decisions are communicated via email within four weeks of the
              deadline.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

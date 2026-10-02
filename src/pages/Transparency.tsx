import { Link } from 'react-router-dom';

export default function Transparency() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header page-header--image">
        <img
          src="/meeting-room.jpg"
          alt="Foundation board meeting"
          className="page-header__bg"
        />
        <div className="container">
          <h1 className="page-header__title">Transparency</h1>
          <p className="page-header__subtitle">
            Financial reports, meeting minutes, and operational disclosures.
          </p>
        </div>
      </section>

      {/* Financial overview — editorial */}
      <section className="editorial">
        <div className="container">
          <h2>Financial Overview</h2>
          <p>
            The Foundation is funded through a portion of ASUC student fees. We
            are committed to full transparency in how these funds are collected,
            allocated, and spent. The table below summarizes our financial
            activity for the most recent academic year.
          </p>
        </div>
      </section>

      {/* Budget table */}
      <section className="section section--alt">
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem' }}>Annual Budget Summary</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Budgeted</th>
                  <th>Actual Spent</th>
                  <th>Variance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Need-Based Grants</td>
                  <td>$120,000</td>
                  <td>$118,500</td>
                  <td>−$1,500</td>
                </tr>
                <tr>
                  <td>Merit Scholarships</td>
                  <td>$80,000</td>
                  <td>$79,200</td>
                  <td>−$800</td>
                </tr>
                <tr>
                  <td>Emergency Aid</td>
                  <td>$40,000</td>
                  <td>$42,350</td>
                  <td>+$2,350</td>
                </tr>
                <tr>
                  <td>Research Grants</td>
                  <td>$35,000</td>
                  <td>$33,800</td>
                  <td>−$1,200</td>
                </tr>
                <tr>
                  <td>Community Service Awards</td>
                  <td>$25,000</td>
                  <td>$24,600</td>
                  <td>−$400</td>
                </tr>
                <tr>
                  <td>Administrative &amp; Operations</td>
                  <td>$15,000</td>
                  <td>$13,450</td>
                  <td>−$1,550</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--gray-500)' }}>
            * Figures shown are illustrative and based on the most recently
            published annual report.
          </p>
        </div>
      </section>

      {/* Meeting minutes & policies — split */}
      <section className="split split--reverse">
        <div className="split__image">
          <img
            src="/campus-hero.jpg"
            alt="UC Berkeley campus"
          />
        </div>
        <div className="split__content">
          <h2>Meeting Minutes</h2>
          <p>
            All Foundation board meetings are open to the public. Minutes are
            published within one week of each meeting and are available upon
            request.
          </p>
          <p>
            To request copies of meeting minutes or audited financial
            statements, please email{' '}
            <a href="mailto:grants@asuc.org">grants@asuc.org</a>.
          </p>

          <h2 style={{ marginTop: '2rem' }}>Policies &amp; Bylaws</h2>
          <p>
            The Foundation operates under the bylaws of the ASUC. Copies of our
            governing documents, conflict-of-interest policies, and grant
            disbursement procedures are available upon request.
          </p>
          <Link to="/contact" className="link-arrow">
            Request documents
          </Link>
        </div>
      </section>
    </>
  );
}

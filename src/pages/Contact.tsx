import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In a real app this would post to a backend.
    setSubmitted(true);
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Contact Us</h1>
          <p className="page-header__subtitle">
            Questions, feedback, or inquiries—we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact info */}
            <div>
              <div className="contact-info__item">
                <p className="contact-info__label">Email</p>
                <p className="contact-info__value">
                  <a href="mailto:grants@asuc.org">grants@asuc.org</a>
                </p>
              </div>
              <div className="contact-info__item">
                <p className="contact-info__label">Office</p>
                <p className="contact-info__value">
                  400 Eshleman Hall<br />
                  University of California, Berkeley<br />
                  Berkeley, CA 94720
                </p>
              </div>
              <div className="contact-info__item">
                <p className="contact-info__label">Office Hours</p>
                <p className="contact-info__value">
                  Monday – Friday, 10:00 AM – 4:00 PM<br />
                  (During the academic year)
                </p>
              </div>
              <div className="contact-info__item">
                <p className="contact-info__label">Part of</p>
                <p className="contact-info__value">
                  The Associated Students of the University of California (ASUC)
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              {submitted ? (
                <div
                  style={{
                    padding: '2rem',
                    background: 'var(--off-white)',
                    borderRadius: 6,
                    textAlign: 'center',
                  }}
                >
                  <h3 style={{ marginBottom: '0.5rem' }}>Thank you!</h3>
                  <p>
                    Your message has been received. We'll get back to you as
                    soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="form-group">
                    <label htmlFor="contact-name">Name</label>
                    <input type="text" id="contact-name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-subject">Subject</label>
                    <select id="contact-subject" name="subject" required>
                      <option value="">Select a topic…</option>
                      <option value="grants">Grant Inquiry</option>
                      <option value="scholarships">
                        Scholarship Inquiry
                      </option>
                      <option value="involvement">Getting Involved</option>
                      <option value="transparency">
                        Transparency / Records Request
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn--primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import "../styles/about.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">

        {/* Image */}
        <div className="about-image-wrapper">
          <img
            src="/images/training.jpg"
            alt="Students receiving vocational training at Amaraaba Vocational Training Centre"
            className="about-image"
          />

          <div className="about-image-badge">
            <strong>Skills</strong>
            <span>That Create Opportunities</span>
          </div>
        </div>

        {/* Content */}
        <div className="about-content">

          <span className="section-label">
            ABOUT AMARAABA
          </span>

          <h2>
            Empowering People Through
            <span> Practical Skills</span>
          </h2>

          <p className="about-intro">
            Amaraaba Vocational Training Centre provides practical
            vocational training that helps young people, mothers and
            communities develop valuable skills for self-reliance and
            a better future.
          </p>

          <p>
            We believe that access to practical skills can open doors
            to new opportunities. Through hands-on training and
            community-focused programs, we help individuals build
            confidence, develop their talents and create sustainable
            livelihoods.
          </p>

          {/* Highlights */}
          <div className="about-highlights">

            <div className="about-highlight">
              <div className="highlight-icon">✓</div>

              <div>
                <h3>Practical Training</h3>
                <p>
                  Learn useful skills through hands-on training.
                </p>
              </div>
            </div>

            <div className="about-highlight">
              <div className="highlight-icon">✓</div>

              <div>
                <h3>Community Impact</h3>
                <p>
                  Creating opportunities that strengthen communities.
                </p>
              </div>
            </div>

          </div>

          {/* Button */}
          <a href="#programs" className="about-btn">
            Explore Our Programs
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;
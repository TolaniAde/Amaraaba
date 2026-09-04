import "../styles/join-us.css";

function JoinUs() {
  return (
    <section className="join-us" id="join-us">
      <div className="join-us-overlay"></div>

      <div className="join-us-content">
        <span className="join-us-label">GET INVOLVED</span>

        <h2>Ready to Build a Better Future?</h2>

        <p>
          Whether you want to gain practical skills, support someone's journey,
          volunteer your time and expertise, or partner with us, there's a
          place for you at Amaraaba VTC.
        </p>

        <div className="join-us-buttons">
          <a href="#contact" className="join-btn primary-btn">
            Become a Trainee
          </a>

          <a href="#contact" className="join-btn secondary-btn">
            Volunteer With Us
          </a>

          <a href="#contact" className="join-btn secondary-btn">
            Support Our Mission
          </a>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
import "../styles/impact.css";

function Impact() {
  const impactStats = [
    {
      number: "500+",
      label: "Youth and Women Trained",
      description: "Individuals equipped with practical and useful skills.",
    },
    {
      number: "6",
      label: "Training Programs",
      description: "Practical programs designed around real-life opportunities.",
    },
    {
      number: "10+",
      label: "Communities Reached",
      description: "Extending skills and opportunities beyond the classroom.",
    },
    {
      number: "100%",
      label: "Women & Youth",
      description: "Creating opportunities for groups with limited access to skills.",
    },
  ];

  return (
    <section className="impact-section" id="impact">
      <div className="container">

        {/* Heading */}
        <div className="impact-header">
          <span className="section-label">
            OUR IMPACT
          </span>

          <h2>
            Turning Skills Into
            <span> Opportunities</span>
          </h2>

          <p>
            Every skill learned can become a source of confidence,
            income, independence, and positive change. Our work is
            focused on helping people turn practical knowledge into
            real opportunities.
          </p>
        </div>


        {/* Statistics */}
        <div className="impact-stats">

          {impactStats.map((stat) => (
            <div
              className="impact-stat"
              key={stat.label}
            >
              <strong>{stat.number}</strong>

              <h3>{stat.label}</h3>

              <p>{stat.description}</p>
            </div>
          ))}

        </div>


        {/* Impact Story */}
        <div className="impact-story">

          <div className="impact-story-content">

            <span className="impact-story-label">
              WHY IT MATTERS
            </span>

            <h3>
              Skills create more than
              <span> livelihoods.</span>
            </h3>

            <p>
              Vocational education can give people the confidence
              and practical ability to take control of their future.
              At Amaraaba, we are committed to creating an environment
              where people can learn, grow, and use their skills to
              create opportunities for themselves and others.
            </p>

            <a
              href="#get-involved"
              className="impact-button"
            >
              Be Part of the Impact
              <span>→</span>
            </a>

          </div>


          {/* Visual */}
          <div className="impact-visual">

            <div className="impact-circle impact-circle-one"></div>

            <div className="impact-circle impact-circle-two"></div>

            <div className="impact-visual-card">

              <span className="impact-quote">
                “
              </span>

              <p>
                When you train a woman, 
                you empower a community” 
                Your support build future!.
              </p>

              <div className="impact-line"></div>

              <span>
                Amaraaba Vocational Training Centre
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Impact;
import "../styles/programs.css";

function Programs() {
  const programs = [
    {
      number: "01",
      icon: "✂",
      title: "Tailoring & Fashion Designing",
      description:
        "Learn garment making, pattern-making, sewing skills, and creative fashion design.",
    },
    {
      number: "02",
      icon: "◈",
      title: "Weaving & Textile Crafts",
      description:
        "Master traditional and modern weaving techniques while producing market-ready textiles.",
    },
    {
      number: "03",
      icon: "✦",
      title: "Hairdressing & Styling",
      description:
        "Develop practical hairdressing and styling skills for personal and professional opportunities.",
    },
    {
      number: "04",
      icon: "⌨",
      title: "Computer Literacy",
      description:
        "Build essential computer skills and learn how to use digital tools for work and everyday life.",
    },
    {
      number: "05",
      icon: "◫",
      title: "Business Management",
      description:
        "Learn to plan, manage finances, and grow sustainable small businesses.",
    },
    {
      number: "06",
      icon: "◎",
      title: "Personal Development",
      description:
        "Build communication, teamwork, time management, and self-confidence for success.",
    },
  ];

  return (
    <section className="programs-section" id="programs">
      <div className="container">

        {/* Section Header */}
        <div className="programs-header">

          <div>
            <span className="section-label">
              OUR PROGRAMS
            </span>

            <h2>
              Skills That Open Doors
            </h2>
          </div>

          <p>
            Our practical training programs equip individuals with
            useful skills, confidence, and knowledge to create
            opportunities for themselves and their communities.
          </p>

        </div>


        {/* Program Cards */}
        <div className="programs-grid">

          {programs.map((program) => (
            <article
              className="program-card"
              key={program.number}
            >

              <div className="program-card-top">

                <span className="program-number">
                  {program.number}
                </span>

                <div className="program-icon">
                  {program.icon}
                </div>

              </div>

              <h3>
                {program.title}
              </h3>

              <p>
                {program.description}
              </p>

              <a
                href="#apply"
                className="program-link"
              >
                Learn More
                <span>→</span>
              </a>

            </article>
          ))}

        </div>


        {/* Bottom CTA */}
        <div className="programs-cta">

          <div>
            <h3>
              Ready to build a new skill?
            </h3>

            <p>
              Start your journey toward greater confidence,
              opportunity, and self-reliance.
            </p>
          </div>

          <a
            href="#apply"
            className="programs-cta-button"
          >
            Apply Now
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Programs;
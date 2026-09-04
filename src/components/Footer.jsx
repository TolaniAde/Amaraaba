import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-column footer-about">
          <a href="#" className="footer-logo">
            Amaraaba <span>VTC</span>
          </a>

          <p>
            Amaraaba Vocational Training Center (AVTC) is a free 
            community initiative dedicated to equipping young 
            people, adolescent mothers, and vulnerable groups with 
            employable skills and personal development 
            opportunities.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ig
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="YouTube">
              yt
            </a>
          </div>
        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>

            <li>
              <a href="#programs">Programs</a>
            </li>

            <li>
              <a href="#impact">Our Impact</a>
            </li>

            <li>
              <a href="#testimonials">Testimonials</a>
            </li>

            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>


        {/* GET INVOLVED */}
        <div className="footer-column">
          <h3>Get Involved</h3>

          <ul>
            <li>
              <a href="#join-us">Become a Trainee</a>
            </li>

            <li>
              <a href="#join-us">Volunteer</a>
            </li>

            <li>
              <a href="#join-us">Support Our Mission</a>
            </li>

            <li>
              <a href="#join-us">Partner With Us</a>
            </li>
          </ul>
        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <p>Tamale Metropolis, Ghana</p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <p>+233 531 267 777, +491 577 572 1186</p>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <p>amaraabavtc@gmail.com</p>
          </div>
        </div>

      </div>


      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            © 2026 Amaraaba VTC. All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
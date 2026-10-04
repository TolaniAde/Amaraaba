import { useEffect, useRef, useState } from "react";
import "../styles/testimonials.css";

const testimonials = [
  {
    id: 1,
    name: " Fuseini Rufaida",
    role: "from Sanserigu",
    image: "/images/IMG-20250926-WA0010.jpg",
    quote:
      "Since I started the school, my parents are proud and acknowledged positive impact the school is making in my life. I can now cut clothes and sow them completely on my own. This is a big opportunity to those of us who could not raise money to pay for fees and buy the learning tools. Thank you to everyone supporting us, we will make them proud.",
  },
  {
    id: 2,
    name: "Abubakari Aisha",
    role: "from Gusheigu",
    image: "/images/IMG-20250926-WA0012.jpg",
    quote:
      "I came to Tamale through Mr. Latif's support to pursue my dream of learning hairdressing and makeup, something I couldn't afford before. Before joining Amaraaba VTC, life's challenges led me to wrong choices, but the centre gave me free training, accommodation and feeding. My life has changed; I now see a bright future and hope to open my own shop to support myself and my mother. A heartfelt thank you to Amaraaba VTC and the sponsors in Germany.",
  },
  {
    id: 3,
    name: "Nana Aisha",
    role: "Snzerigu Community",
    image: "/images/IMG-20250926-WA0013.jpg",
    quote:
      "I am a mother of two Children. I was always home and hope one day to get the chance to learn something to help my husband. When I heard of Amaraaba VTC. I run to get a form and was given free admission. I learn makeup and hairdressing. Our teachers are amazing and I have achieved so much in the few months being in the school. I can now a lot of hair styles and do my kids ha[ir at] home. Thank u to everyone support.",
  },
  {
    id: 4,
    name: "Sulemana Sumaya Neimpaga",
    role: "Snzerigu Community",
    image: "/images/IMG-20250926-WA0014.jpg",
    quote:
      "I joined Amaraaba VTC to persue my dream of fashion and design. I never believed I could handle a sewing machine but today I can make beautiful dresses. I sincerely thank the sponsors for changing my life and the lives of so many others.",
  },
  {
    id: 5,
    name: "Amari Huda",
    role: "Snzerigu Community",
    image: "/images/IMG-20250926-WA0015.jpg",
    quote:
      "I have achieved a lot at Amaraaba VTC. First I was in Accra doing labour work to earn money. I always wanted to learn handwork, but we have no money for the fees and the items required. Few months now, I am proud of what I have learnt here and I see a better future ahead.",
  },
  {
    id: 6,
    name: "Abubakari Ruhanna",
    role: "Wamali Community",
    image: "/images/IMG-20250926-WA0016.jpg",
    quote:
      "I am from Wamali Community. Through this centre, I have learned skills I never thought I could access. I feel ready to start on my own with new opportunities. Thank you to all the sponsors whose generosity has lifted us from hopelessness to hope.",
  },
];

function Testimonials() {
  const carouselRef = useRef(null);

  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const gap = 24;

  // Three copies for seamless looping
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  /* =========================================
     DETERMINE SCREEN SIZE
  ========================================= */

  useEffect(() => {
    const updateLayout = () => {
      let cards = 3;

      if (window.innerWidth <= 768) {
        cards = 1;
      } else if (window.innerWidth <= 1024) {
        cards = 2;
      }

      setVisibleCards(cards);
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  /* =========================================
     CALCULATE CARD WIDTH
  ========================================= */

  useEffect(() => {
    const calculateCardWidth = () => {
      if (!carouselRef.current) return;

      const containerWidth = carouselRef.current.clientWidth;

      const width =
        (containerWidth - gap * (visibleCards - 1)) / visibleCards;

      setCardWidth(width);
    };

    calculateCardWidth();

    window.addEventListener("resize", calculateCardWidth);

    return () => {
      window.removeEventListener("resize", calculateCardWidth);
    };
  }, [visibleCards]);

  /* =========================================
     NEXT SLIDE
  ========================================= */

  const nextSlide = () => {
    if (!isTransitioning) return;

    setCurrentIndex((prev) => prev + 1);
  };

  /* =========================================
     PREVIOUS SLIDE
  ========================================= */

  const prevSlide = () => {
    if (!isTransitioning) return;

    setCurrentIndex((prev) => prev - 1);
  };

  /* =========================================
     HANDLE INFINITE LOOP
  ========================================= */

  const handleTransitionEnd = () => {
    // We've reached the third copy
    if (currentIndex >= testimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - testimonials.length);
    }

    // We've moved into the first copy
    else if (currentIndex < testimonials.length) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + testimonials.length);
    }
  };

  /* =========================================
     RE-ENABLE TRANSITION AFTER RESET
  ========================================= */

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning]);

  /* =========================================
     AUTO SLIDE
  ========================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* =========================================
     DOT NAVIGATION
  ========================================= */

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(testimonials.length + index);
  };

  const activeDot =
    ((currentIndex - testimonials.length) % testimonials.length +
      testimonials.length) %
    testimonials.length;

  /* =========================================
     TRACK POSITION
  ========================================= */

  const translateX = currentIndex * (cardWidth + gap);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">

        {/* SECTION HEADING */}
        <div className="section-heading">
          <span className="section-label">TESTIMONIALS</span>

          <h2>Hear From Those We've Impacted</h2>

          <p>
            Discover how our training and programs are helping people build
            confidence, develop practical skills, and create new opportunities.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="testimonial-carousel">

          {/* PREVIOUS BUTTON */}
          <button
            className="carousel-arrow carousel-prev"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            &#10094;
          </button>

          {/* VIEWPORT */}
          <div
            className="testimonial-window"
            ref={carouselRef}
          >
            {/* TRACK */}
            <div
              className="testimonial-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${translateX}px)`,
                transition: isTransitioning
                  ? "transform 0.6s ease-in-out"
                  : "none",
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  className="testimonial-card"
                  key={`${testimonial.id}-${index}`}
                  style={{
                    flex: `0 0 ${cardWidth}px`,
                  }}
                >
                  <div className="quote-icon">“</div>

                  <p className="testimonial-quote">
                    {testimonial.quote}
                  </p>

                  <div className="testimonial-person">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                    />

                    <div>
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NEXT BUTTON */}
          <button
            className="carousel-arrow carousel-next"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            &#10095;
          </button>

        </div>

        {/* DOTS */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={activeDot === index ? "active" : ""}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
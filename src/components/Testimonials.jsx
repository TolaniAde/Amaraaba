import { useEffect, useRef, useState } from "react";
import "../styles/testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Grace Johnson",
    role: "Former Trainee",
    image: "/images/testimonial-1.jpg",
    quote:
      "The training gave me more than just a skill. It gave me the confidence to believe that I could build something of my own.",
  },
  {
    id: 2,
    name: "Daniel Williams",
    role: "Program Participant",
    image: "/images/testimonial-2.jpg",
    quote:
      "I gained practical knowledge that I could immediately apply. The instructors were supportive, patient, and genuinely interested in our progress.",
  },
  {
    id: 3,
    name: "Sarah Thompson",
    role: "Graduate",
    image: "/images/testimonial-3.jpg",
    quote:
      "My experience at Amaraaba VTC opened my eyes to new opportunities. I now feel better prepared to pursue my goals and support myself.",
  },
  {
    id: 4,
    name: "Michael Anderson",
    role: "Entrepreneurship Trainee",
    image: "/images/testimonial-4.jpg",
    quote:
      "The hands-on approach made learning much easier for me. I left the program with a skill I can use to create opportunities for myself.",
  },
  {
    id: 5,
    name: "Anita Brown",
    role: "Former Student",
    image: "/images/testimonial-5.jpg",
    quote:
      "What I appreciated most was the encouragement we received throughout the training. It helped me discover abilities I didn't know I had.",
  },
  {
    id: 6,
    name: "David Okafor",
    role: "Community Participant",
    image: "/images/testimonial-6.jpg",
    quote:
      "Amaraaba VTC is helping people gain useful skills and become more confident about their future. I am grateful to have been part of the program.",
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
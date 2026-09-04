import { useEffect, useState } from "react";
import { heroSlides } from "../data/slides";
import "../styles/hero.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === heroSlides.length - 1
        ? 0
        : previousSlide + 1
    );
  };

  // Move to the previous slide
  const previousSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === 0
        ? heroSlides.length - 1
        : previousSlide - 1
    );
  };

  // Automatic slider
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(sliderInterval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="hero">

      {/* Background image */}
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      />

      {/* Dark overlay */}
      <div className="hero-overlay" />


      {/* Hero content */}
      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-eyebrow">
            {slide.eyebrow}
          </p>

          <h1>
            {slide.title}
            <span>{slide.highlight}</span>
          </h1>

          <p className="hero-description">
            {slide.description}
          </p>


          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#apply"
              className="hero-btn hero-btn-primary"
            >
              Apply for Training
              <span>→</span>
            </a>

            <a
              href="#support"
              className="hero-btn hero-btn-secondary"
            >
              Support Our Mission
            </a>

          </div>

        </div>

      </div>


      {/* Previous button */}
      <button
        className="slider-arrow slider-prev"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        ←
      </button>


      {/* Next button */}
      <button
        className="slider-arrow slider-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        →
      </button>


      {/* Slider dots */}
      <div className="slider-dots">

        {heroSlides.map((item, index) => (
          <button
            key={item.id}
            className={`dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}

      </div>

    </section>
  );
}

export default Hero;
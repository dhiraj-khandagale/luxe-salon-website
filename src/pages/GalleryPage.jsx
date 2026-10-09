import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import hairCut from "../assets/hair-cut.png";
import hairColor from "../assets/hair-color.png";
import hairSpa from "../assets/hair-spa.png";
import makeup from "../assets/makeup.png";
import manicure from "../assets/manicure-pedicure.png";
import facial from "../assets/facial-skincare.png";
import whyChoose from "../assets/whyus.png";
import homePage from "../assets/HomePage.png";
import salonWaves from "../assets/Glossy Salon Waves and Warm Light.png";

const galleryItems = [
  {
    id: 1,
    title: "Hair Cut & Styling",
    category: "Hair",
    image: hairCut,
    description:
      "Explore personalised haircuts and styling ideas designed to complement your look and personal style.",
  },
  {
    id: 2,
    title: "Hair Colour",
    category: "Hair",
    image: hairColor,
    description:
      "Discover colour inspiration and fresh looks for your next salon visit.",
  },
  {
    id: 3,
    title: "Hair Spa & Treatment",
    category: "Hair",
    image: hairSpa,
    description:
      "Explore hair-care experiences focused on cleansing, conditioning and relaxation.",
  },
  {
    id: 4,
    title: "Professional Makeup",
    category: "Makeup",
    image: makeup,
    description:
      "Find makeup inspiration for celebrations, parties and special occasions.",
  },
  {
    id: 5,
    title: "Manicure & Pedicure",
    category: "Nails",
    image: manicure,
    description:
      "Explore nail grooming and hand-and-foot care inspiration.",
  },
  {
    id: 6,
    title: "Facial & Skin Care",
    category: "Skin",
    image: facial,
    description:
      "Discover facial and skin-care service inspiration for your next visit.",
  },
  {
    id: 7,
    title: "The Luxe Experience",
    category: "Salon",
    image: whyChoose,
    description:
      "A glimpse into the styling and beauty experience created for Luxe.",
  },
  {
    id: 8,
    title: "Inside Luxe",
    category: "Salon",
    image: homePage,
    description:
      "Explore the visual style and atmosphere of the Luxe salon experience.",
  },
  {
    id: 9,
    title: "Glossy Waves",
    category: "Hair",
    image: salonWaves,
    description:
      "Discover glossy waves and elegant hair styling inspiration.",
  },
];

const categories = ["All", "Hair", "Makeup", "Nails", "Skin", "Salon"];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="gallery-page">
      {/* HERO */}
      <section className="gallery-page-hero">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="gallery-eyebrow">THE LUXE LOOKBOOK</p>

          <h1>
            Beauty in Every
            <br />
            <span>Detail.</span>
          </h1>

          <p className="gallery-hero-description">
            Explore our collection of hair, makeup, nail and
            beauty inspiration. Find your next look at Luxe
            Salon & Spa.
          </p>

          <a
            href="#gallery-collection"
            className="gallery-gold-button"
          >
            EXPLORE THE GALLERY
            <i className="bi bi-arrow-down ms-2" />
          </a>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="gallery-page-intro">
        <div className="container">
          <p className="gallery-eyebrow">OUR VISUAL JOURNEY</p>

          <h2>
            A Closer Look at
            <br />
            <span>The Luxe Experience.</span>
          </h2>

          <p>
            From everyday styling to special-occasion beauty,
            explore our service categories and find inspiration
            for your next salon visit.
          </p>
        </div>
      </section>

      {/* FILTERS AND GALLERY */}
      <section
        id="gallery-collection"
        className="gallery-collection-section"
      >
        <div className="container">
          <div
            className="gallery-filters"
            role="group"
            aria-label="Filter gallery by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`gallery-filter ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="gallery-page-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.035,
                  }}
                  className="gallery-page-card"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`View ${item.title}`}
                >
                  <div className="gallery-page-image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />

                    <div className="gallery-page-overlay">
                      <span className="gallery-card-category">
                        {item.category}
                      </span>

                      <span className="gallery-card-title">
                        {item.title}
                      </span>

                      <span className="gallery-card-open">
                        <i className="bi bi-arrows-fullscreen" />
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            role="presentation"
          >
            <motion.div
              className="gallery-lightbox-content"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={selectedImage.title}
            >
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
              >
                <i className="bi bi-x-lg" />
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
              />

              <div className="gallery-lightbox-caption">
                <span>{selectedImage.category}</span>
                <h2>{selectedImage.title}</h2>
                <p>{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOOKING CTA */}
      <section className="gallery-page-cta">
        <div className="container">
          <p className="gallery-eyebrow">
            INSPIRED BY WHAT YOU SEE?
          </p>

          <h2>
            Your Next Look
            <br />
            Starts at Luxe.
          </h2>

          <p>
            Choose your preferred service and request an
            appointment at Luxe Salon & Spa.
          </p>

          <a href="/booking" className="gallery-gold-button">
            BOOK AN APPOINTMENT
            <i className="bi bi-arrow-up-right ms-2" />
          </a>
        </div>
      </section>

      {/* PAGE STYLES */}
      <style>{`
        .gallery-page {
          background: #F5EFE6;
          color: #0B0B0B;
        }

        .gallery-page-hero {
          padding: 155px 0 100px;
          background:
            radial-gradient(
              ellipse at 80% 15%,
              rgba(201,169,110,0.15),
              transparent 42%
            ),
            #0B0B0B;
          text-align: center;
          color: #F5EFE6;
        }

        .gallery-eyebrow {
          color: #A68145;
          font-family: "Montserrat", sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 3px;
          margin-bottom: 18px;
        }

        .gallery-page-hero .gallery-eyebrow,
        .gallery-page-cta .gallery-eyebrow {
          color: #C9A96E;
        }

        .gallery-page-hero h1,
        .gallery-page-cta h2 {
          font-family: "Playfair Display", serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 500;
          line-height: 1.12;
          margin-bottom: 22px;
        }

        .gallery-page-hero h1 span,
        .gallery-page-intro h2 span {
          color: #C9A96E;
          font-style: italic;
        }

        .gallery-hero-description {
          max-width: 600px;
          margin: 0 auto 30px;
          color: rgba(245,239,230,0.7);
          font-size: 0.9rem;
          line-height: 1.9;
        }

        .gallery-gold-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 23px;
          background: #C9A96E;
          color: #0B0B0B;
          font-family: "Montserrat", sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .gallery-gold-button:hover {
          background: #D8BA82;
          color: #0B0B0B;
          transform: translateY(-3px);
        }

        .gallery-page-intro {
          max-width: 760px;
          margin: 0 auto;
          padding: 80px 24px 50px;
          text-align: center;
        }

        .gallery-page-intro h2 {
          font-family: "Playfair Display", serif;
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 500;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .gallery-page-intro > .container > p:last-child {
          color: #716B62;
          font-size: 0.9rem;
          line-height: 1.9;
        }

        .gallery-collection-section {
          padding: 15px 0 90px;
        }

        .gallery-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 38px;
        }

        .gallery-filter {
          padding: 11px 20px;
          border: 1px solid rgba(11,11,11,0.17);
          background: transparent;
          color: #716B62;
          font-family: "Montserrat", sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.8px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .gallery-filter:hover,
        .gallery-filter.active {
          background: #0B0B0B;
          color: #C9A96E;
          border-color: #0B0B0B;
        }

        .gallery-page-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .gallery-page-card {
          display: block;
          width: 100%;
          min-width: 0;
          padding: 0;
          border: 0;
          background: transparent;
          text-align: left;
          cursor: pointer;
        }

        .gallery-page-image-wrap {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #E7DED0;
        }

        .gallery-page-image-wrap img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.65s ease;
        }

        .gallery-page-card:hover img {
          transform: scale(1.06);
        }

        .gallery-page-card:focus-visible {
          outline: 2px solid #A68145;
          outline-offset: 4px;
        }

        .gallery-page-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          padding: 24px;
          background: linear-gradient(
            180deg,
            transparent 35%,
            rgba(11,11,11,0.82) 100%
          );
          color: #F5EFE6;
        }

        .gallery-card-category {
          color: #C9A96E;
          font-family: "Montserrat", sans-serif;
          font-size: 0.62rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .gallery-card-title {
          padding-right: 30px;
          font-family: "Playfair Display", serif;
          font-size: 1.4rem;
          line-height: 1.3;
        }

        .gallery-card-open {
          position: absolute;
          right: 20px;
          bottom: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          border: 1px solid rgba(201,169,110,0.8);
          color: #C9A96E;
        }

        .gallery-lightbox {
          position: fixed;
          inset: 0;
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(0,0,0,0.88);
          overflow-y: auto;
        }

        .gallery-lightbox-content {
          position: relative;
          width: 100%;
          max-width: 850px;
          max-height: 92vh;
          overflow-y: auto;
          background: #F5EFE6;
          border: 1px solid rgba(201,169,110,0.65);
        }

        .gallery-lightbox-content > img {
          display: block;
          width: 100%;
          max-height: 65vh;
          object-fit: contain;
          background: #0B0B0B;
        }

        .gallery-lightbox-close {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border: 1px solid #C9A96E;
          background: #0B0B0B;
          color: #F5EFE6;
          cursor: pointer;
        }

        .gallery-lightbox-caption {
          padding: 24px 28px 28px;
        }

        .gallery-lightbox-caption > span {
          color: #A68145;
          font-family: "Montserrat", sans-serif;
          font-size: 0.65rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .gallery-lightbox-caption h2 {
          margin: 8px 0;
          font-family: "Playfair Display", serif;
          font-size: 2rem;
        }

        .gallery-lightbox-caption p {
          margin: 0;
          color: #716B62;
          font-size: 0.85rem;
          line-height: 1.8;
        }

        .gallery-page-cta {
          padding: 85px 0;
          background: #0B0B0B;
          color: #F5EFE6;
          text-align: center;
        }

        .gallery-page-cta h2 {
          margin-bottom: 20px;
        }

        .gallery-page-cta p:not(.gallery-eyebrow) {
          margin-bottom: 28px;
          color: rgba(245,239,230,0.65);
          font-size: 0.88rem;
          line-height: 1.8;
        }

        @media (max-width: 991px) {
          .gallery-page-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 575px) {
          .gallery-page-hero {
            padding: 130px 0 75px;
          }

          .gallery-page-intro {
            padding-top: 60px;
          }

          .gallery-page-grid {
            gap: 12px;
          }

          .gallery-page-overlay {
            padding: 14px;
          }

          .gallery-card-title {
            font-size: 1.05rem;
          }

          .gallery-card-open {
            right: 10px;
            bottom: 12px;
            width: 30px;
            height: 30px;
          }

          .gallery-filters {
            gap: 7px;
          }

          .gallery-filter {
            padding: 9px 13px;
          }

          .gallery-lightbox {
            padding: 12px;
          }

          .gallery-lightbox-caption {
            padding: 20px;
          }

          .gallery-lightbox-caption h2 {
            font-size: 1.6rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-page-image-wrap img,
          .gallery-gold-button,
          .gallery-filter {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
};

export default GalleryPage;
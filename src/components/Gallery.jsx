
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import hairCutImage from "../assets/hair-cut.png";
import hairColorImage from "../assets/hair-color.png";
import hairSpaImage from "../assets/hair-spa.png";
import makeupImage from "../assets/makeup.png";
import manicureImage from "../assets/manicure-pedicure.png";
import facialImage from "../assets/facial-skincare.png";
import whyChooseImage from "../assets/whyus.png";
import homeImage from "../assets/HomePage.png";

const MotionLink = motion(Link);

const galleryItems = [
  {
    image: hairCutImage,
    title: "Signature Styling",
    category: "HAIR",
    size: "large",
  },
  {
    image: hairColorImage,
    title: "Luxury Hair Color",
    category: "COLOR",
    size: "small",
  },
  {
    image: makeupImage,
    title: "Beauty & Makeup",
    category: "MAKEUP",
    size: "small",
  },
  {
    image: hairSpaImage,
    title: "Relaxing Hair Spa",
    category: "SPA",
    size: "wide",
  },
  {
    image: manicureImage,
    title: "Nail Care",
    category: "NAILS",
    size: "small",
  },
  {
    image: facialImage,
    title: "Skin Care Ritual",
    category: "SKIN",
    size: "small",
  },
  {
    image: whyChooseImage,
    title: "The Luxe Experience",
    category: "EXPERIENCE",
    size: "wide",
  },
  {
    image: homeImage,
    title: "Luxe Salon",
    category: "SALON",
    size: "small",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox with Escape key
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling while lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      style={{
        backgroundColor: "#0B0B0B",
        color: "#F5EFE6",
        overflow: "hidden",
      }}
    >
      <div className="container py-5">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
          style={{
            paddingTop: "70px",
            paddingBottom: "50px",
          }}
        >
          <p
            className="font-ui"
            style={{
              color: "#C9A96E",
              fontSize: "0.72rem",
              fontWeight: "600",
              letterSpacing: "4px",
              marginBottom: "18px",
            }}
          >
            OUR GALLERY
          </p>

          <h2
            className="font-display"
            style={{
              color: "#F5EFE6",
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              lineHeight: "1.05",
              fontWeight: "500",
              marginBottom: "22px",
            }}
          >
            A Glimpse Into
            <br />
            <span style={{ color: "#C9A96E" }}>
              The Luxe Experience.
            </span>
          </h2>

          <p
            className="font-body mx-auto"
            style={{
              color: "rgba(245,239,230,0.6)",
              maxWidth: "600px",
              fontSize: "0.9rem",
              lineHeight: "1.8",
              marginBottom: "0",
            }}
          >
            Explore moments of beauty, artistry and relaxation
            from the Luxe Salon experience.
          </p>
        </motion.div>

        {/* GALLERY GRID */}
        <div className="gallery-grid pb-5">
          {galleryItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              className={`gallery-item gallery-${item.size}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <button
                type="button"
                className="gallery-card position-relative overflow-hidden h-100 w-100"
                onClick={() => setSelectedImage(item)}
                aria-label={`View ${item.title} image`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="gallery-image w-100 h-100"
                />

                {/* Dark Overlay */}
                <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100" />

                {/* Gold Border */}
                <div className="gallery-border position-absolute top-0 start-0 w-100 h-100" />

                {/* Content */}
                <div className="gallery-content position-absolute bottom-0 start-0 w-100">
                  <p
                    className="font-ui"
                    style={{
                      color: "#C9A96E",
                      fontSize: "0.62rem",
                      letterSpacing: "2.5px",
                      marginBottom: "7px",
                      fontWeight: "600",
                    }}
                  >
                    {item.category}
                  </p>

                  <h3
                    className="font-display"
                    style={{
                      color: "#F5EFE6",
                      fontSize: "1.45rem",
                      fontWeight: "500",
                      marginBottom: "0",
                      paddingRight: "45px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <div className="gallery-arrow d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrows-fullscreen" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
          style={{
            paddingTop: "30px",
            paddingBottom: "70px",
          }}
        >
          <p
            className="font-body"
            style={{
              color: "rgba(245,239,230,0.5)",
              fontSize: "0.84rem",
              marginBottom: "18px",
            }}
          >
            Your transformation could be next.
          </p>

          <MotionLink
            to="/booking"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="font-ui text-decoration-none d-inline-flex align-items-center gap-2"
            style={{
              backgroundColor: "#C9A96E",
              color: "#0B0B0B",
              padding: "14px 26px",
              fontSize: "0.7rem",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            BOOK YOUR EXPERIENCE
            <i className="bi bi-arrow-up-right" />
          </MotionLink>
        </motion.div>
      </div>

      {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <motion.div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="gallery-lightbox-content"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <i className="bi bi-x-lg" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="gallery-lightbox-image"
            />

            <div className="gallery-lightbox-caption">
              <p>{selectedImage.category}</p>
              <h3>{selectedImage.title}</h3>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* GALLERY CSS */}
      <style>
        {`
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            grid-auto-rows: 230px;
            gap: 18px;
          }

          .gallery-large {
            grid-column: span 2;
            grid-row: span 2;
          }

          .gallery-small {
            grid-column: span 1;
            grid-row: span 1;
          }

          .gallery-wide {
            grid-column: span 2;
            grid-row: span 1;
          }

          .gallery-card {
            display: block;
            padding: 0;
            border: 1px solid rgba(201, 169, 110, 0.18);
            background: #111111;
            text-align: left;
            cursor: pointer;
          }

          .gallery-card:focus-visible {
            outline: 2px solid #C9A96E;
            outline-offset: 4px;
          }

          .gallery-image {
            object-fit: cover;
            display: block;
            transition:
              transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1),
              filter 0.6s ease;
          }

          .gallery-overlay {
            background: linear-gradient(
              180deg,
              rgba(11, 11, 11, 0.02) 20%,
              rgba(11, 11, 11, 0.18) 45%,
              rgba(11, 11, 11, 0.9) 100%
            );
            transition: opacity 0.5s ease;
            pointer-events: none;
          }

          .gallery-border {
            border: 1px solid transparent;
            transition: border-color 0.4s ease;
            pointer-events: none;
            inset: 0;
          }

          .gallery-content {
            padding: 25px;
            transform: translateY(8px);
            transition: transform 0.5s ease;
            pointer-events: none;
          }

          .gallery-arrow {
            position: absolute;
            right: 25px;
            bottom: 25px;
            width: 42px;
            height: 42px;
            border: 1px solid rgba(201, 169, 110, 0.7);
            color: #C9A96E;
            background: rgba(11, 11, 11, 0.45);
            backdrop-filter: blur(8px);
            opacity: 0;
            transform: translateY(10px);
            transition:
              opacity 0.4s ease,
              transform 0.4s ease,
              background-color 0.3s ease;
          }

          .gallery-card:hover .gallery-image {
            transform: scale(1.08);
            filter: brightness(0.82);
          }

          .gallery-card:hover .gallery-border {
            border-color: rgba(201, 169, 110, 0.65);
            inset: 8px;
          }

          .gallery-card:hover .gallery-content {
            transform: translateY(0);
          }

          .gallery-card:hover .gallery-arrow,
          .gallery-card:focus-visible .gallery-arrow {
            opacity: 1;
            transform: translateY(0);
          }

          .gallery-card:hover .gallery-arrow {
            background: #C9A96E;
            color: #0B0B0B;
          }

          /* LIGHTBOX */
          .gallery-lightbox {
            position: fixed;
            inset: 0;
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            background: rgba(0, 0, 0, 0.92);
            backdrop-filter: blur(8px);
          }

          .gallery-lightbox-content {
            position: relative;
            width: min(900px, 100%);
            max-height: 90vh;
            overflow: auto;
            background: #0B0B0B;
            border: 1px solid rgba(201, 169, 110, 0.55);
          }

          .gallery-lightbox-image {
            display: block;
            width: 100%;
            max-height: 72vh;
            object-fit: contain;
            background: #111111;
          }

          .gallery-lightbox-caption {
            padding: 20px 24px 24px;
          }

          .gallery-lightbox-caption p {
            color: #C9A96E;
            font-size: 0.68rem;
            letter-spacing: 3px;
            margin-bottom: 8px;
          }

          .gallery-lightbox-caption h3 {
            color: #F5EFE6;
            font-family: "Playfair Display", serif;
            font-size: clamp(1.4rem, 3vw, 2rem);
            margin: 0;
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
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .gallery-lightbox-close:hover {
            background: #C9A96E;
            color: #0B0B0B;
          }

          @media (max-width: 991px) {
            .gallery-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              grid-auto-rows: 260px;
            }

            .gallery-large {
              grid-column: span 2;
              grid-row: span 2;
            }

            .gallery-wide {
              grid-column: span 2;
            }
          }

          @media (max-width: 575px) {
            .gallery-grid {
              grid-template-columns: 1fr;
              grid-auto-rows: 380px;
              gap: 14px;
            }

            .gallery-large,
            .gallery-small,
            .gallery-wide {
              grid-column: span 1;
              grid-row: span 1;
            }

            .gallery-content {
              padding: 20px;
            }

            .gallery-arrow {
              right: 20px;
              bottom: 20px;
              opacity: 1;
              transform: translateY(0);
            }

            .gallery-lightbox {
              padding: 12px;
            }

            .gallery-lightbox-caption {
              padding: 16px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .gallery-image,
            .gallery-content,
            .gallery-arrow {
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
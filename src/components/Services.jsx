import { motion } from "framer-motion";

import serviceLogo from "../assets/services-logo.png";

import hairCutImage from "../assets/hair-cut.png";
import hairColorImage from "../assets/hair-color.png";
import hairSpaImage from "../assets/hair-spa.png";
import makeupImage from "../assets/makeup.png";
import manicureImage from "../assets/manicure-pedicure.png";
import facialImage from "../assets/facial-skincare.png";

const services = [
  {
    number: "01",
    icon: "bi-scissors",
    title: "Hair Cut & Styling",
    description:
      "Professional cuts and styling tailored to your personality and look.",
    image: hairCutImage,
  },
  {
    number: "02",
    icon: "bi-palette",
    title: "Hair Color",
    description:
      "Premium coloring services for a fresh, vibrant and confident look.",
    image: hairColorImage,
  },
  {
    number: "03",
    icon: "bi-droplet-half",
    title: "Hair Spa & Treatment",
    description:
      "Deep nourishment and relaxing treatments for healthier, beautiful hair.",
    image: hairSpaImage,
  },
  {
    number: "04",
    icon: "bi-stars",
    title: "Makeup",
    description:
      "Elegant makeup looks crafted for parties, occasions and special moments.",
    image: makeupImage,
  },
  {
    number: "05",
    icon: "bi-hand-index",
    title: "Manicure & Pedicure",
    description:
      "Relaxing nail care treatments that leave your hands and feet refreshed.",
    image: manicureImage,
  },
  {
    number: "06",
    icon: "bi-flower1",
    title: "Facial & Skin Care",
    description:
      "Personalized skincare treatments for a naturally fresh and glowing look.",
    image: facialImage,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "#0B0B0B",
        color: "#F5EFE6",
        overflow: "hidden",
      }}
    >
      <div className="container py-5">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
          style={{
            paddingTop: "60px",
            paddingBottom: "55px",
          }}
        >
          {/* Rotating Logo */}
          <motion.div
            className="mx-auto"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: "150px",
              height: "150px",
              marginBottom: "30px",
            }}
          >
            <img
              src={serviceLogo}
              alt="Luxe Salon logo"
              className="w-100 h-100"
              style={{
                objectFit: "contain",
                display: "block",
              }}
            />
          </motion.div>

          {/* Small Label */}
          <p
            className="font-ui"
            style={{
              color: "#C9A96E",
              letterSpacing: "4px",
              fontSize: "0.72rem",
              fontWeight: "600",
              marginBottom: "18px",
            }}
          >
            OUR SERVICES
          </p>

          {/* Main Heading */}
          <h2
            className="font-display"
            style={{
              color: "#F5EFE6",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: "1.05",
              fontWeight: "500",
              marginBottom: "22px",
            }}
          >
            Beauty Crafted
            <br />
            <span style={{ color: "#C9A96E" }}>
              Around You.
            </span>
          </h2>

          {/* Description */}
          <p
            className="font-body mx-auto"
            style={{
              color: "rgba(245, 239, 230, 0.62)",
              maxWidth: "620px",
              lineHeight: "1.8",
              fontSize: "0.92rem",
              marginBottom: "0",
            }}
          >
            From effortless everyday styling to complete beauty
            transformations, every service is thoughtfully designed
            around you.
          </p>
        </motion.div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}
        <div className="row g-4 pb-5">
          {services.map((service, index) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={service.title}
            >
              <motion.article
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                }}
                className="h-100"
              >
                {/* =================================================
                    SERVICE CARD
                ================================================== */}
                <div
                  className="service-image-card position-relative overflow-hidden h-100"
                  style={{
                    minHeight: "470px",
                    backgroundColor: "#111111",
                    border: "1px solid rgba(201, 169, 110, 0.2)",
                    transition: "all 0.4s ease",
                  }}
                >
                  {/* Service Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="service-card-image position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.7s ease",
                    }}
                  />

                  {/* Dark Gradient */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background: `
                        linear-gradient(
                          180deg,
                          rgba(11,11,11,0.05) 10%,
                          rgba(11,11,11,0.15) 35%,
                          rgba(11,11,11,0.88) 78%,
                          rgba(11,11,11,0.98) 100%
                        )
                      `,
                    }}
                  />

                  {/* Gold Top Line */}
                  <div
                    className="position-absolute top-0 start-0"
                    style={{
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#C9A96E",
                      transition: "width 0.5s ease",
                    }}
                  />

                  {/* Number */}
                  <div
                    className="position-absolute"
                    style={{
                      top: "22px",
                      right: "22px",
                      color: "#C9A96E",
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "0.68rem",
                      letterSpacing: "2px",
                      fontWeight: "600",
                    }}
                  >
                    {service.number}
                  </div>

                  {/* Card Content */}
                  <div
                    className="position-absolute start-0 bottom-0 w-100"
                    style={{
                      padding: "30px",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="d-flex align-items-center justify-content-center mb-4"
                      style={{
                        width: "54px",
                        height: "54px",
                        border: "1px solid #C9A96E",
                        backgroundColor: "rgba(11,11,11,0.65)",
                        backdropFilter: "blur(8px)",
                        color: "#C9A96E",
                      }}
                    >
                      <i
                        className={`bi ${service.icon}`}
                        style={{
                          fontSize: "1.25rem",
                        }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="font-display"
                      style={{
                        color: "#F5EFE6",
                        fontSize: "1.8rem",
                        lineHeight: "1.15",
                        fontWeight: "500",
                        marginBottom: "12px",
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="font-body"
                      style={{
                        color: "rgba(245,239,230,0.68)",
                        fontSize: "0.84rem",
                        lineHeight: "1.75",
                        maxWidth: "380px",
                        marginBottom: "18px",
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Explore */}
                    <div
                      className="d-flex align-items-center gap-2"
                      style={{
                        color: "#C9A96E",
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "0.68rem",
                        letterSpacing: "1.8px",
                        fontWeight: "600",
                      }}
                    >
                      <span>EXPLORE SERVICE</span>

                      <i
                        className="bi bi-arrow-up-right"
                        style={{
                          fontSize: "0.9rem",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
          style={{
            paddingTop: "35px",
            paddingBottom: "70px",
          }}
        >
          <p
            className="font-body"
            style={{
              color: "rgba(245,239,230,0.5)",
              fontSize: "0.85rem",
              marginBottom: "18px",
            }}
          >
            Ready for your next transformation?
          </p>

          <a
            href="/booking"
            className="font-ui text-decoration-none d-inline-flex align-items-center gap-2"
            style={{
              backgroundColor: "#C9A96E",
              color: "#0B0B0B",
              padding: "14px 26px",
              fontSize: "0.72rem",
              fontWeight: "600",
              letterSpacing: "1px",
              transition: "all 0.3s ease",
            }}
          >
            BOOK AN APPOINTMENT
            <i className="bi bi-arrow-up-right" />
          </a>
        </motion.div>
      </div>

      {/* =======================================================
          CARD HOVER CSS
      ======================================================== */}
      <style>
        {`
          .service-image-card:hover {
            border-color: #C9A96E !important;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);
          }

          .service-image-card:hover .service-card-image {
            transform: scale(1.08);
          }

          .service-image-card:hover > div:nth-child(3) {
            width: 100% !important;
          }

          .service-image-card::after {
            content: "";
            position: absolute;
            inset: 0;
            border: 1px solid transparent;
            pointer-events: none;
            transition: border-color 0.4s ease;
          }

          .service-image-card:hover::after {
            border-color: rgba(201, 169, 110, 0.35);
          }

          @media (max-width: 767px) {
            .service-image-card {
              min-height: 430px !important;
            }

            .service-image-card > div:last-child {
              padding: 24px !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .service-card-image {
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Services;
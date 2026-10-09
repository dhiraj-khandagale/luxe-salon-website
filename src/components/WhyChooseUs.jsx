
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WhyPhoto from "../assets/whyus.png";

const MotionLink = motion(Link);

const features = [
  {
    number: "01",
    icon: "bi-person-check",
    title: "Expert Stylists",
    description:
      "Our experienced beauty professionals understand your style and create looks that feel uniquely yours.",
  },
  {
    number: "02",
    icon: "bi-gem",
    title: "Premium Products",
    description:
      "We carefully select professional-quality products that prioritize beautiful results and healthy hair and skin.",
  },
  {
    number: "03",
    icon: "bi-heart",
    title: "Personalized Care",
    description:
      "Every appointment is tailored to your preferences, lifestyle and individual beauty goals.",
  },
  {
    number: "04",
    icon: "bi-stars",
    title: "Luxury Experience",
    description:
      "From the moment you arrive, enjoy a calm, elegant environment designed for complete relaxation.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      style={{
        backgroundColor: "#F5EFE6",
        color: "#0B0B0B",
        overflow: "hidden",
      }}
    >
      <div className="container py-5">
        <div
          className="row align-items-center"
          style={{
            minHeight: "750px",
            paddingTop: "70px",
            paddingBottom: "70px",
          }}
        >
          {/* LEFT IMAGE */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="position-relative why-image-wrapper"
              style={{
                maxWidth: "540px",
                margin: "0 auto",
              }}
            >
              {/* Gold Decorative Frame */}
              <div
                className="position-absolute why-gold-frame"
                style={{
                  top: "20px",
                  left: "20px",
                  width: "100%",
                  height: "100%",
                  border: "1px solid #C9A96E",
                  zIndex: 0,
                }}
              />

              {/* Image */}
              <div
                className="position-relative overflow-hidden why-main-image"
                style={{
                  height: "600px",
                  zIndex: 1,
                  backgroundColor: "#111111",
                }}
              >
                <img
                  src={WhyPhoto}
                  alt="Luxe Salon professional hair styling experience"
                  className="w-100 h-100"
                  loading="lazy"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.8s ease",
                  }}
                />

                {/* Image Overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(11,11,11,0.05), rgba(11,11,11,0.35))",
                  }}
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="position-absolute d-flex flex-column align-items-center justify-content-center why-experience-badge"
                style={{
                  width: "135px",
                  height: "135px",
                  right: "-25px",
                  bottom: "-25px",
                  backgroundColor: "#0B0B0B",
                  border: "1px solid #C9A96E",
                  color: "#F5EFE6",
                  zIndex: 2,
                  borderRadius: "50%",
                  textAlign: "center",
                }}
              >
                <span
                  className="font-display"
                  style={{
                    color: "#C9A96E",
                    fontSize: "2rem",
                    lineHeight: "1",
                  }}
                >
                  LUXE
                </span>

                <span
                  className="font-ui"
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "2px",
                    marginTop: "7px",
                  }}
                >
                  BEAUTY EXPERIENCE
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="why-content"
              style={{
                paddingLeft: "clamp(0px, 4vw, 65px)",
              }}
            >
              {/* Small Heading */}
              <p
                className="font-ui"
                style={{
                  color: "#A98952",
                  fontSize: "0.72rem",
                  fontWeight: "600",
                  letterSpacing: "4px",
                  marginBottom: "18px",
                }}
              >
                WHY CHOOSE LUXE
              </p>

              {/* Main Heading */}
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
                  lineHeight: "1.05",
                  fontWeight: "500",
                  marginBottom: "25px",
                }}
              >
                More Than a Salon.
                <br />
                <span style={{ color: "#A98952" }}>
                  It's Your Ritual.
                </span>
              </h2>

              {/* Description */}
              <p
                className="font-body"
                style={{
                  color: "rgba(11,11,11,0.65)",
                  maxWidth: "570px",
                  fontSize: "0.92rem",
                  lineHeight: "1.9",
                  marginBottom: "38px",
                }}
              >
                At Luxe, beauty is not simply about how you look.
                It is about how you feel when you leave. Every detail
                of your experience is thoughtfully designed to help
                you feel confident, relaxed and completely yourself.
              </p>

              {/* FEATURES */}
              <div>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.number}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.1,
                    }}
                    className="d-flex align-items-start"
                    style={{
                      borderTop: "1px solid rgba(11,11,11,0.12)",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                    }}
                  >
                    {/* Number */}
                    <div
                      className="font-ui"
                      style={{
                        color: "#C9A96E",
                        fontSize: "0.65rem",
                        letterSpacing: "2px",
                        width: "45px",
                        flexShrink: 0,
                        paddingTop: "5px",
                      }}
                    >
                      {feature.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "45px",
                        height: "45px",
                        border: "1px solid #C9A96E",
                        color: "#A98952",
                        flexShrink: 0,
                      }}
                    >
                      <i
                        className={`bi ${feature.icon}`}
                        style={{ fontSize: "1.1rem" }}
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3
                        className="font-display"
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "500",
                          marginBottom: "5px",
                        }}
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="font-body mb-0"
                        style={{
                          color: "rgba(11,11,11,0.58)",
                          fontSize: "0.78rem",
                          lineHeight: "1.7",
                          maxWidth: "430px",
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* BOOKING CTA */}
              <MotionLink
                to="/booking"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -3 }}
                className="font-ui d-inline-flex align-items-center gap-2 text-decoration-none"
                style={{
                  marginTop: "30px",
                  backgroundColor: "#0B0B0B",
                  color: "#F5EFE6",
                  padding: "14px 24px",
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  letterSpacing: "1px",
                }}
              >
                DISCOVER THE LUXE EXPERIENCE
                <i className="bi bi-arrow-up-right" />
              </MotionLink>
            </motion.div>
          </div>
        </div>
      </div>

      {/* RESPONSIVE STYLES */}
      <style>
        {`
          .why-image-wrapper {
            width: calc(100% - 20px);
          }

          .why-main-image img:hover {
            transform: scale(1.04);
          }

          @media (max-width: 991px) {
            .why-content {
              padding-left: 0 !important;
            }

            .why-image-wrapper {
              margin-right: 15px !important;
            }
          }

          @media (max-width: 767px) {
            #why-us .why-image-wrapper {
              width: calc(100% - 12px);
              margin-left: 0 !important;
              margin-right: 12px !important;
            }

            #why-us .why-gold-frame {
              top: 12px !important;
              left: 12px !important;
            }

            #why-us .why-main-image {
              height: 470px !important;
            }

            #why-us .why-experience-badge {
              width: 110px !important;
              height: 110px !important;
              right: -5px !important;
              bottom: -15px !important;
            }

            #why-us .why-experience-badge span:first-child {
              font-size: 1.5rem !important;
            }

            #why-us .why-experience-badge span:last-child {
              font-size: 0.45rem !important;
              letter-spacing: 1.5px !important;
            }
          }

          @media (max-width: 400px) {
            #why-us .why-main-image {
              height: 400px !important;
            }

            #why-us .why-content h2 {
              font-size: 2.35rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default WhyChooseUs;
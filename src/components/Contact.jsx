import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#F5EFE6",
        color: "#0B0B0B",
        overflow: "hidden",
      }}
    >
      <div className="container py-5">
        <div
          className="row"
          style={{
            paddingTop: "70px",
            paddingBottom: "70px",
          }}
        >
          {/* =====================================================
              LEFT — CONTACT INFORMATION
          ====================================================== */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
              }}
            >
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
                GET IN TOUCH
              </p>

              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2.7rem, 5vw, 4.8rem)",
                  lineHeight: "1.05",
                  fontWeight: "500",
                  marginBottom: "25px",
                }}
              >
                Come Visit
                <br />
                <span style={{ color: "#A98952" }}>
                  Luxe.
                </span>
              </h2>

              <p
                className="font-body"
                style={{
                  color: "rgba(11,11,11,0.62)",
                  maxWidth: "450px",
                  fontSize: "0.9rem",
                  lineHeight: "1.9",
                  marginBottom: "40px",
                }}
              >
                Step into a space where beauty meets comfort,
                craftsmanship and personalized care. We'd love
                to welcome you to Luxe Salon.
              </p>

              {/* Contact Details */}
              <div>
                {/* Address */}
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt" />
                  </div>

                  <div>
                    <p className="contact-label">
                      VISIT US
                    </p>

                    <p className="contact-value">
                      123 Luxury Avenue,
                      <br />
                      Pune, Maharashtra 411001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="bi bi-telephone" />
                  </div>

                  <div>
                    <p className="contact-label">
                      CALL US
                    </p>

                    <a
                      href="tel:+919999999999"
                      className="contact-link"
                    >
                      +91 99999 99999
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="bi bi-envelope" />
                  </div>

                  <div>
                    <p className="contact-label">
                      EMAIL US
                    </p>

                    <a
                      href="mailto:hello@luxesalon.com"
                      className="contact-link"
                    >
                      hello@luxesalon.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <i className="bi bi-clock" />
                  </div>

                  <div>
                    <p className="contact-label">
                      OPENING HOURS
                    </p>

                    <p className="contact-value">
                      Monday – Sunday
                      <br />
                      10:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div
                className="d-flex align-items-center gap-2 mt-4"
              >
                <a
                  href="#"
                  aria-label="Instagram"
                  className="social-icon"
                >
                  <i className="bi bi-instagram" />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="social-icon"
                >
                  <i className="bi bi-facebook" />
                </a>

                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="social-icon"
                >
                  <i className="bi bi-whatsapp" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT — MAP / LOCATION
          ====================================================== */}
          <div className="col-lg-7">
            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <div
                className="contact-map-wrapper"
              >
                {/* Map */}
                <iframe
                  title="Luxe Salon Location"
                  src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="contact-map"
                />

                {/* Map Overlay Card */}
                <div className="map-card">
                  <div
                    className="d-flex align-items-center gap-3"
                  >
                    <div className="map-card-icon">
                      <i className="bi bi-geo-alt-fill" />
                    </div>

                    <div>
                      <p className="map-card-title">
                        LUXE SALON
                      </p>

                      <p className="map-card-text">
                        Pune, Maharashtra
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Pune,Maharashtra,India"
                    target="_blank"
                    rel="noreferrer"
                    className="map-direction-link"
                  >
                    GET DIRECTIONS
                    <i className="bi bi-arrow-up-right" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =======================================================
          CSS
      ======================================================== */}
      <style>
        {`
          .contact-info-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            margin-bottom: 24px;
          }

          .contact-icon {
            width: 45px;
            height: 45px;
            flex-shrink: 0;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid #C9A96E;
            color: #A98952;

            font-size: 1rem;
          }

          .contact-label {
            color: #A98952;
            font-family: "Montserrat", sans-serif;
            font-size: 0.61rem;
            font-weight: 600;
            letter-spacing: 2px;
            margin: 0 0 5px;
          }

          .contact-value,
          .contact-link {
            color: rgba(11,11,11,0.72);
            font-family: "Manrope", sans-serif;
            font-size: 0.84rem;
            line-height: 1.7;
            margin: 0;
            text-decoration: none;
          }

          .contact-link {
            transition: color 0.3s ease;
          }

          .contact-link:hover {
            color: #A98952;
          }

          .social-icon {
            width: 40px;
            height: 40px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid rgba(11,11,11,0.2);
            color: #0B0B0B;

            text-decoration: none;

            transition:
              all 0.3s ease;
          }

          .social-icon:hover {
            background-color: #0B0B0B;
            border-color: #0B0B0B;
            color: #C9A96E;
            transform: translateY(-3px);
          }

          .contact-map-wrapper {
            position: relative;
            min-height: 570px;
            overflow: hidden;
            background-color: #111111;
            border: 1px solid rgba(201,169,110,0.35);
          }

          .contact-map {
            width: 100%;
            height: 570px;
            display: block;
            border: 0;
            filter: grayscale(100%) contrast(1.05);
          }

          .map-card {
            position: absolute;
            left: 25px;
            bottom: 25px;

            width: min(330px, calc(100% - 50px));

            padding: 22px;

            background-color: rgba(11,11,11,0.94);
            color: #F5EFE6;

            border: 1px solid rgba(201,169,110,0.45);

            backdrop-filter: blur(12px);
          }

          .map-card-icon {
            width: 42px;
            height: 42px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid #C9A96E;
            color: #C9A96E;

            flex-shrink: 0;
          }

          .map-card-title {
            color: #F5EFE6;
            font-family: "Montserrat", sans-serif;
            font-size: 0.67rem;
            font-weight: 600;
            letter-spacing: 2px;
            margin: 0 0 5px;
          }

          .map-card-text {
            color: rgba(245,239,230,0.6);
            font-family: "Manrope", sans-serif;
            font-size: 0.75rem;
            margin: 0;
          }

          .map-direction-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            margin-top: 18px;

            color: #C9A96E;
            font-family: "Montserrat", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 1.5px;

            text-decoration: none;

            transition: color 0.3s ease;
          }

          .map-direction-link:hover {
            color: #F5EFE6;
          }

          @media (max-width: 991px) {
            .contact-map-wrapper {
              min-height: 500px;
            }

            .contact-map {
              height: 500px;
            }
          }

          @media (max-width: 575px) {
            .contact-map-wrapper {
              min-height: 450px;
            }

            .contact-map {
              height: 450px;
            }

            .map-card {
              left: 15px;
              bottom: 15px;
              width: calc(100% - 30px);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .social-icon,
            .contact-link,
            .map-direction-link {
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
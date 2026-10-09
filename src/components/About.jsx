import { motion } from "framer-motion";
import AboutImage from "../assets/Glossy Salon Waves and Warm Light.png";
const About = () => {
  return (
    <section
      id="about"
      className="py-5"
      style={{
        backgroundColor: "#F5EFE6",
        overflow: "hidden",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center g-5">

          {/* Left Column - Image */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="position-relative"
            >
              <div
                style={{
                  height: "600px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={AboutImage}
                  alt="Professional Salon Services"
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Gold Decorative Border */}
              <div
                className="position-absolute"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid #C9A96E",
                  top: "18px",
                  left: "18px",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >

              {/* Small Heading */}
              <p
                className="font-ui mb-3"
                style={{
                  color: "#C9A96E",
                  letterSpacing: "4px",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                }}
              >
                ABOUT LUXE
              </p>

              {/* Main Heading */}
              <h2
                className="font-display"
                style={{
                  color: "#0B0B0B",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  lineHeight: "1.05",
                  fontWeight: "500",
                  marginBottom: "25px",
                }}
              >
                Where Beauty
                <br />
                Meets{" "}
                <span style={{ color: "#C9A96E" }}>
                  Confidence
                </span>
              </h2>

              {/* Divider */}
              <div
                style={{
                  width: "60px",
                  height: "2px",
                  backgroundColor: "#C9A96E",
                  marginBottom: "25px",
                }}
              />

              {/* Description */}
              <p
                className="font-body"
                style={{
                  color: "rgba(11,11,11,0.75)",
                  fontSize: "1rem",
                  lineHeight: "1.9",
                  maxWidth: "520px",
                }}
              >
                At Luxe Salon, we believe beauty is more than just
                appearance. It is about feeling confident, refreshed,
                and truly yourself.
              </p>

              <p
                className="font-body mt-3"
                style={{
                  color: "rgba(11,11,11,0.75)",
                  fontSize: "0.95rem",
                  lineHeight: "1.9",
                  maxWidth: "520px",
                }}
              >
                Our experienced stylists combine creativity, expertise,
                and premium products to create a personalized salon
                experience for every client.
              </p>

              {/* Features */}
              <div className="row mt-4 g-3">

                {/* Expert Stylists */}
                <div className="col-sm-4">
                  <div>
                    <i
                      className="bi bi-scissors"
                      style={{
                        color: "#C9A96E",
                        fontSize: "1.5rem",
                      }}
                    ></i>

                    <h6
                      className="font-ui mt-3 mb-2"
                      style={{
                        color: "#0B0B0B",
                        fontSize: "0.8rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Expert Stylists
                    </h6>

                    <p
                      className="font-body mb-0"
                      style={{
                        color: "rgba(11,11,11,0.6)",
                        fontSize: "0.8rem",
                        lineHeight: "1.6",
                      }}
                    >
                      Skilled professionals
                      <br />
                      who understand your style.
                    </p>
                  </div>
                </div>

                {/* Premium Products */}
                <div className="col-sm-4">
                  <div>
                    <i
                      className="bi bi-gem"
                      style={{
                        color: "#C9A96E",
                        fontSize: "1.5rem",
                      }}
                    ></i>

                    <h6
                      className="font-ui mt-3 mb-2"
                      style={{
                        color: "#0B0B0B",
                        fontSize: "0.8rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Premium Products
                    </h6>

                    <p
                      className="font-body mb-0"
                      style={{
                        color: "rgba(11,11,11,0.6)",
                        fontSize: "0.8rem",
                        lineHeight: "1.6",
                      }}
                    >
                      Quality products
                      <br />
                      for beautiful results.
                    </p>
                  </div>
                </div>

                {/* Personal Care */}
                <div className="col-sm-4">
                  <div>
                    <i
                      className="bi bi-heart"
                      style={{
                        color: "#C9A96E",
                        fontSize: "1.5rem",
                      }}
                    ></i>

                    <h6
                      className="font-ui mt-3 mb-2"
                      style={{
                        color: "#0B0B0B",
                        fontSize: "0.8rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Personal Care
                    </h6>

                    <p
                      className="font-body mb-0"
                      style={{
                        color: "rgba(11,11,11,0.6)",
                        fontSize: "0.8rem",
                        lineHeight: "1.6",
                      }}
                    >
                      Treatments designed
                      <br />
                      around you.
                    </p>
                  </div>
                </div>

              </div>

              {/* Button */}
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn font-ui rounded-0 mt-5 px-4 py-3"
                style={{
                  backgroundColor: "#0B0B0B",
                  color: "#F5EFE6",
                  border: "1px solid #0B0B0B",
                  fontSize: "0.8rem",
                  letterSpacing: "0.8px",
                }}
              >
                Discover Our Services
                <i className="bi bi-arrow-up-right ms-2"></i>
              </motion.a>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
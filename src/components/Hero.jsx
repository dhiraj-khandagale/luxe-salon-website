import { motion } from "framer-motion";
import HomePage from "../assets/HomePage.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section
      id="home"
      className="position-relative min-vh-100 d-flex align-items-center"
      style={{
        backgroundColor: "#0B0B0B",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div
        className={`position-absolute top-0 end-0 w-100 h-100`}
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(11,11,11,0.95) 0%, rgba(11,11,11,0.65) 45%, rgba(11,11,11,0.2) 100%), url(${HomePage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row">
          <div className="col-lg-7">

            {/* Small Heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-ui mb-3"
              style={{
                color: "#C9A96E",
                letterSpacing: "4px",
                fontSize: "0.8rem",
                textTransform: "uppercase",
              }}
            >
              Welcome to Luxe Salon
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display"
              style={{
                color: "#F5EFE6",
                fontSize: "clamp(3.2rem, 7vw, 6.5rem)",
                lineHeight: "0.95",
                fontWeight: "500",
              }}
            >
              Beauty is an
              <br />
              <span style={{ color: "#C9A96E" }}>
                experience.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-body mt-4 mb-4"
              style={{
                color: "rgba(245,239,230,0.75)",
                maxWidth: "520px",
                lineHeight: "1.8",
                fontSize: "1rem",
              }}
            >
              Discover personalized beauty treatments, expert styling,
              and a relaxing salon experience designed just for you.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="d-flex gap-3 flex-wrap mt-4"
            >
              {/* Primary Button */}
              <a
                href="/booking"
                className="btn font-ui rounded-0 px-4 py-3"
                style={{
                  backgroundColor: "#C9A96E",
                  color: "#0B0B0B",
                  border: "1px solid #C9A96E",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                }}
              >
                Book Appointment
                <i className="bi bi-arrow-up-right ms-2"></i>
              </a>

              {/* Secondary Button */}
              <a
                href="/services"
                className="btn font-ui rounded-0 px-4 py-3"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(245,239,230,0.5)",
                  color: "#F5EFE6",
                  fontWeight: "500",
                }}
              >
                Explore Services
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        style={{ color: "#C9A96E" }}
      >
        <div className="text-center">
          <small
            className="font-ui"
            style={{
              letterSpacing: "3px",
              fontSize: "0.6rem",
            }}
          >
            SCROLL
          </small>

          <div className="mt-2">
            <i className="bi bi-arrow-down"></i>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
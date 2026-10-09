import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Hair Cut & Styling",
  "Hair Color",
  "Hair Spa & Treatment",
  "Makeup",
  "Manicure & Pedicure",
  "Facial & Skin Care",
];

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    console.log("Appointment Request:", formData);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="booking"
      style={{
        backgroundColor: "#0B0B0B",
        color: "#F5EFE6",
        overflow: "hidden",
      }}
    >
      <div className="container py-5">
        <div
          className="row align-items-center"
          style={{
            minHeight: "760px",
            paddingTop: "70px",
            paddingBottom: "70px",
          }}
        >
          {/* =====================================================
              LEFT CONTENT
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
                ease: "easeOut",
              }}
            >
              {/* Small Heading */}
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
                BOOK YOUR EXPERIENCE
              </p>

              {/* Main Heading */}
              <h2
                className="font-display"
                style={{
                  color: "#F5EFE6",
                  fontSize: "clamp(2.7rem, 5vw, 4.8rem)",
                  lineHeight: "1.05",
                  fontWeight: "500",
                  marginBottom: "25px",
                }}
              >
                Your Beauty.
                <br />
                <span style={{ color: "#C9A96E" }}>
                  Your Time.
                </span>
              </h2>

              {/* Description */}
              <p
                className="font-body"
                style={{
                  color: "rgba(245,239,230,0.62)",
                  maxWidth: "470px",
                  fontSize: "0.9rem",
                  lineHeight: "1.9",
                  marginBottom: "40px",
                }}
              >
                Take a moment for yourself. Choose your preferred
                service, date and time, and let our beauty experts
                take care of the rest.
              </p>

              {/* =================================================
                  CONTACT DETAILS
              ================================================== */}
              <div>
                <div
                  className="d-flex align-items-start mb-4"
                >
                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "45px",
                      height: "45px",
                      border: "1px solid #C9A96E",
                      color: "#C9A96E",
                      flexShrink: 0,
                    }}
                  >
                    <i className="bi bi-telephone" />
                  </div>

                  <div>
                    <p
                      className="font-ui"
                      style={{
                        color: "#C9A96E",
                        fontSize: "0.62rem",
                        letterSpacing: "2px",
                        marginBottom: "5px",
                      }}
                    >
                      CALL US
                    </p>

                    <a
                      href="tel:+919999999999"
                      className="font-body text-decoration-none"
                      style={{
                        color: "#F5EFE6",
                        fontSize: "0.9rem",
                      }}
                    >
                      +91 99999 99999
                    </a>
                  </div>
                </div>

                <div
                  className="d-flex align-items-start mb-4"
                >
                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "45px",
                      height: "45px",
                      border: "1px solid #C9A96E",
                      color: "#C9A96E",
                      flexShrink: 0,
                    }}
                  >
                    <i className="bi bi-envelope" />
                  </div>

                  <div>
                    <p
                      className="font-ui"
                      style={{
                        color: "#C9A96E",
                        fontSize: "0.62rem",
                        letterSpacing: "2px",
                        marginBottom: "5px",
                      }}
                    >
                      EMAIL
                    </p>

                    <a
                      href="mailto:hello@luxesalon.com"
                      className="font-body text-decoration-none"
                      style={{
                        color: "#F5EFE6",
                        fontSize: "0.9rem",
                      }}
                    >
                      hello@luxesalon.com
                    </a>
                  </div>
                </div>

                <div
                  className="d-flex align-items-start"
                >
                  <div
                    className="d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "45px",
                      height: "45px",
                      border: "1px solid #C9A96E",
                      color: "#C9A96E",
                      flexShrink: 0,
                    }}
                  >
                    <i className="bi bi-clock" />
                  </div>

                  <div>
                    <p
                      className="font-ui"
                      style={{
                        color: "#C9A96E",
                        fontSize: "0.62rem",
                        letterSpacing: "2px",
                        marginBottom: "5px",
                      }}
                    >
                      OPENING HOURS
                    </p>

                    <p
                      className="font-body mb-0"
                      style={{
                        color: "#F5EFE6",
                        fontSize: "0.9rem",
                        lineHeight: "1.7",
                      }}
                    >
                      Monday – Sunday
                      <br />
                      10:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              BOOKING FORM
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
                ease: "easeOut",
              }}
            >
              <div
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid rgba(201,169,110,0.25)",
                  padding: "clamp(25px, 4vw, 45px)",
                }}
              >
                {/* Form Header */}
                <div className="mb-4">
                  <p
                    className="font-ui"
                    style={{
                      color: "#C9A96E",
                      fontSize: "0.65rem",
                      letterSpacing: "2.5px",
                      marginBottom: "8px",
                    }}
                  >
                    APPOINTMENT REQUEST
                  </p>

                  <h3
                    className="font-display"
                    style={{
                      color: "#F5EFE6",
                      fontSize: "2rem",
                      fontWeight: "500",
                      marginBottom: "0",
                    }}
                  >
                    Reserve Your Moment
                  </h3>
                </div>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mb-4"
                    style={{
                      border: "1px solid rgba(201,169,110,0.5)",
                      backgroundColor: "rgba(201,169,110,0.08)",
                      padding: "15px",
                    }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <i
                        className="bi bi-check-circle"
                        style={{
                          color: "#C9A96E",
                        }}
                      />

                      <span
                        className="font-body"
                        style={{
                          color: "#F5EFE6",
                          fontSize: "0.82rem",
                        }}
                      >
                        Your appointment request has been received.
                      </span>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">

                    {/* Name */}
                    <div className="col-md-6">
                      <label
                        htmlFor="booking-name"
                        className="font-ui"
                      >
                        Your Name
                      </label>

                      <input
                        id="booking-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        autoComplete="name"
                        className="booking-input"
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <label
                        htmlFor="booking-phone"
                        className="font-ui"
                      >
                        Phone Number
                      </label>

                      <input
                        id="booking-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone"
                        required
                        autoComplete="tel"
                        className="booking-input"
                      />
                    </div>

                    {/* Email */}
                    <div className="col-12">
                      <label
                        htmlFor="booking-email"
                        className="font-ui"
                      >
                        Email Address
                      </label>

                      <input
                        id="booking-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        autoComplete="email"
                        className="booking-input"
                      />
                    </div>

                    {/* Service */}
                    <div className="col-md-6">
                      <label
                        htmlFor="booking-service"
                        className="font-ui"
                      >
                        Select Service
                      </label>

                      <select
                        id="booking-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="booking-input booking-select"
                      >
                        <option value="">
                          Choose a service
                        </option>

                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date */}
                    <div className="col-md-6">
                      <label
                        htmlFor="booking-date"
                        className="font-ui"
                      >
                        Preferred Date
                      </label>

                      <input
                        id="booking-date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={today}
                        required
                        className="booking-input"
                      />
                    </div>

                    {/* Time */}
                    <div className="col-md-6">
                      <label
                        htmlFor="booking-time"
                        className="font-ui"
                      >
                        Preferred Time
                      </label>

                      <select
                        id="booking-time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="booking-input booking-select"
                      >
                        <option value="">
                          Choose a time
                        </option>

                        {timeSlots.map((time) => (
                          <option
                            key={time}
                            value={time}
                          >
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="col-md-6">
                      <label
                        htmlFor="booking-message"
                        className="font-ui"
                      >
                        Message
                      </label>

                      <textarea
                        id="booking-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Anything we should know?"
                        rows="1"
                        className="booking-input booking-textarea"
                      />
                    </div>

                    {/* Submit */}
                    <div className="col-12 pt-2">
                      <button
                        type="submit"
                        className="booking-button font-ui border-0 d-flex align-items-center justify-content-center gap-2 w-100"
                      >
                        REQUEST APPOINTMENT
                        <i className="bi bi-arrow-up-right" />
                      </button>
                    </div>
                  </div>
                </form>

                {/* Note */}
                <p
                  className="font-body text-center"
                  style={{
                    color: "rgba(245,239,230,0.4)",
                    fontSize: "0.68rem",
                    lineHeight: "1.6",
                    marginTop: "18px",
                    marginBottom: "0",
                  }}
                >
                  This is a booking request. Our team will contact
                  you to confirm your appointment.
                </p>
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
          .booking-input {
            width: 100%;
            min-height: 48px;
            padding: 12px 14px;
            margin-top: 8px;

            background-color: #0B0B0B;
            color: #F5EFE6;

            border: 1px solid rgba(201,169,110,0.2);
            border-radius: 0;

            outline: none;

            font-family: "Manrope", sans-serif;
            font-size: 0.78rem;

            transition:
              border-color 0.3s ease,
              box-shadow 0.3s ease;
          }

          .booking-input::placeholder {
            color: rgba(245,239,230,0.32);
          }

          .booking-input:focus {
            border-color: #C9A96E;
            box-shadow: 0 0 0 2px rgba(201,169,110,0.08);
          }

          .booking-input option {
            background-color: #0B0B0B;
            color: #F5EFE6;
          }

          label.font-ui {
            display: block;
            color: rgba(245,239,230,0.7);
            font-size: 0.62rem;
            letter-spacing: 1.5px;
            font-weight: 500;
          }

          .booking-textarea {
            resize: vertical;
            min-height: 48px;
          }

          .booking-button {
            min-height: 52px;
            padding: 14px 24px;

            background-color: #C9A96E;
            color: #0B0B0B;

            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 1.2px;

            cursor: pointer;

            transition:
              background-color 0.3s ease,
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .booking-button:hover {
            background-color: #D8BA82;
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(201,169,110,0.18);
          }

          .booking-button:active {
            transform: translateY(0);
          }

          .booking-button:focus-visible {
            outline: 2px solid #F5EFE6;
            outline-offset: 3px;
          }

          @media (max-width: 575px) {
            #booking .container {
              padding-left: 18px;
              padding-right: 18px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .booking-button {
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Booking;
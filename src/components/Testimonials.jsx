import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ananya Sharma",
    service: "Hair Cut & Styling",
    review:
      "Absolutely loved my experience at Luxe. The stylist understood exactly what I wanted and the final look was even better than I imagined.",
  },
  {
    name: "Priya Mehta",
    service: "Hair Color",
    review:
      "The attention to detail was amazing. My hair color looks beautiful and natural, and the entire experience felt incredibly relaxing.",
  },
  {
    name: "Riya Deshmukh",
    service: "Makeup",
    review:
      "From the ambience to the service, everything felt premium. My makeup was elegant, comfortable and perfect for my special occasion.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: "#F5EFE6",
        color: "#0B0B0B",
        overflow: "hidden",
      }}
    >
      <div className="container py-5">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-center"
          style={{
            paddingTop: "70px",
            paddingBottom: "55px",
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
            CLIENT STORIES
          </p>

          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              lineHeight: "1.05",
              fontWeight: "500",
              marginBottom: "22px",
            }}
          >
            Loved By Our
            <br />
            <span style={{ color: "#A98952" }}>
              Beautiful Clients.
            </span>
          </h2>

          <p
            className="font-body mx-auto"
            style={{
              color: "rgba(11,11,11,0.6)",
              maxWidth: "590px",
              fontSize: "0.9rem",
              lineHeight: "1.8",
              marginBottom: "0",
            }}
          >
            Every visit is more than a beauty appointment.
            It's an experience our clients love coming back to.
          </p>
        </motion.div>

        {/* =====================================================
            TESTIMONIAL CARDS
        ====================================================== */}
        <div className="row g-4 pb-5">
          {testimonials.map((testimonial, index) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={testimonial.name}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                }}
                className="h-100"
              >
                <article
                  className="testimonial-card position-relative h-100"
                  style={{
                    backgroundColor: "#0B0B0B",
                    color: "#F5EFE6",
                    minHeight: "390px",
                    padding: "38px",
                    border:
                      "1px solid rgba(201,169,110,0.2)",
                    transition: "all 0.4s ease",
                  }}
                >
                  {/* Quote Mark */}
                  <div
                    className="font-display"
                    style={{
                      color: "#C9A96E",
                      fontSize: "4.5rem",
                      lineHeight: "0.7",
                      height: "50px",
                      opacity: "0.8",
                    }}
                  >
                    “
                  </div>

                  {/* Stars */}
                  <div
                    className="d-flex gap-1 mb-4"
                    style={{
                      color: "#C9A96E",
                    }}
                    aria-label="5 out of 5 stars"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className="bi bi-star-fill"
                        style={{
                          fontSize: "0.72rem",
                        }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p
                    className="font-body"
                    style={{
                      color: "rgba(245,239,230,0.75)",
                      fontSize: "0.88rem",
                      lineHeight: "1.9",
                      marginBottom: "35px",
                    }}
                  >
                    {testimonial.review}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      width: "45px",
                      height: "1px",
                      backgroundColor: "#C9A96E",
                      marginBottom: "22px",
                    }}
                  />

                  {/* Client */}
                  <div>
                    <h3
                      className="font-display"
                      style={{
                        color: "#F5EFE6",
                        fontSize: "1.25rem",
                        fontWeight: "500",
                        marginBottom: "6px",
                      }}
                    >
                      {testimonial.name}
                    </h3>

                    <p
                      className="font-ui"
                      style={{
                        color: "#C9A96E",
                        fontSize: "0.62rem",
                        letterSpacing: "1.8px",
                        marginBottom: "0",
                      }}
                    >
                      {testimonial.service}
                    </p>
                  </div>

                  {/* Number */}
                  <span
                    className="font-ui position-absolute"
                    style={{
                      right: "28px",
                      bottom: "25px",
                      color: "rgba(201,169,110,0.35)",
                      fontSize: "0.62rem",
                      letterSpacing: "2px",
                    }}
                  >
                    0{index + 1}
                  </span>
                </article>
              </motion.div>
            </div>
          ))}
        </div>

        {/* =====================================================
            TRUST STATEMENT
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
          style={{
            paddingTop: "25px",
            paddingBottom: "70px",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center gap-3 flex-wrap"
          >
            <span
              style={{
                color: "#C9A96E",
                fontSize: "1rem",
              }}
            >
              ★★★★★
            </span>

            <span
              className="font-ui"
              style={{
                fontSize: "0.68rem",
                letterSpacing: "1.5px",
                fontWeight: "600",
              }}
            >
              A BEAUTY EXPERIENCE WORTH RETURNING TO
            </span>
          </div>
        </motion.div>
      </div>

      {/* =======================================================
          CSS
      ======================================================== */}
      <style>
        {`
          .testimonial-card:hover {
            border-color: #C9A96E !important;
            box-shadow: 0 25px 55px rgba(0, 0, 0, 0.2);
          }

          .testimonial-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #C9A96E;
            transition: width 0.5s ease;
          }

          .testimonial-card:hover::before {
            width: 100%;
          }

          @media (max-width: 575px) {
            .testimonial-card {
              padding: 30px !important;
              min-height: 360px !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .testimonial-card::before {
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
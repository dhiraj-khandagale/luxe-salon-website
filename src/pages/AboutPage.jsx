import { motion } from "framer-motion";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";

const AboutPage = () => {
  return (
    <main style={{ backgroundColor: "#F5EFE6", color: "#0B0B0B" }}>
      {/* Page Hero */}
      <section
        style={{
          minHeight: "360px",
          backgroundColor: "#0B0B0B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 20px 70px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p
            style={{
              color: "#C9A96E",
              letterSpacing: "4px",
              fontSize: "0.7rem",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            OUR STORY
          </p>

          <h1
            style={{
              color: "#F5EFE6",
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              marginBottom: "18px",
            }}
          >
            Beauty Begins With You.
          </h1>

          <p
            style={{
              color: "rgba(245,239,230,0.7)",
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: 1.9,
            }}
          >
            Discover the philosophy, care and creativity
            behind the Luxe Salon & Spa experience.
          </p>
        </motion.div>
      </section>

      {/* Existing About component */}
      <About />

      {/* Brand Philosophy */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row g-4">
            {[
              {
                number: "01",
                title: "Our Mission",
                description:
                  "To create a welcoming beauty destination where every client receives thoughtful care, professional attention and a personalised salon experience.",
              },
              {
                number: "02",
                title: "Our Vision",
                description:
                  "To build a trusted salon experience known for creativity, consistent service quality and helping every client feel confident in their own style.",
              },
              {
                number: "03",
                title: "Our Philosophy",
                description:
                  "We believe beauty is personal. We listen to your preferences, understand your goals and aim to deliver a look that feels right for you.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.number}
                className="col-md-4"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div
                  style={{
                    height: "100%",
                    padding: "32px",
                    border: "1px solid rgba(201,169,110,0.5)",
                    backgroundColor: "#FBF8F3",
                  }}
                >
                  <span
                    style={{
                      color: "#B08A4A",
                      fontFamily: "Playfair Display, serif",
                      fontSize: "2rem",
                    }}
                  >
                    {item.number}
                  </span>

                  <h2
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.7rem",
                      margin: "18px 0 14px",
                    }}
                  >
                    {item.title}
                  </h2>

                  <p
                    style={{
                      color: "#716B62",
                      fontSize: "0.9rem",
                      lineHeight: 1.9,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Why Choose Us component */}
      <WhyChooseUs />

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#0B0B0B",
          textAlign: "center",
          padding: "75px 20px",
        }}
      >
        <div className="container">
          <p
            style={{
              color: "#C9A96E",
              fontSize: "0.7rem",
              letterSpacing: "3px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            YOUR LUXE EXPERIENCE AWAITS
          </p>

          <h2
            style={{
              color: "#F5EFE6",
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              margin: "18px 0 28px",
            }}
          >
            Let Us Celebrate Your Beauty.
          </h2>

          <a
            href="/booking"
            style={{
              display: "inline-block",
              padding: "15px 25px",
              backgroundColor: "#C9A96E",
              color: "#0B0B0B",
              textDecoration: "none",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            BOOK AN APPOINTMENT
            <i className="bi bi-arrow-up-right ms-2" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

    subtitle: "A style that feels like you.",

    description:

      "Refresh your look with a haircut and styling experience tailored to your preferences, hair texture and personal style.",

    benefits: [

      "Personalised style consultation",

      "Haircut suited to your face shape",

      "Professional blow-dry and styling",

      "Finishing tips for everyday care",

    ],

    duration: "30–60 minutes",

    image: hairCutImage,

  },

  {

    number: "02",

    icon: "bi-palette",

    title: "Hair Color",

    subtitle: "Express yourself in color.",

    description:

      "Explore a fresh look with colour services designed around your desired shade, style and hair goals. A consultation helps determine the appropriate service.",

    benefits: [

      "Colour and shade consultation",

      "Personalised colour options",

      "Professional application",

      "Aftercare recommendations",

    ],

    duration: "60–180 minutes",

    image: hairColorImage,

  },

  {

    number: "03",

    icon: "bi-droplet-half",

    title: "Hair Spa & Treatment",

    subtitle: "Give your hair some care.",

    description:

      "Enjoy a relaxing hair-care session with cleansing and conditioning selected according to your hair's needs and the treatment offered.",

    benefits: [

      "Hair and scalp care consultation",

      "Cleansing and conditioning",

      "Relaxing treatment experience",

      "At-home maintenance guidance",

    ],

    duration: "45–90 minutes",

    image: hairSpaImage,

  },

  {

    number: "04",

    icon: "bi-stars",

    title: "Makeup",

    subtitle: "Your moments, beautifully styled.",

    description:

      "Choose a makeup look for celebrations, parties or special occasions, with the finish and intensity tailored to your preferences.",

    benefits: [

      "Look and occasion consultation",

      "Complexion preparation",

      "Customised makeup application",

      "Finishing touches for your event",

    ],

    duration: "45–120 minutes",

    image: makeupImage,

  },

  {

    number: "05",

    icon: "bi-hand-index-thumb",

    title: "Manicure & Pedicure",

    subtitle: "Little details, lasting elegance.",

    description:

      "Make time for hand and foot care with a grooming experience that can include nail shaping, cuticle care and polish options.",

    benefits: [

      "Nail shaping and grooming",

      "Hand or foot care",

      "Polish options, where available",

      "A neat, refreshed finish",

    ],

    duration: "30–75 minutes",

    image: manicureImage,

  },

  {

    number: "06",

    icon: "bi-flower1",

    title: "Facial & Skin Care",

    subtitle: "A moment dedicated to your skin.",

    description:

      "Explore a facial experience selected according to your preferences and skin-care goals. A consultation helps identify suitable salon services.",

    benefits: [

      "Skin-care preference consultation",

      "Cleansing and facial care",

      "Treatment selected for your needs",

      "Post-treatment care guidance",

    ],

    duration: "45–90 minutes",

    image: facialImage,

  },

];

const ServicesPage = () => {

  return (

    <main className="services-page">

      {/* PAGE HERO */}

      <section className="services-page-hero">

        <motion.div

          className="container"

          initial={{ opacity: 0, y: 25 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.7 }}

        >

          <p className="services-page-eyebrow">

            THE LUXE COLLECTION

          </p>

          <h1>

            Beauty Services,

            <br />

            <span>Thoughtfully Crafted.</span>

          </h1>

          <p className="services-page-intro">

            Discover personalised hair, makeup, nail and

            skin-care experiences designed to make time

            for yourself feel special.

          </p>

          <a href="#all-services" className="services-page-button">

            EXPLORE OUR SERVICES

            <i className="bi bi-arrow-down ms-2" />

          </a>

        </motion.div>

      </section>

      {/* SERVICE INTRO */}

      <section className="services-page-introduction">

        <div className="container">

          <motion.div

            className="services-page-intro-content"

            initial={{ opacity: 0, y: 25 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.6 }}

          >

            <p className="services-page-eyebrow">

              YOUR STYLE, YOUR CHOICE

            </p>

            <h2>

              Find the Experience

              <br />

              <span>That Suits You.</span>

            </h2>

            <p>

              Every service starts with understanding what

              you are looking for. Explore our collection,

              discover the available options and choose an

              experience that suits your style and occasion.

            </p>

          </motion.div>

        </div>

      </section>

      {/* DETAILED SERVICE LIST */}

      <section id="all-services" className="services-detail-section">

        <div className="container">

          {services.map((service, index) => (

            <motion.article

              key={service.number}

              className={`service-detail-row ${

                index % 2 === 1 ? "service-detail-reverse" : ""

              }`}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true, amount: 0.15 }}

              transition={{ duration: 0.6 }}

            >

              <div className="service-detail-image-wrap">

                <img

                  src={service.image}

                  alt={service.title}

                  className="service-detail-image"

                  loading="lazy"

                />

                <span className="service-detail-number">

                  {service.number}

                </span>

              </div>

              <div className="service-detail-content">

                <div className="service-detail-icon">

                  <i className={`bi ${service.icon}`} />

                </div>

                <p className="services-page-eyebrow">

                  LUXE SIGNATURE SERVICE

                </p>

                <h2>{service.title}</h2>

                <h3>{service.subtitle}</h3>

                <p className="service-detail-description">

                  {service.description}

                </p>

                <p className="service-benefits-heading">

                  WHAT TO EXPECT

                </p>

                <ul className="service-benefits">

                  {service.benefits.map((benefit) => (

                    <li key={benefit}>

                      <i className="bi bi-check2" />

                      <span>{benefit}</span>

                    </li>

                  ))}

                </ul>

                <div className="service-detail-duration">

                  <i className="bi bi-clock" />

                  <span>

                    Estimated duration: {service.duration}

                  </span>

                </div>

                <Link
                  to={`/booking?service=${encodeURIComponent(service.title)}`}
                  className="service-detail-link"
                >

                  BOOK THIS SERVICE

                  <i className="bi bi-arrow-up-right" />

                </Link>

              </div>

            </motion.article>

          ))}

        </div>

      </section>

      {/* BOOKING CTA */}

      <section className="services-page-cta">

        <div className="container">

          <motion.div

            initial={{ opacity: 0, y: 25 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.6 }}

          >

            <p className="services-page-eyebrow">

              YOUR NEXT LUXE MOMENT

            </p>

            <h2>

              Your Beauty Journey

              <br />

              Starts Here.

            </h2>

            <p>

              Choose your preferred service and plan your

              visit with our appointment request form.

            </p>

            <Link to="/booking" className="services-page-button">

              BOOK AN APPOINTMENT

              <i className="bi bi-arrow-up-right ms-2" />

            </Link>

          </motion.div>

        </div>

      </section>

      {/* PAGE STYLES */}

      <style>{`

        .services-page {

          background: #F5EFE6;

          color: #0B0B0B;

        }

        .services-page-hero {

          padding: 155px 0 100px;

          background:

            radial-gradient(

              ellipse at 80% 20%,

              rgba(201,169,110,0.13),

              transparent 45%

            ),

            #0B0B0B;

          color: #F5EFE6;

          text-align: center;

        }

        .services-page-eyebrow {

          color: #A68145;

          font-family: "Montserrat", sans-serif;

          font-size: 0.68rem;

          font-weight: 600;

          letter-spacing: 3px;

          margin-bottom: 18px;

        }

        .services-page-hero .services-page-eyebrow,

        .services-page-cta .services-page-eyebrow {

          color: #C9A96E;

        }

        .services-page-hero h1,

        .services-page-cta h2 {

          font-family: "Playfair Display", serif;

          font-size: clamp(2.7rem, 6vw, 4.8rem);

          font-weight: 500;

          line-height: 1.12;

          margin-bottom: 22px;

        }

        .services-page-hero h1 span {

          color: #C9A96E;

          font-style: italic;

        }

        .services-page-intro {

          max-width: 620px;

          margin: 0 auto 30px;

          color: rgba(245,239,230,0.7);

          font-size: 0.9rem;

          line-height: 1.9;

        }

        .services-page-button {

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

          transition: transform 0.3s ease, background 0.3s ease;

        }

        .services-page-button:hover {

          color: #0B0B0B;

          background: #D8BA82;

          transform: translateY(-3px);

        }

        .services-page-introduction {

          padding: 80px 0 55px;

          text-align: center;

        }

        .services-page-intro-content {

          max-width: 650px;

          margin: 0 auto;

        }

        .services-page-intro-content h2 {

          font-family: "Playfair Display", serif;

          font-size: clamp(2.1rem, 4vw, 3.3rem);

          font-weight: 500;

          line-height: 1.2;

          margin-bottom: 20px;

        }

        .services-page-intro-content h2 span {

          color: #A68145;

          font-style: italic;

        }

        .services-page-intro-content > p:last-child {

          color: #716B62;

          font-size: 0.9rem;

          line-height: 1.9;

        }

        .services-detail-section {

          padding: 25px 0 90px;

        }

        .service-detail-row {

          display: grid;

          grid-template-columns: 1fr 1fr;

          align-items: center;

          gap: clamp(35px, 6vw, 80px);

          margin-bottom: 100px;

        }

        .service-detail-row:last-child {

          margin-bottom: 0;

        }

        .service-detail-reverse .service-detail-image-wrap {

          order: 2;

        }

        .service-detail-reverse .service-detail-content {

          order: 1;

        }

        .service-detail-image-wrap {

          position: relative;

          min-width: 0;

          aspect-ratio: 4 / 5;

          background: #E7DED0;

          border: 1px solid rgba(201,169,110,0.65);

          padding: 12px;

        }

        .service-detail-image {

          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

        }

        .service-detail-number {

          position: absolute;

          right: -12px;

          bottom: 25px;

          padding: 13px 18px;

          background: #0B0B0B;

          color: #C9A96E;

          font-family: "Playfair Display", serif;

          font-size: 1.5rem;

        }

        .service-detail-reverse .service-detail-number {

          right: auto;

          left: -12px;

        }

        .service-detail-icon {

          display: flex;

          align-items: center;

          justify-content: center;

          width: 48px;

          height: 48px;

          margin-bottom: 25px;

          border: 1px solid rgba(201,169,110,0.65);

          color: #A68145;

          font-size: 1.35rem;

        }

        .service-detail-content h2 {

          font-family: "Playfair Display", serif;

          font-size: clamp(2rem, 3.5vw, 3rem);

          font-weight: 500;

          line-height: 1.2;

          margin-bottom: 10px;

        }

        .service-detail-content h3 {

          color: #A68145;

          font-family: "Playfair Display", serif;

          font-size: 1.25rem;

          font-style: italic;

          font-weight: 400;

          margin-bottom: 20px;

        }

        .service-detail-description {

          color: #716B62;

          font-size: 0.88rem;

          line-height: 1.9;

          margin-bottom: 28px;

        }

        .service-benefits-heading {

          color: #0B0B0B;

          font-family: "Montserrat", sans-serif;

          font-size: 0.67rem;

          font-weight: 700;

          letter-spacing: 1.7px;

          margin-bottom: 15px;

        }

        .service-benefits {

          list-style: none;

          padding: 0;

          margin: 0 0 25px;

        }

        .service-benefits li {

          display: flex;

          align-items: flex-start;

          gap: 12px;

          margin-bottom: 12px;

          color: #5F594F;

          font-size: 0.82rem;

          line-height: 1.7;

        }

        .service-benefits li i {

          color: #A68145;

          font-size: 1rem;

          margin-top: 2px;

        }

        .service-detail-duration {

          display: flex;

          align-items: center;

          gap: 10px;

          padding: 15px 0;

          border-top: 1px solid rgba(11,11,11,0.12);

          color: #716B62;

          font-size: 0.78rem;

        }

        .service-detail-duration i {

          color: #A68145;

        }

        .service-detail-link {

          display: inline-flex;

          align-items: center;

          gap: 12px;

          margin-top: 15px;

          padding-bottom: 7px;

          border-bottom: 1px solid #A68145;

          color: #0B0B0B;

          font-family: "Montserrat", sans-serif;

          font-size: 0.68rem;

          font-weight: 700;

          letter-spacing: 1px;

          text-decoration: none;

          transition: color 0.3s ease;

        }

        .service-detail-link:hover {

          color: #A68145;

        }

        .services-page-cta {

          padding: 85px 0;

          background: #0B0B0B;

          color: #F5EFE6;

          text-align: center;

        }

        .services-page-cta h2 {

          margin-bottom: 20px;

        }

        .services-page-cta > .container > div > p:not(.services-page-eyebrow) {

          max-width: 540px;

          margin: 0 auto 28px;

          color: rgba(245,239,230,0.65);

          font-size: 0.88rem;

          line-height: 1.9;

        }

        @media (max-width: 767px) {

          .services-page-hero {

            padding: 130px 0 75px;

          }

          .services-page-introduction {

            padding: 65px 0 35px;

          }

          .services-detail-section {

            padding-bottom: 65px;

          }

          .service-detail-row {

            grid-template-columns: 1fr;

            gap: 32px;

            margin-bottom: 65px;

          }

          .service-detail-reverse .service-detail-image-wrap,

          .service-detail-reverse .service-detail-content {

            order: initial;

          }

          .service-detail-image-wrap {

            aspect-ratio: 4 / 3;

          }

          .service-detail-content h2 {

            font-size: 2.2rem;

          }

          .services-page-cta {

            padding: 65px 0;

          }

        }

        @media (prefers-reduced-motion: reduce) {

          .services-page-button,

          .service-detail-link {

            transition: none;

          }

        }

      `}</style>

    </main>

  );

};

export default ServicesPage;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const quickLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Gallery", link: "/gallery" },
  { name: "Testimonials", link: "/#testimonials" },
  { name: "Contact", link: "/contact" },
];

const serviceLinks = [
  { name: "Hair Cut & Styling", link: "/services" },
  { name: "Hair Color", link: "/services" },
  { name: "Hair Spa & Treatment", link: "/services" },
  { name: "Makeup", link: "/services" },
  { name: "Manicure & Pedicure", link: "/services" },
  { name: "Facial & Skin Care", link: "/services" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#0B0B0B",
        color: "#F5EFE6",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* TOP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="footer-cta"
        >
          <div>
            <p className="footer-eyebrow">YOUR NEXT BEAUTY EXPERIENCE</p>
            <h2 className="footer-cta-title">
              Ready to feel
              <br />
              <span>Beautiful?</span>
            </h2>
          </div>

          <MotionLink
            to="/booking"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="footer-book-button"
          >
            BOOK AN APPOINTMENT
            <i className="bi bi-arrow-up-right" />
          </MotionLink>
        </motion.div>

        {/* GOLD DIVIDER */}
        <div className="footer-divider" />

        {/* FOOTER CONTENT */}
        <div className="row footer-main">
          {/* BRAND */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <Link to="/" className="text-decoration-none d-inline-block">
              <span className="footer-logo">LUXE</span>
              <span className="footer-logo-subtitle">SALON &amp; SPA</span>
            </Link>

            <p className="footer-description">
              Where beauty meets confidence, craftsmanship meets creativity,
              and every visit becomes an experience worth remembering.
            </p>

            {/* SOCIAL LINKS
                Replace these platform URLs with the salon's official profile URLs. */}
            <div className="d-flex gap-2 mt-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook" />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col-6 col-md-4 col-lg-2 mb-5 mb-lg-0">
            <p className="footer-column-title">EXPLORE</p>
            <ul className="footer-links">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="col-6 col-md-4 col-lg-3 mb-5 mb-lg-0">
            <p className="footer-column-title">SERVICES</p>
            <ul className="footer-links">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-md-4 col-lg-3">
            <p className="footer-column-title">VISIT US</p>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <i className="bi bi-geo-alt" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123+Luxury+Avenue+Pune+Maharashtra+411001"
                  target="_blank"
                  rel="noreferrer"
                >
                  123 Luxury Avenue,
                  <br />
                  Pune, Maharashtra 411001
                </a>
              </div>

              <div className="footer-contact-item">
                <i className="bi bi-telephone" />
                <a href="tel:+919999999999">+91 99999 99999</a>
              </div>

              <div className="footer-contact-item">
                <i className="bi bi-envelope" />
                <a href="mailto:hello@luxesalon.com">hello@luxesalon.com</a>
              </div>

              <div className="footer-contact-item">
                <i className="bi bi-clock" />
                <span>
                  Mon – Sun
                  <br />
                  10:00 AM – 8:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="footer-bottom-divider" />

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>© {currentYear} Luxe Salon &amp; Spa. All rights reserved.</p>

          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact">Terms &amp; Conditions</Link>
          </div>

          <p>
            Crafted with <span>♥</span> for beauty.
          </p>
        </div>
      </div>

      {/* FOOTER CSS */}
      <style>
        {`
          .footer-cta {
            min-height: 280px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            padding: 65px 0;
          }

          .footer-eyebrow {
            color: #C9A96E;
            font-family: "Montserrat", sans-serif;
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 3px;
            margin-bottom: 14px;
          }

          .footer-cta-title {
            color: #F5EFE6;
            font-family: "Playfair Display", serif;
            font-size: clamp(2.5rem, 5vw, 4.3rem);
            font-weight: 500;
            line-height: 1.05;
            margin: 0;
          }

          .footer-cta-title span { color: #C9A96E; }

          .footer-book-button {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
            padding: 16px 25px;
            background-color: #C9A96E;
            color: #0B0B0B;
            font-family: "Montserrat", sans-serif;
            font-size: 0.68rem;
            font-weight: 700;
            letter-spacing: 1px;
            text-decoration: none;
            transition:
              transform 0.3s ease,
              background-color 0.3s ease,
              box-shadow 0.3s ease;
          }

          .footer-book-button:hover,
          .footer-book-button:focus-visible {
            color: #0B0B0B;
            background-color: #D8BA82;
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(201,169,110,0.18);
          }

          .footer-divider {
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(201,169,110,0.65),
              transparent
            );
          }

          .footer-main {
            padding-top: 65px;
            padding-bottom: 65px;
          }

          .footer-logo {
            display: block;
            color: #C9A96E;
            font-family: "Playfair Display", serif;
            font-size: 2.1rem;
            font-weight: 600;
            letter-spacing: 4px;
            line-height: 1;
          }

          .footer-logo-subtitle {
            display: block;
            color: #F5EFE6;
            font-family: "Montserrat", sans-serif;
            font-size: 0.55rem;
            letter-spacing: 5px;
            margin-top: 7px;
          }

          .footer-description {
            max-width: 340px;
            color: rgba(245,239,230,0.52);
            font-family: "Manrope", sans-serif;
            font-size: 0.8rem;
            line-height: 1.8;
            margin-top: 25px;
            margin-bottom: 0;
          }

          .footer-social {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(201,169,110,0.3);
            color: #F5EFE6;
            text-decoration: none;
            transition:
              color 0.3s ease,
              background-color 0.3s ease,
              border-color 0.3s ease,
              transform 0.3s ease;
          }

          .footer-social:hover,
          .footer-social:focus-visible {
            color: #0B0B0B;
            background-color: #C9A96E;
            border-color: #C9A96E;
            transform: translateY(-3px);
          }

          .footer-column-title {
            color: #C9A96E;
            font-family: "Montserrat", sans-serif;
            font-size: 0.62rem;
            font-weight: 600;
            letter-spacing: 2.5px;
            margin-bottom: 22px;
          }

          .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-links li { margin-bottom: 12px; }

          .footer-links a {
            color: rgba(245,239,230,0.58);
            font-family: "Manrope", sans-serif;
            font-size: 0.78rem;
            text-decoration: none;
            transition: color 0.3s ease, padding-left 0.3s ease;
          }

          .footer-links a:hover,
          .footer-links a:focus-visible {
            color: #C9A96E;
            padding-left: 4px;
          }

          .footer-contact-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 18px;
            color: rgba(245,239,230,0.58);
            font-family: "Manrope", sans-serif;
            font-size: 0.76rem;
            line-height: 1.7;
          }

          .footer-contact-item i {
            color: #C9A96E;
            font-size: 0.9rem;
            margin-top: 3px;
            flex-shrink: 0;
          }

          .footer-contact-item a {
            color: rgba(245,239,230,0.58);
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .footer-contact-item a:hover,
          .footer-contact-item a:focus-visible { color: #C9A96E; }

          .footer-bottom-divider {
            height: 1px;
            background-color: rgba(245,239,230,0.08);
          }

          .footer-bottom {
            min-height: 75px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            color: rgba(245,239,230,0.35);
            font-family: "Manrope", sans-serif;
            font-size: 0.65rem;
          }

          .footer-bottom p { margin: 0; }
          .footer-bottom p span { color: #C9A96E; }

          .footer-bottom-links {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .footer-bottom-links a {
            color: rgba(245,239,230,0.35);
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .footer-bottom-links a:hover,
          .footer-bottom-links a:focus-visible { color: #C9A96E; }

          @media (max-width: 991px) {
            .footer-cta {
              align-items: flex-start;
              flex-direction: column;
            }

            .footer-main {
              padding-top: 55px;
              padding-bottom: 45px;
            }
          }

          @media (max-width: 767px) {
            .footer-cta {
              min-height: auto;
              padding: 55px 0;
            }

            .footer-bottom {
              flex-direction: column;
              justify-content: center;
              text-align: center;
              padding: 25px 0;
            }

            .footer-bottom-links { order: -1; }
          }

          @media (max-width: 575px) {
            .footer-book-button {
              width: 100%;
              justify-content: center;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .footer-book-button,
            .footer-social,
            .footer-links a,
            .footer-contact-item a,
            .footer-bottom-links a {
              transition: none !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;

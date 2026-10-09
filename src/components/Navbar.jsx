import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const isActive = (link) => location.pathname === link;

  const navLinkStyle = (link) => ({
    color: isActive(link) ? "#C9A96E" : "#F5EFE6",
    transition: "color 0.3s ease",
  });

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed-top"
        style={{
          backgroundColor: "#0B0B0B",
          borderBottom: "1px solid rgba(201,169,110,0.25)",
          zIndex: 1000,
        }}
      >
        <div className="container">
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ minHeight: "82px" }}
          >
            {/* LOGO */}
            <Link
              to="/"
              className="text-decoration-none"
              onClick={handleNavClick}
            >
              <span
                className="font-display d-block"
                style={{
                  color: "#C9A96E",
                  fontSize: "1.7rem",
                  letterSpacing: "3px",
                  fontWeight: "600",
                  lineHeight: "1",
                }}
              >
                LUXE
              </span>

              <span
                className="font-ui d-block"
                style={{
                  color: "#F5EFE6",
                  fontSize: "0.55rem",
                  letterSpacing: "5px",
                  marginTop: "4px",
                }}
              >
                SALON & SPA
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="d-none d-lg-flex align-items-center gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={handleNavClick}
                  className="font-ui text-decoration-none nav-link-custom"
                  style={navLinkStyle(item.link)}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/booking"
                onClick={handleNavClick}
                className="font-ui text-decoration-none"
                style={{
                  backgroundColor: "#C9A96E",
                  color: "#0B0B0B",
                  padding: "12px 22px",
                  fontSize: "0.78rem",
                  fontWeight: "600",
                  letterSpacing: "0.8px",
                }}
              >
                Book Appointment
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className="d-lg-none border-0 bg-transparent"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              style={{
                color: "#F5EFE6",
                fontSize: "1.8rem",
              }}
            >
              <i
                className={`bi ${
                  menuOpen ? "bi-x-lg" : "bi-list"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="d-lg-none position-fixed w-100"
            style={{
              top: "82px",
              left: 0,
              backgroundColor: "#0B0B0B",
              borderBottom: "1px solid rgba(201,169,110,0.25)",
              zIndex: 999,
              overflow: "hidden",
            }}
          >
            <div className="container py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={handleNavClick}
                  className="font-ui d-block text-decoration-none py-3 mobile-nav-link"
                  style={navLinkStyle(item.link)}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/booking"
                onClick={handleNavClick}
                className="font-ui d-block text-center text-decoration-none mt-3 py-3"
                style={{
                  backgroundColor: "#C9A96E",
                  color: "#0B0B0B",
                  fontWeight: "600",
                }}
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
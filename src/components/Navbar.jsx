import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.jpeg';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <motion.nav
      className={scrolled ? "navbar scrolled" : "navbar"}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-container">
            {/* COBRIXA Logo */}
            <img src={logo} alt="COBRIXA" className="logo-image" />
            <div className="logo-text">
              <span className="company-name">COBRIXA</span>
            </div>
          </div>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'hamburger active' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {["/", "/about", "/services", "/projects", "/testimonials"].map((path, i) => (
            <motion.li
              className="nav-item"
              key={path}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                to={path}
                className={location.pathname === path ? "nav-links active" : "nav-links"}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </motion.li>
          ))}

          <motion.li
            className="nav-item contact-item"
            custom={5}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link to="/contact" className="nav-links-btn">
              Contact Us
            </Link>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;

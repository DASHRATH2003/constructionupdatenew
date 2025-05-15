import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import '../styles/Services.css';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const slideFromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const Services = () => {
  // State for expanded service sections
  const [expandedService, setExpandedService] = useState(null);
  const location = useLocation();

  // Refs for scroll animations
  const introRef = useRef(null);
  const expertiseRef = useRef(null);
  const processRef = useRef(null);
  const servicesListRef = useRef(null);
  const ctaRef = useRef(null);
  const residentialRef = useRef(null);
  const commercialRef = useRef(null);

  // Animation controls
  const introControls = useAnimation();
  const expertiseControls = useAnimation();
  const processControls = useAnimation();
  const servicesListControls = useAnimation();
  const ctaControls = useAnimation();

  // InView states
  const introInView = useInView(introRef, { once: true, amount: 0.3 });
  const expertiseInView = useInView(expertiseRef, { once: true, amount: 0.3 });
  const processInView = useInView(processRef, { once: true, amount: 0.3 });
  const servicesListInView = useInView(servicesListRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  // Check for hash in URL to expand specific service
  useEffect(() => {
    if (location.hash) {
      const serviceId = location.hash.replace('#', '');
      if (serviceId === 'residential' || serviceId === 'commercial') {
        setExpandedService(serviceId);
        // Scroll to the service section
        setTimeout(() => {
          document.getElementById(serviceId)?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, [location]);

  // Function to toggle expanded service
  const toggleServiceDetails = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  // Trigger animations when sections come into view
  useEffect(() => {
    if (introInView) introControls.start("visible");
    if (expertiseInView) expertiseControls.start("visible");
    if (processInView) processControls.start("visible");
    if (servicesListInView) servicesListControls.start("visible");
    if (ctaInView) ctaControls.start("visible");
  }, [introInView, expertiseInView, processInView, servicesListInView, ctaInView,
      introControls, expertiseControls, processControls, servicesListControls, ctaControls]);

  // Company expertise data
  const expertise = [
    { title: "20+ Years Experience", description: "Two decades of excellence in the construction industry", icon: "fa-medal" },
    { title: "Certified Professionals", description: "Team of licensed and certified construction experts", icon: "fa-certificate" },
    { title: "Award-Winning Projects", description: "Recognition for outstanding construction achievements", icon: "fa-trophy" },
    { title: "Sustainable Practices", description: "Commitment to environmentally responsible construction", icon: "fa-leaf" }
  ];

  // Process steps
  const processSteps = [
    { number: "01", title: "Consultation", description: "We begin with a thorough consultation to understand your vision, requirements, and budget constraints." },
    { number: "02", title: "Planning & Design", description: "Our expert team develops comprehensive plans and designs tailored to your specific needs." },
    { number: "03", title: "Construction", description: "We execute the project with precision, adhering to the highest quality standards and safety protocols." },
    { number: "04", title: "Quality Assurance", description: "Rigorous quality checks ensure every aspect of the project meets our exacting standards." },
    { number: "05", title: "Completion & Handover", description: "We deliver the finished project on time and provide complete documentation and support." }
  ];
  const services = [
    {
      id: 'residential',
      title: 'Residential Construction',
      description: 'We specialize in building custom homes that reflect your unique style and meet your specific needs. From initial design to final touches, our team works closely with you to create the home of your dreams.',
      image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Custom home building',
        'Home additions and extensions',
        'Kitchen and bathroom remodeling',
        'Basement finishing',
        'Outdoor living spaces'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Construction',
      description: 'Our commercial construction services cater to businesses of all sizes. We understand the importance of functional, attractive spaces that enhance productivity and make a positive impression on clients and customers.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Office buildings',
        'Retail spaces',
        'Restaurants',
        'Medical facilities',
        'Warehouses and industrial buildings'
      ]
    },
    {
      id: 'renovations',
      title: 'Interior Renovations',
      description: "Transform your existing space with our comprehensive renovation services. Whether you're looking to update a single room or completely reimagine your interior, our skilled team can bring your vision to life.",
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Complete interior redesigns',
        'Kitchen renovations',
        'Bathroom renovations',
        'Flooring installation',
        'Custom cabinetry and built-ins'
      ]
    },
    {
      id: 'architecture',
      title: 'Architecture & Planning',
      description: 'Our in-house architectural team works closely with clients to develop comprehensive plans that balance aesthetics, functionality, and budget considerations.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Architectural design',
        'Space planning',
        'Permit acquisition',
        '3D modeling and visualization',
        'Sustainable design solutions'
      ]
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: 'Our experienced project managers oversee every aspect of your construction project, ensuring it progresses smoothly, stays on budget, and meets all quality standards.',
      image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Timeline development and management',
        'Budget oversight',
        'Subcontractor coordination',
        'Quality control',
        'Regular progress updates'
      ]
    },
    {
      id: 'custom',
      title: 'Custom Projects',
      description: 'Have a unique construction need? Our team excels at tackling custom projects that require specialized expertise and creative problem-solving.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
      features: [
        'Historic renovations',
        'Sustainable/green building',
        'Smart home integration',
        'Accessibility modifications',
        'Disaster recovery and restoration'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Animated Header Section */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Comprehensive construction solutions tailored to your needs.
          </motion.p>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.section
        className="services-intro"
        ref={introRef}
        variants={fadeIn}
        initial="hidden"
        animate={introControls}
      >
        <div className="container">
          <motion.p>
            At COBRIXA Construction, we offer a wide range of premium construction services to meet the diverse needs of our clients. With over 20 years of industry experience, our team of skilled professionals is committed to delivering exceptional quality and craftsmanship on every project. Whether you're looking to build a new home, renovate your existing space, or develop a commercial property, our experienced team is here to help transform your vision into reality.
          </motion.p>
        </div>
      </motion.section>

      {/* Company Expertise Section */}
      <motion.section
        className="company-expertise"
        ref={expertiseRef}
        variants={staggerContainer}
        initial="hidden"
        animate={expertiseControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Why Choose COBRIXA</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p className="section-intro" variants={fadeIn}>
            With decades of experience and a commitment to excellence, COBRIXA Construction stands apart as a leader in the industry.
          </motion.p>

          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                className="expertise-card"
                key={index}
                variants={scaleIn}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="expertise-icon">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Process Section */}
      <motion.section
        className="our-process"
        ref={processRef}
        variants={staggerContainer}
        initial="hidden"
        animate={processControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Our Process</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p className="section-intro" variants={fadeIn}>
            We follow a structured approach to ensure every project is completed to the highest standards of quality and efficiency.
          </motion.p>

          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <motion.div
                className="process-step"
                key={index}
                variants={fadeIn}
                custom={index}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services List Section */}
      <motion.section
        className="services-list"
        ref={servicesListRef}
        variants={staggerContainer}
        initial="hidden"
        animate={servicesListControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Our Premium Services</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p className="section-intro" variants={fadeIn}>
            Explore our comprehensive range of construction services, each delivered with uncompromising attention to detail and quality.
          </motion.p>

          {services.map((service, index) => (
            <motion.div
              id={service.id}
              key={service.id}
              className="service-item"
              variants={fadeIn}
              custom={index}
              ref={service.id === 'residential' ? residentialRef : service.id === 'commercial' ? commercialRef : null}
            >
              <div className="service-content">
                <motion.div
                  className="service-text"
                  variants={index % 2 === 0 ? slideFromLeft : slideFromRight}
                >
                  <h2>{service.title}</h2>
                  <div className="service-accent-line"></div>
                  <p>{service.description}</p>
                  <motion.ul
                    className="service-features"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        variants={fadeIn}
                        custom={idx}
                      >
                        <i className="fas fa-check"></i> {feature}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Show More Details Button for Residential and Commercial */}
                  {(service.id === 'residential' || service.id === 'commercial') && (
                    <motion.div
                      className="service-actions"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleServiceDetails(service.id)}
                      style={{ marginBottom: '20px', cursor: 'pointer' }}
                    >
                      <button className="btn btn-secondary">
                        {expandedService === service.id ? 'Show Less' : 'Show More Details'}
                        <motion.i
                          className={`fas ${expandedService === service.id ? 'fa-chevron-up' : 'fa-chevron-down'} ml-2`}
                          animate={{ y: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        ></motion.i>
                      </button>
                    </motion.div>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/contact" className="btn btn-secondary">
                      Inquire About This Service
                      <motion.i
                        className="fas fa-arrow-right ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      ></motion.i>
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="service-image"
                  variants={index % 2 === 0 ? slideFromRight : slideFromLeft}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img src={service.image} alt={service.title} />
                  <motion.div
                    className="image-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>{service.title}</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Expanded Content for Residential */}
              {service.id === 'residential' && (
                <AnimatePresence>
                  {expandedService === 'residential' && (
                    <motion.div
                      className="expanded-service-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="expanded-service-inner">
                        <h3>Our Residential Construction Expertise</h3>
                        <p>At COBRIXA Construction, we understand that your home is more than just a building—it's where life happens. Our residential construction services are designed to create spaces that reflect your unique lifestyle and preferences while providing exceptional quality and value.</p>

                        <div className="expanded-service-grid">
                          <div className="expanded-service-item">
                            <h4>Custom Home Building</h4>
                            <p>From concept to completion, we work closely with you to design and build a home that perfectly suits your needs, preferences, and budget. Our team of architects, designers, and craftsmen collaborate to create a custom home that exceeds your expectations.</p>
                            <ul>
                              <li>Architectural design and planning</li>
                              <li>Site preparation and foundation work</li>
                              <li>Structural framing and exterior finishing</li>
                              <li>Interior finishing and custom details</li>
                              <li>Landscaping and outdoor living spaces</li>
                            </ul>
                          </div>

                          <div className="expanded-service-item">
                            <h4>Home Renovations</h4>
                            <p>Transform your existing home with our comprehensive renovation services. Whether you're looking to update a single room or completely reimagine your living space, our team has the expertise to bring your vision to life.</p>
                            <ul>
                              <li>Kitchen and bathroom remodeling</li>
                              <li>Basement finishing and conversions</li>
                              <li>Room additions and extensions</li>
                              <li>Whole-house renovations</li>
                              <li>Historic home restorations</li>
                            </ul>
                          </div>

                          <div className="expanded-service-item">
                            <h4>Luxury Features</h4>
                            <p>Elevate your home with premium features and finishes that add both beauty and functionality. Our attention to detail ensures that every element of your home reflects the highest standards of quality and craftsmanship.</p>
                            <ul>
                              <li>Custom cabinetry and millwork</li>
                              <li>Smart home technology integration</li>
                              <li>Energy-efficient systems and appliances</li>
                              <li>Luxury finishes and materials</li>
                              <li>Indoor-outdoor living spaces</li>
                            </ul>
                          </div>

                          <div className="expanded-service-item">
                            <h4>Our Residential Process</h4>
                            <p>We follow a structured approach to ensure your residential project is completed to the highest standards of quality and efficiency, with clear communication at every stage.</p>
                            <ol>
                              <li><strong>Initial Consultation:</strong> We discuss your vision, requirements, and budget</li>
                              <li><strong>Design Development:</strong> Our team creates detailed plans and specifications</li>
                              <li><strong>Proposal and Contract:</strong> We provide a comprehensive proposal and clear contract</li>
                              <li><strong>Construction:</strong> Our skilled craftsmen bring your project to life</li>
                              <li><strong>Quality Assurance:</strong> We conduct thorough inspections throughout the process</li>
                              <li><strong>Final Walkthrough:</strong> We ensure every detail meets your expectations</li>
                            </ol>
                          </div>
                        </div>

                        <div className="expanded-service-cta">
                          <Link to="/contact" className="btn btn-primary">
                            Schedule a Residential Consultation
                            <i className="fas fa-arrow-right ml-2"></i>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Expanded Content for Commercial */}
              {service.id === 'commercial' && (
                <AnimatePresence>
                  {expandedService === 'commercial' && (
                    <motion.div
                      className="expanded-service-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="expanded-service-inner">
                        <h3>Our Commercial Construction Expertise</h3>
                        <p>COBRIXA Construction delivers exceptional commercial building solutions that combine functionality, aesthetics, and value. We understand that your commercial space is a critical asset for your business, and we work diligently to create environments that enhance productivity, impress clients, and stand the test of time.</p>

                        <div className="expanded-service-grid">
                          <div className="expanded-service-item">
                            <h4>Office Buildings</h4>
                            <p>Create a workspace that reflects your company's culture and supports your team's productivity. Our office construction services encompass everything from modern open-concept designs to traditional executive suites.</p>
                            <ul>
                              <li>New office construction</li>
                              <li>Office renovations and remodels</li>
                              <li>Tenant improvements</li>
                              <li>Collaborative workspaces</li>
                              <li>Executive suites and boardrooms</li>
                            </ul>
                          </div>

                          <div className="expanded-service-item">
                            <h4>Retail and Restaurant Spaces</h4>
                            <p>Develop commercial spaces that attract customers and enhance their experience. We specialize in creating retail and restaurant environments that are both functional for your operations and appealing to your clientele.</p>
                            <ul>
                              <li>Retail storefronts and shopping centers</li>
                              <li>Restaurant and food service facilities</li>
                              <li>Hospitality venues</li>
                              <li>Mixed-use developments</li>
                              <li>Entertainment facilities</li>
                            </ul>
                          </div>

                          <div className="expanded-service-item">
                            <h4>Industrial and Institutional</h4>
                            <p>Build facilities that meet the specific requirements of your industry or institution. Our team has extensive experience with complex projects that demand specialized knowledge and attention to detail.</p>
                            <ul>
                              <li>Manufacturing facilities</li>
                              <li>Warehouses and distribution centers</li>
                              <li>Medical and healthcare facilities</li>
                              <li>Educational institutions</li>
                              <li>Government buildings</li>
                            </ul>
                          </div>

                          <div className="expanded-service-item">
                            <h4>Commercial Advantages</h4>
                            <p>When you choose COBRIXA for your commercial construction project, you benefit from our comprehensive approach and commitment to excellence.</p>
                            <ul>
                              <li><strong>Efficiency:</strong> Streamlined processes to minimize disruption to your business</li>
                              <li><strong>Expertise:</strong> Specialized knowledge of commercial building codes and regulations</li>
                              <li><strong>Quality:</strong> Premium materials and craftsmanship for lasting value</li>
                              <li><strong>Innovation:</strong> Integration of the latest building technologies and sustainable practices</li>
                              <li><strong>Partnership:</strong> Collaborative approach that prioritizes your business objectives</li>
                            </ul>
                          </div>
                        </div>

                        <div className="expanded-service-cta">
                          <Link to="/contact" className="btn btn-primary">
                            Discuss Your Commercial Project
                            <i className="fas fa-arrow-right ml-2"></i>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="cta-section"
        ref={ctaRef}
        variants={staggerContainer}
        initial="hidden"
        animate={ctaControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Need a Service Not Listed?</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p variants={fadeIn}>
            Contact us to discuss your specific construction needs. We offer customized solutions for unique projects and are always ready to take on new challenges.
          </motion.p>
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Contact Us
              <motion.i
                className="fas fa-arrow-right ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.i>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;

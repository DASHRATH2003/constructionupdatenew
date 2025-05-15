import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';

const Gallery = () => {
  // State for filter category
  const [filter, setFilter] = useState('all');

  // Refs for scroll animations
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const galleryRef = useRef(null);
  const featuredRef = useRef(null);
  const ctaRef = useRef(null);

  // Animation controls
  const headerControls = useAnimation();
  const introControls = useAnimation();
  const galleryControls = useAnimation();
  const featuredControls = useAnimation();
  const ctaControls = useAnimation();

  // InView states
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const introInView = useInView(introRef, { once: true, amount: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.1 });
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (headerInView) headerControls.start('visible');
    if (introInView) introControls.start('visible');
    if (galleryInView) galleryControls.start('visible');
    if (featuredInView) featuredControls.start('visible');
    if (ctaInView) ctaControls.start('visible');
  }, [headerInView, introInView, galleryInView, featuredInView, ctaInView,
      headerControls, introControls, galleryControls, featuredControls, ctaControls]);

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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Gallery data
  const galleryItems = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      description: 'A state-of-the-art office complex featuring sustainable design and smart building technology.',
      year: '2023',
      client: 'TechCorp International',
      location: 'Downtown Metro City',
      featured: true
    },
    {
      id: 2,
      title: 'Luxury Residential Tower',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
      description: 'High-end residential tower with premium amenities and panoramic city views.',
      year: '2022',
      client: 'Elite Properties',
      location: 'Waterfront District',
      featured: true
    },
    {
      id: 3,
      title: 'Industrial Warehouse Conversion',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
      description: 'Transformation of an industrial warehouse into a modern mixed-use space.',
      year: '2021',
      client: 'Urban Revitalization Group',
      location: 'Arts District',
      featured: false
    },
    {
      id: 4,
      title: 'Sustainable Community Center',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop',
      description: 'Community center built with eco-friendly materials and renewable energy systems.',
      year: '2023',
      client: 'Greenville Municipality',
      location: 'Greenville',
      featured: false
    },
    {
      id: 5,
      title: 'Historic Building Restoration',
      category: 'renovation',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop',
      description: 'Careful restoration of a historic building, preserving architectural details while modernizing systems.',
      year: '2020',
      client: 'Heritage Preservation Society',
      location: 'Old Town District',
      featured: true
    },
    {
      id: 6,
      title: 'Luxury Villa',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      description: 'Custom-designed luxury villa with infinity pool and smart home integration.',
      year: '2022',
      client: 'Private Client',
      location: 'Hillside Estates',
      featured: false
    },
    {
      id: 7,
      title: 'Modern Shopping Mall',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2070&auto=format&fit=crop',
      description: 'Contemporary shopping center with innovative design and premium retail spaces.',
      year: '2021',
      client: 'Retail Development Corp',
      location: 'Eastside District',
      featured: false
    },
    {
      id: 8,
      title: 'Urban Apartment Complex',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1545324418-9f1e2a5a2234?q=80&w=2070&auto=format&fit=crop',
      description: 'Modern urban living with thoughtfully designed apartments and community spaces.',
      year: '2023',
      client: 'Metropolitan Housing',
      location: 'Downtown',
      featured: false
    },
    {
      id: 9,
      title: 'Manufacturing Facility',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
      description: 'State-of-the-art manufacturing facility designed for efficiency and worker comfort.',
      year: '2022',
      client: 'Advanced Manufacturing Inc',
      location: 'Industrial Park',
      featured: false
    },
    {
      id: 10,
      title: 'Eco-Friendly School Campus',
      category: 'institutional',
      image: 'https://images.unsplash.com/photo-1562516710-38a6fa229b23?q=80&w=2070&auto=format&fit=crop',
      description: 'Modern educational facility with sustainable design principles and innovative learning spaces.',
      year: '2023',
      client: 'Progressive Education Board',
      location: 'Westside District',
      featured: true
    },
    {
      id: 11,
      title: 'Waterfront Restaurant',
      category: 'hospitality',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
      description: 'Elegant dining establishment with panoramic water views and contemporary architecture.',
      year: '2022',
      client: 'Gourmet Group Holdings',
      location: 'Harbor District',
      featured: false
    },
    {
      id: 12,
      title: 'Modern Art Museum',
      category: 'institutional',
      image: 'https://images.unsplash.com/photo-1566454825481-9c31bd88afb9?q=80&w=2070&auto=format&fit=crop',
      description: 'Cutting-edge cultural space with innovative exhibition areas and public gathering spaces.',
      year: '2021',
      client: 'Metropolitan Arts Foundation',
      location: 'Cultural District',
      featured: true
    },
    {
      id: 13,
      title: 'Luxury Hotel & Spa',
      category: 'hospitality',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2070&auto=format&fit=crop',
      description: 'Premium hospitality destination featuring elegant accommodations and world-class amenities.',
      year: '2022',
      client: 'Global Hospitality Group',
      location: 'Tourist District',
      featured: false
    },
    {
      id: 14,
      title: 'Corporate Headquarters',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop',
      description: 'Flagship office building with cutting-edge design, sustainability features, and employee amenities.',
      year: '2023',
      client: 'Fortune 500 Company',
      location: 'Business District',
      featured: true
    },
    {
      id: 15,
      title: 'Rooftop Garden Apartments',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?q=80&w=2070&auto=format&fit=crop',
      description: 'Urban living spaces with extensive green roofs, sustainable features, and community gardens.',
      year: '2022',
      client: 'Green Living Developments',
      location: 'Central District',
      featured: false
    },
    {
      id: 16,
      title: 'Historic Theater Renovation',
      category: 'renovation',
      image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=2070&auto=format&fit=crop',
      description: 'Meticulous restoration of a landmark theater, preserving historical elements while adding modern amenities.',
      year: '2021',
      client: 'City Arts Commission',
      location: 'Theater District',
      featured: true
    },
    {
      id: 17,
      title: 'Medical Research Facility',
      category: 'healthcare',
      image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2070&auto=format&fit=crop',
      description: 'State-of-the-art research center with specialized laboratories and collaborative spaces.',
      year: '2023',
      client: 'National Health Institute',
      location: 'Medical Campus',
      featured: false
    },
    {
      id: 18,
      title: 'Sports Stadium',
      category: 'recreational',
      image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2070&auto=format&fit=crop',
      description: 'Modern athletic facility with advanced amenities, sustainable design, and enhanced spectator experience.',
      year: '2022',
      client: 'Metropolitan Sports Authority',
      location: 'Sports Complex',
      featured: true
    }
  ];

  // Featured project (video)
  const featuredProject = {
    title: 'COBRIXA Headquarters',
    description: 'Our flagship project showcasing innovative design, sustainable materials, and cutting-edge construction techniques. This building serves as our company headquarters and a demonstration of our capabilities.',
    videoUrl: 'https://ep-turnerconstruction-prod-asdcetgubtducba3.z01.azurefd.net/uploads/302-turner-web-hero-31825.mp4'
  };

  // Filter gallery items based on selected category
  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="gallery-page">
      {/* Header Section */}
      <motion.div
        className="page-header"
        ref={headerRef}
        variants={fadeIn}
        initial="hidden"
        animate={headerControls}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Project Gallery
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
            Explore our portfolio of exceptional construction projects
          </motion.p>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <motion.section
        className="gallery-intro"
        ref={introRef}
        variants={fadeIn}
        initial="hidden"
        animate={introControls}
      >
        <div className="container">
          <motion.p>
            At COBRIXA Construction, we take pride in our diverse portfolio of projects spanning residential, commercial, and industrial sectors. Each project represents our commitment to quality, innovation, and client satisfaction. Browse through our gallery to see examples of our craftsmanship and expertise.
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Project Section */}
      <motion.section
        className="featured-project"
        ref={featuredRef}
        variants={staggerContainer}
        initial="hidden"
        animate={featuredControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Featured Project</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>

          <div className="featured-content">
            <motion.div
              className="featured-video"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <video autoPlay loop muted playsInline>
                <source src={featuredProject.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            <motion.div
              className="featured-info"
              variants={fadeIn}
            >
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/projects" className="btn btn-primary">
                  View Project Details
                  <motion.i
                    className="fas fa-arrow-right ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  ></motion.i>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="gallery-section"
        ref={galleryRef}
        variants={staggerContainer}
        initial="hidden"
        animate={galleryControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Our Projects</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="gallery-filter"
            variants={fadeIn}
          >
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              className={filter === 'residential' ? 'active' : ''}
              onClick={() => setFilter('residential')}
            >
              Residential
            </button>
            <button
              className={filter === 'commercial' ? 'active' : ''}
              onClick={() => setFilter('commercial')}
            >
              Commercial
            </button>
            <button
              className={filter === 'industrial' ? 'active' : ''}
              onClick={() => setFilter('industrial')}
            >
              Industrial
            </button>
            <button
              className={filter === 'renovation' ? 'active' : ''}
              onClick={() => setFilter('renovation')}
            >
              Renovation
            </button>
          </motion.div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="gallery-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="gallery-item"
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="gallery-image">
                    <img src={item.image} alt={item.title} />
                    <div className="gallery-overlay">
                      <span className="category">{item.category}</span>
                      <Link to={`/projects#project-${item.id}`} className="view-btn">
                        <i className="fas fa-eye"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="gallery-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="gallery-cta"
        ref={ctaRef}
        variants={staggerContainer}
        initial="hidden"
        animate={ctaControls}
      >
        <div className="container">
          <motion.h2 variants={fadeIn}>Ready to Start Your Project?</motion.h2>
          <motion.div className="accent-line" variants={fadeIn}></motion.div>
          <motion.p variants={fadeIn}>
            Contact us today to discuss how COBRIXA Construction can bring your vision to life with our expertise and commitment to excellence.
          </motion.p>
          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
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

export default Gallery;

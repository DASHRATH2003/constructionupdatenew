import { Link } from 'react-router-dom';
import '../styles/Services.css';

// Using direct image URLs for each service

const Services = () => {
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
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive construction solutions tailored to your needs.</p>
        </div>
      </div>

      <section className="services-intro">
        <div className="container">
          <p>At BuildMaster Construction, we offer a wide range of construction services to meet the diverse needs of our clients. Whether you{"'"}re looking to build a new home, renovate your existing space, or develop a commercial property, our experienced team is here to help.</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {services.map((service) => (
            <div id={service.id} key={service.id} className="service-item">
              <div className="service-content">
                <div className="service-text">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}><i className="fas fa-check"></i> {feature}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-secondary">Inquire About This Service</Link>
                </div>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need a Service Not Listed?</h2>
          <p>Contact us to discuss your specific construction needs. We offer customized solutions for unique projects.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team to discuss your construction needs.</p>
        </div>
      </div>
      
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Our Contact Information</h2>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h3>Office Location</h3>
                  <p>123 Construction Way<br />Building City, BC 12345</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>info@buildmaster.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-content">
                  <h3>Working Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 2:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-section">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            {/* In a real application, you would embed a Google Map or other map service here */}
            <div className="map-placeholder">
              <p>Map Placeholder - In a real application, an interactive map would be displayed here.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-item">
            <h3>What areas do you serve?</h3>
            <p>We primarily serve the Building City metropolitan area and surrounding communities within a 50-mile radius.</p>
          </div>
          
          <div className="faq-item">
            <h3>Do you offer free estimates?</h3>
            <p>Yes, we provide free initial consultations and estimates for all potential projects.</p>
          </div>
          
          <div className="faq-item">
            <h3>Are you licensed and insured?</h3>
            <p>Absolutely. BuildMaster Construction is fully licensed, bonded, and insured for all types of construction work we perform.</p>
          </div>
          
          <div className="faq-item">
            <h3>How long does a typical construction project take?</h3>
            <p>Project timelines vary greatly depending on scope and complexity. A small renovation might take a few weeks, while a custom home could take 6-12 months. We provide detailed timelines during the planning phase.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

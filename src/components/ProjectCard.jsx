import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ProjectCard.css';

const ProjectCard = ({ image, title, location, description, completionDate }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="project-image">
        <motion.img
          src={image}
          alt={title}
          animate={{
            scale: isHovered ? 1.05 : 1,
            transition: { duration: 0.5 }
          }}
        />
        <div className="project-overlay">
          <motion.div
            className="project-category"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
              transition: { duration: 0.3 }
            }}
          >
            FEATURED PROJECT
          </motion.div>
        </div>
      </div>
      <div className="project-info">
        <div className="project-header">
          <h3>{title}</h3>
          <div className="project-divider"></div>
        </div>
        <p className="project-location"><i className="fas fa-map-marker-alt"></i> {location}</p>
        <p className="project-description">{description}</p>
        <div className="project-footer">
          <p className="project-date"><i className="fas fa-calendar-alt"></i> Completed: {completionDate}</p>
          <motion.button
            className="project-view-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-plus"></i>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

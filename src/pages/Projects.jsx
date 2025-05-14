import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

// Using direct image URLs for each project

const Projects = () => {
  // Categories for filtering
  const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Industrial'];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Sample project data with different images
  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      location: 'Downtown Business District',
      description: 'A state-of-the-art office complex with sustainable features including solar panels, rainwater harvesting, and energy-efficient systems.',
      completionDate: 'June 2023',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Luxury Residential Development',
      location: 'Hillside Estates',
      description: 'Premium residential homes with custom finishes, smart home technology, and panoramic views of the surrounding landscape.',
      completionDate: 'March 2023',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Historic Building Renovation',
      location: 'Old Town District',
      description: 'Careful restoration of a 100-year-old building, preserving its historic character while updating systems and interiors for modern use.',
      completionDate: 'November 2022',
      category: 'Renovation',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Manufacturing Facility',
      location: 'Industrial Park',
      description: 'Design and construction of a 50,000 sq ft manufacturing facility with specialized equipment installations and logistics considerations.',
      completionDate: 'August 2022',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1565636291267-c03b2a0f8c5e?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Retail Shopping Center',
      location: 'Westside Mall',
      description: 'Development of a modern shopping center with multiple retail spaces, food court, and outdoor gathering areas.',
      completionDate: 'May 2022',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1555443805-658637491dd4?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Custom Lakefront Home',
      location: 'Crystal Lake',
      description: 'Custom-designed luxury home with floor-to-ceiling windows, expansive deck, and boat dock on a pristine lakefront property.',
      completionDate: 'January 2022',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Explore our portfolio of completed construction projects.</p>
        </div>
      </div>

      <section className="projects-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={activeFilter === category ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-gallery">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                location={project.location}
                description={project.description}
                completionDate={project.completionDate}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category. Please check back later or select another category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;

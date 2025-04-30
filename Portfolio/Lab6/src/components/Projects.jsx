import { useState } from 'react';
import { projects } from './Backend/projects'; //project data
import image from '../assets/image.png';
export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleScroll = (scrollOffset) => {
    const container = document.querySelector('.projects-container');
    container.scrollLeft += scrollOffset;
  };

  return (
    <section id='projects' className='projects-section'>
      <h1>Projects</h1>
      <div className='projects-wrapper'>
        <button 
          className='scroll-button left' 
          onClick={() => handleScroll(-500)}
          placeholder='->'
        >
        </button>

        <div className='projects-container'>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className='project-card'
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img src ={image}
                alt={project.title} 
                className='project-image' 
              />
              
              {hoveredProject === index && (
                <div className='project-preview'>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className='tech-stack'>
                    {project.tags.map(tag => (
                      <span key={tag} className='tech-tag'>{tag}</span>
                    ))}
                  </div>
                  <div className='project-links'>
                    <a href={project.demo}>Demo</a>
                    <a href={project.code}>Code</a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button 
          className='scroll-button right' 
          onClick={() => handleScroll(500)}
          placeholder='<-'
        >
        </button>
      </div>
    </section>
  );
}
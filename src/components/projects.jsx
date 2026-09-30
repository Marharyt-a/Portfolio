import "../css/projects.css"
import portfolioImage from "../assets/projects_portfolio.png";


const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      {/* Верхня шапка */}
      <header className="projects-header">
        <h2>My projects</h2>
      </header>

      {/* Основна частина */}
      <main className="projects-content">
        <h3 className="featured-label">Featured</h3>

        {/* Картка проєкту */}
        <article className="project-card">
          <img
            src={portfolioImage}
            alt="Portfolio preview code background"
            className="project-image"
          />
          <div className="project-details">
            <h4 className="project-title">Personal Portfolio Website</h4>
            <p className="project-description">A responsive personal portfolio website built with React and JavaScript. 
                It presents my background, capabilities, projects and contact information while demonstrating my frontend 
                development skills.</p>
            
            <p className="project-tags">[ React ] [ JavaScript ] [ HTML ] [ CSS ] [ Vite ]</p>

            <div className="section-features">
            <p>Features:</p>
            <ul className="features-list">
                <li>Responsive design</li>
                <li>Component-based architecture</li>
                <li>About Me section</li>
                <li>Capabilities section</li>
                <li>Projects showcase</li>
                <li>Contact section</li>
                <li>Responsive navigation</li>
            </ul>
            </div>
            
            <div  className="project-github-link">
              <a href="https://github.com/Marharyt-a/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link"
            >
              GitHub</a>
            </div>
          </div>
        </article>

        <h3 className="featured-label">More projects</h3>
        <p>To be added!</p>


      </main>

    </div>
  );
};

export default Projects
import "../css/contacts.css"


const Contacts = () => {
  return (
    <div className="contacts-wrapper" id="contact">
      {/* Верхня світла шапка */}
      <header className="contacts-header">
        <h1>Let’s connect!</h1>
      </header>

      {/* Центральна темна частина */}
      <main className="contacts-content">
        <p className="contacts-subtitle">
          Interested in working together? I’d love to hear from you.
        </p>

        <div className="contacts-cards">
          {/* Картка Email */}
          <div className="contacts-card card-light">
            <h2 className="card-title">Send me an email:</h2>
            <a href="mailto:marharytabakalo@gmail.com" className="email-link">
              marharytabakalo@gmail.com
            </a>
          </div>

          {/* Картка Соцмереж */}
          <div className="contacts-card card-purple">
            <h2 className="card-title">Or contact me via:</h2>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/marharyta-bakalo/" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <p className="status-text">
          Open to junior/freelance opportunities
        </p>
      </main>

      {/* Нижній футер */}
      <footer className="contacts-footer">
        <p>© 2026 Marharyta Bakalo</p>
        <p>Built with React · JavaScript · CSS</p>
      </footer>
    </div>
  );
};

export default Contacts
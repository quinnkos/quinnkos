import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/quinn-koster/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/quinnkos"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Github size={24} />
        </a>
      </div>
      <p className="footer-text">© 2025 Quinn Koster. Built with React.</p>
    </footer>
  );
};

export default Footer;
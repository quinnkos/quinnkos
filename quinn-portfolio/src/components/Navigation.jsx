const Navigation = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'home' },
    /*{ id: 'about', label: 'About Me' },*/
    { id: 'projects', label: 'projects' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Quinn Koster</div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
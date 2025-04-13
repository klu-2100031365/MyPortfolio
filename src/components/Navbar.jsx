import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between py-6 px-4 lg:px-10 bg-black-800">
      <div className="flex flex-shrink-0 items-center">
        <a href="#home" aria-label="Home">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">MyPortfolio</h1>
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex space-x-6">
        <a href="#home" className="text-white text-lg hover:text-gray-400">Home</a>
        <a href="#skills" className="text-white text-lg hover:text-gray-400">Skills</a>
        <a href="#projects" className="text-white text-lg hover:text-gray-400">Projects</a>
        <a href="#certifications" className="text-white text-lg hover:text-gray-400">Certifications</a>
        <a href="#contact" className="text-white text-lg hover:text-gray-400">Contact Me</a>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden flex items-center">
      <button
    onClick={toggleMenu}
    className="text-white text-3xl p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-110"
    aria-label="Toggle Menu"
  >
    &#9776; {/* Hamburger Icon */}
  </button>

        {/* Mobile Menu Links */}
        {isMenuOpen && (
      <div className="absolute top-16 right-4 bg-transparent z-50 flex flex-col items-end space-y-2">
      {["home", "skills", "projects", "certifications", "contact"].map((section) => (
        <a
          key={section}
          href={`#${section}`}
          onClick={() => setIsMenuOpen(false)}
          className="bg-white text-black px-4 py-1 rounded-full text-base font-medium shadow hover:bg-gray-200 transition duration-300"
        >
          {section.charAt(0).toUpperCase() + section.slice(1).replace("Me", " Me")}
        </a>
      ))}
    </div>
    
        )}
      </div>
    </nav>
  );
}

export default Navbar;

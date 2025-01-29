import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{ width: '100vw', overflow: 'hidden'}}
      className="text-black-300 py-10"
    >
      <div className="container mx-auto px-4">
        <div className="row">
          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold fs-2 text-gray-400"><span style={{color:'#00FF00 '}}>#</span>Contact</h3>
            <p className="text-sm text-gray-400">
              Have a question or want to collaborate? Feel free to reach out!
            </p>
            <p className="mt-3 text-sm">
              <span style={{color:'#00FF00 '}}>Email:</span>{' '}
              <a href="mailto:mohammedjishan8525@example.com" className="text-gray-400 underline">
                mohammedjishan8525@example.com
              </a>
            </p>
            <p className="mt-3 text-sm">
            <span style={{color:'#00FF00 '}}>Phone:</span>{' '}
              <a href="tel:+918113927887" className="text-gray-400 underline">
                +91 8113927887
              </a>
            </p>
          </div>

          {/* Portfolio Links */}
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold  " style={{color:'#00FF00 '}}>Explore</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-gray-400 text-decoration-none hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 text-decoration-none hover:text-green-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 text-decoration-none hover:text-green-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 text-decoration-none hover:text-green-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4">
            <h3 className="fw-bold " style={{color:'#00FF00 '}}>Connect with Me</h3>
            <p className="text-sm text-gray-400">
              Follow me on social media or connect through these platforms:
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://linkedin.com/in/mohd-jishan-9447152b4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a
                href="https://github.com/Jishaan-07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/mhd_jishaan/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://wa.me/8113927887"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400"
              >
                <i className="fab fa-whatsapp fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <div className="text-center text-gray-400 text-sm">
          <span>© {new Date().getFullYear()} Mohammed Jishaan</span>
          <br />
          Built with <span className="text-lime-400">❤️</span> and React.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";

export default function Navbar() {
  const header = {
    email: "khushbookumari18082004@gmail.com",
    phone: "+917367802251",
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        // style={{ height: "70px", width: "100%" }}
        className=" w-full flex  py-3 items-center justify-between px-6 bg-white shadow"
      >
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-700 font-medium text-base sm:text-lg">
          <a  className="font-medium nav-link text-gray-700 hover:text-blue-600 transition-colors">
            {header.email}
          </a>
          <a className="font-medium nav-link text-gray-700 hover:text-blue-600 transition-colors">
            {header.phone}
          </a>

                    <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/khushboo-kumari-yadav-28333a2a2/"
                  className="bg-blue-100 text-gray-800 transition-colors p-3  hover:text-white hover:bg-blue-600  rounded-full  "
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
                <a
                  href="https://github.com/Kky2004"
                  className="bg-blue-100 text-gray-800 hover:text-white hover:bg-blue-600   transition-colors p-3 rounded-full"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
                
              </div>
        </div>

       
          

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="nav-link text-gray-700 hover:text-blue-600 transition-colors font-semibold text-lg"
          >
            About
          </a>
          <a
            href="#skills"
            className="nav-link text-gray-700 hover:text-blue-600 transition-colors font-semibold text-lg"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="nav-link text-gray-700 hover:text-blue-600 transition-colors deactive font-semibold text-lg"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="nav-link text-gray-700 hover:text-blue-600 transition-colors font-semibold text-lg"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu toggle button */}
        <button
          id="mobile-menu-button"
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              // X icon when open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon when closed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-t border-gray-200 transition-max-height duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-2 flex flex-col  space-y-3">
          <a
            href="#about"
            className="py-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="py-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="py-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#contact"
            className="py-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

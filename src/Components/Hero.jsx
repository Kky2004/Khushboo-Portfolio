import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container  px-4 flex flex-col md:flex-row md:mx-6 items-center justify-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Khushboo Kumari
            </h1>{" "}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-light mb-6">
              Mern Stack Developer
            </h2>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-lg mb-8 text-blue-100">
               
            </p>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="h-64 w-64 md:h-80 md:w-80 rounded-full bg-blue-500 bg-opacity-30 flex items-center justify-center">
                <img
                  src="/kk.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </motion.div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex space-x-2 items-center">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <a href="/Resume.pdf" download>
                  <span className=" font-medium nav-link text-gray-700 hover:text-blue-600 transition-colors">
                    Download Resume
                  </span>
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      {/* Down Arrow Button */}
        <div className="mt-16 pt-16 sm:mt-24 flex justify-center">
          <a
            href="#about"
            className="animate-bounce bg-gray-200 p-3 rounded-full"
          >
            <svg
              className="w-6 h-6 text-sky-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
    </div>
  );
}

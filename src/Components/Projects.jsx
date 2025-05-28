export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 justify-items-center mx-auto md:w-3/4 ">
          {/* Project 1 */}
          <div className="project-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="./web1.png "
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800">Wander-lust</h3>
                <span className="text-xs font-semibold bg-blue-100 text-blue-800 py-1 px-2 rounded">
                  Full Stack
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Wander-Lust is a fully functional E-Commerce Website i.e; Airbnb
                clone that allows users to explore and book unique travel
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  Express.js
                </span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  MongoDB
                </span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  REST APIs
                </span>
              </div>
              <div className="flex justify-between">
                <a
                  href="https://majorpr1.onrender.com/listings"
                  className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                >
                  View Demo
                </a>
                <a
                  href="https://github.com/Kky2004/MajorPr1"
                  className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src="./web2.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800">
                  Spotify Clone – Music Streaming App
                </h3>
                <span className="text-xs font-semibold bg-green-100 text-green-800 py-1 px-2 rounded">
                  Frontend
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                The Spotify Clone is a responsive frontend music streaming platform that
                emulates the core functionality of Spotify. 
              
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  HTML
                </span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  CSS
                </span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  Javascript
                </span>
              </div>
              <div className="flex justify-between">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Demo
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
             <img src="/image.png" alt="" className="object-contain"/>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-gray-800">
                  Portfolio Website
                </h3>
                <span className="text-xs font-semibold bg-purple-100 text-purple-800 py-1 px-2 rounded">
                  Frontend
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                An intelligent chatbot service with natural language processing
                capabilities for customer support.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  React.js
                </span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  Vite
                </span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  Tailwind Css
                </span>
              </div>
              <div className="flex justify-between">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Demo
                </a>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className=" bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors hidden"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

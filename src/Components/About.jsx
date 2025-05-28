export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-4 pt-4 mb-6">
       <h1 className="text-4xl md:text-5xl font-bold  text-center">
            About <span className="gradient-text">Me</span>
          </h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-10"></div>

        <div className="flex flex-col  items-center justify-center space-y-8">
          <div className=" w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Who am I?
              </h3>
              <p className="text-gray-600 mb-4">
                I'm a <b>FULL Stack Developer </b> and a 2nd-year{" "}
                <b>Electronics and Computer Engineering student </b> at MIT ADT
                University, Pune.
                <br /> I enjoy building responsive, scalable, user-friendly web
                applications that solve real-world problems, With hands-on
                experience in{" "}
                <b>MongoDB, Express.js, React.js, and Node.js. </b> <br />
                Strong foundation in
                <b> HTML, CSS, and JavaScript, REST APIs.</b>
              </p>
              <p className="text-gray-600 mb-6">
                I’ve worked on several personal and academic projects that have
                sharpened my skills in both{" "}
                <b>front-end and back-end development.</b>
                <br /> I'm constantly learning and experimenting with new tools
                and technologies to stay ahead in the fast-evolving world of web
                development.
              </p>

              {/* Education & Certifications */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <div className="grid md:grid-cols-1 ">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-medium mb-2">
                      B.Tech in Electronics and Computer Engineering
                    </h3>
                    <p className="text-gray-700">
                      MIT ADT University,Pune <br />
                      2023 to 2027
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-semibold text-gray-800">Name:</p>
                <p className="text-gray-600">Khushboo Kumari</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email:</p>
                <p className="text-gray-600">
                  khushbookumari18082004@gmail.com
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Location:</p>
                <p className="text-gray-600">Pune,Maharashtra</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Availability:</p>
                <p className="text-green-600">Open to opportunities</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

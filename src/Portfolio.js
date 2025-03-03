import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio-container bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="portfolio-card bg-white shadow-lg p-8 rounded-2xl max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Student CV</h1>

        {/* Personal Information Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Personal Information</h2>
          <p className="text-gray-600">Name: John Doe</p>
          <p className="text-gray-600">Email: johndoe@example.com</p>
          <p className="text-gray-600">Phone: +123 456 7890</p>
        </section>

        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Education</h2>
          <p className="text-gray-600">B.Sc. in Computer Science - XYZ University (2022 - 2026)</p>
        </section>

        {/* Skills Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>React.js & Next.js</li>
            <li>UI/UX Design</li>
            <li>JavaScript & TypeScript</li>
            <li>Tailwind CSS & Bootstrap</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Experience</h2>
          <p className="text-gray-600">Frontend Developer - ABC Tech (2023 - Present)</p>
        </section>

        {/* Projects Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Projects</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Portfolio Website</li>
            <li>E-commerce App</li>
            <li>Chatbot AI System</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-700">Contact</h2>
          <p className="text-gray-600">LinkedIn: linkedin.com/in/johndoe</p>
          <p className="text-gray-600">GitHub: github.com/johndoe</p>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
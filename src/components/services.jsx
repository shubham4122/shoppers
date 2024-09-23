import React from "react";

const Services = () => {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Web Design</h3>
          <p>
            Creating visually stunning and user-friendly designs that captivate
            your audience.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Development</h3>
          <p>
            Building robust, scalable, and high-performance web applications
            with modern technologies.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
          <p>
            Enhancing your website's visibility on search engines to attract
            more traffic and customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import featuresData from "../../data/featuresData";

const FeaturesSection = () => {
  return (
    <section className="lg:py-20 py-10 bg-gray-50">
      <div className="md:container w-full mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
          {featuresData.map((feature, idx) => (
            <div className="card lg:p-6 p-4" key={idx}>
              <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                {<feature.icon className="text-primary text-2xl" />}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

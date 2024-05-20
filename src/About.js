//Done by Mehak Beniwal//
import React from "react";
import crowdMonitoringImage from "./assets/About.png";
import Navbar from "./Navbar";

const AboutComponent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col lg:flex-row bg-black text-white min-h-screen p-8">
        <div className="lg:w-1/2 p-4 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Better Spaces</h1>
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4">
            Crowd Monitoring
          </h2>
          <p className="text-lg lg:text-xl mb-4">
            Our Crowd Monitoring solution utilizes advanced computer vision
            technology and existing CCTV cameras to monitor real-time crowd
            density.
          </p>
          <p className="text-sm lg:text-base">
            A crowd monitoring system is a technological solution designed to
            track, analyze, and manage crowds across various environments,
            including public spaces, events, transportation hubs, and retail
            settings. These systems leverage a combination of sensors, cameras,
            software algorithms, and data analytics to collect real-time
            information about crowd density, movement patterns, and potential
            safety risks.
          </p>
        </div>
        <div className="lg:w-1/2 p-4 flex justify-center items-center">
          <img
            src={crowdMonitoringImage}
            alt="Crowd Monitoring"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;

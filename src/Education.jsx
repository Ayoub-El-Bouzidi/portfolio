import React from "react";

const Educations = () => {
  return (
    <div className="p-6 pt-12 bg-black">
      <h1 className="text-3xl text-white text-center mb-6">Educations</h1><br/> <br/>
      <div className="relative flex justify-center">
        {/* Vertical dotted line */}
        <div className="h-96 border-2 border-blue-600"></div>

        {/* Dots with paragraphs */}
        <div className="absolute space-y-12">
          {/* Entry 1 - Left Side */}
          <div className="relative flex items-center">
            <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute left-[-270px] w-64 p-4 border-2 border-solid border-blue-500 rounded-full bg-gray-800">
              <h2 className="text-white text-lg text-center">
                 High School
              </h2>
              <p className="text-white text-lg">
                Bachelor's in PC Science (2021 - 2022)
              </p>
            </div>
          </div>

          {/* Entry 2 - Right Side */}
          <div className="relative flex items-center">
            <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute left-[50px] w-64 p-4 border-2 border-solid border-blue-500 rounded-full bg-gray-800">
              <h2 className="text-white text-lg text-center">
                 Univercity
              </h2>
              <p className="text-white text-lg">
                Economy Science (2022 - 2023)
              </p>
            </div>
          </div>

          <div className="relative flex items-center pt-24">
            <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute left-[-270px] w-64 p-4 border-2 border-solid border-blue-500 rounded-full bg-gray-800">
              <h2 className="text-white text-lg text-center">
                Solicode
              </h2>
              <p className="text-white text-lg">
                Web Developement (2023 - 2024)
              </p>
            </div>
          </div>

          <div className="relative flex items-center pt-14">
            <div className="w-4 h-4 bg-blue-600 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute left-[50px] w-64 p-4 border-2 border-solid border-blue-500 rounded-full bg-gray-800">
              <h2 className="text-white text-lg text-center">
                 Solicode
              </h2>
              <p className="text-white text-lg">
                Mobile Developement (2024 - 2025)
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Educations;

import React from "react";
import project1 from '../assets/images/project-1.webp';
import project2 from '../assets/images/project-2.webp';
import project3 from '../assets/images/project-3.webp';
import project4 from '../assets/images/project-4.webp';

const destinations = [
  { id: 1, name: "Uttarakhand", image:project1 },
  { id: 2, name: "Himachal Pradesh", image:project2 },
  { id: 3, name: "Goa", image:project3 },
  { id: 4, name: "Jammu & Kashmir", image:project4 },
  { id: 5, name: "Uttarakhand", image:project2 },
];

const Resort = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 py-20">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center">
        Timber <span className="text-red-500">House Resorts</span>
      </h2>

      {/* Image Grid */}
      <div className="flex justify-center items-center gap-6 mt-8 flex-wrap">
        {destinations.map((place) => (
          <div key={place.id} className="text-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-red-500 font-semibold mt-2">{place.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resort;

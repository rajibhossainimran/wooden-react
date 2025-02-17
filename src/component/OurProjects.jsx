import React from 'react';
import BgImage from '../assets/images/contact-us-bg.webp';
import project1 from '../assets/images/project-1.webp';
import project2 from '../assets/images/project-2.webp';
import project3 from '../assets/images/project-3.webp';
import project4 from '../assets/images/project-4.webp';
const OurProjects = () => {
//   const projects = [
//     {
//       location: 'Jaipur',
//       imgSrc: project1,
//       description: 'Elevated modern design on stilts',
//     },
//     {
//       location: 'Nainital',
//       imgSrc: project2,
//       description: 'Red structure with a white balcony and sloped roof',
//     },
//     {
//       location: 'Chandigarh',
//       imgSrc: project3,
//       description: 'Wooden cabin with a tiled roof',
//     },
//   ];

  return (
    <div className="bg-gray-100 py-8 px-4 flex flex-col items-center justify-center" 
    
    style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${BgImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%', 
        height: '100%',
        
      }}
    
    >
      <h2 className="text-4xl font-bold mb-8 text-center">
        Our <span className="text-red-500">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        
          <div className="bg-white shadow-md  overflow-hidden relative rounded-l-[25px]">
            <img 
              src={project1} 
              alt='image' 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-2xl font-semibold mb-2">Jaipur</h3>
                {/* <p className="text-gray-200">{project.description}</p> */}
              </div>
            </div>
            
          </div>
          {/* image 2  */}
          <div className="bg-white shadow-md  overflow-hidden relative">
            <img 
              src={project2} 
              alt='image' 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-2xl font-semibold mb-2">Nainital</h3>
                {/* <p className="text-gray-200">{project.description}</p> */}
              </div>
            </div>
            
          </div>
          {/* image 3  */}
          <div className="bg-white shadow-md  overflow-hidden relative rounded-r-[25px]">
            <img 
              src={project3} 
              alt='image' 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end justify-center">
              <div className="text-white text-center p-4">
                <h3 className="text-2xl font-semibold mb-2">Chandigarh</h3>
                {/* <p className="text-gray-200">{project.description}</p> */}
              </div>
            </div>
            
          </div>
        
      </div>
    </div>
  );
};

export default OurProjects;

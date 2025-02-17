import React from 'react';
import house from '../assets/images/image.webp';
import house2 from '../assets/images/Wooden.webp';
const Welcome = () => {
    return (
        <div className="bg-white flex flex-col items-center justify-center  p-4 pt-20">
            <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden w-full  py-10">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="w-full h-64 md:h-auto">
                        <div className='relative'>
                            <div>
                                <img
                                    src={house}
                                    alt="Wooden House"
                                    className="w-full h-full object-cover"
                                /></div>
                            {/* rounded image  */}
                            <div className='absolute bottom-[-40px] right-0'>
                            <img
                                    src={house2}
                                    alt="Wooden House"
                                    className="w-[120px] h-[120px] object-cover rounded-full border-4 border-solid border-white"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-6 sm:mt-20 md:mt-0">
                        <h1 className="text-4xl font-bold mb-4">Welcome To <span className='text-red-700'>Leading Wooden Homes Industry</span></h1>
                        <p className="mb-4">
                            Canadian craft founded by Mr. Kuljeet Kali in the year 2016. Since our establishment, our goal has been to provide our customers with quality services & premium quality eco-friendly wooden homes that are at par with the best in the world.
                        </p>
                        <p className="mb-4">
                            With our decades of experience & refined expertise, we at Canadian Craft provide our clients with a selection of log homes to the best of their satisfaction. We build homes, tree houses, and resorts that are energy-efficient, made from the finest pine wood sourced directly from Germany, Russia, the USA, and Canada. We deliver excellence.
                        </p>
                        <a href="">
                        <button className="bg-gray-300  py-2 px-4 rounded hover:bg-red-700 text-red-700 hover:text-white font-semibold text-xl">
                            Read More
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;

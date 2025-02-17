import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import processImg2 from "../assets/images/review.jpeg";
import bg from "../assets/images/bgCircle.png";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
// import quotes from "../../../assets/work/quotes.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import { RiDoubleQuotesR } from 'react-icons/ri';
const Review = () => {
    return (
        <div className='lg:px-16 md:px-10 p-5'>
            <div className="py-5">
            <h2 className="text-4xl font-bold mb-8 text-start flex justify-start items-center">
            <span className='text-white me-2 block p-1 bg-yellow-700 rounded-full '><FaRegFaceSmileBeam /></span> Your <span className="text-red-500 ">Happy Clients</span>
           </h2>
            </div>
            <div style={{
                    backgroundImage: `url(${bg})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%', 
                    height: '100%',
                    
                  }}>
            <div className='w-2/3'>
            <Swiper
                loop={true}
                slidesPerView={2}
                spaceBetween={10}
                // centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    // 1024: {
                    //     slidesPerView: 2,
                    //     spaceBetween: 30,
                    // },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div
                        style={{
                            boxShadow: `rgba(0, 131, 141, 0.16) 0px 3px 6px, rgba(0, 131, 141, 0.23) 0px 3px 6px`
                        }}
                        className='p-8 my-8 bg-white'>
                        <div className='titel_content'>
                            <div className='flex space-x-1 text-xl text-yellow-500'>
                                <span> <FaStar /></span>
                                <span> <FaStar /></span>
                                <span> <FaStar /></span>
                                <span> <FaStar /></span>
                                <span> <FaStar /></span>
                            </div>
                            <p className='text-xl py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nobis illo cum quam, mollitia veritatis eum non deserunt nihil ratione aut facilis voluptates numquam eligendi.</p>

                            <div className='flex justify-between items-end'>
                                <div className='flex items-center space-x-2'>
                                    <img src={processImg2} className='w-[100px] h-[100px] rounded-full block' alt="solution" />
                                    <p className='ms-10 text-red-700 font-semibold text-xl'>Rajib Hossain</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            boxShadow: `rgba(0, 131, 141, 0.16) 0px 3px 6px, rgba(0, 131, 141, 0.23) 0px 3px 6px`
                        }}
                        className='p-8 my-8 bg-white'>
                        <div className='titel_content'>
                            <div className='flex space-x-1 text-xl text-yellow-500'>
                                <span> <FaStar /></span>
                                <span> <FaStar /></span>
                                <span> <FaStar /></span>
                                <span> <FaStar /></span>
                                <span> <FaStar /></span>
                            </div>
                            <p className='text-xl py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nobis illo cum quam, mollitia veritatis eum non deserunt nihil ratione aut facilis voluptates numquam eligendi.</p>

                            <div className='flex justify-between items-end'>
                                <div className='flex items-center space-x-2'>
                                    <img src={processImg2} className='w-[100px] h-[100px] rounded-full block' alt="solution" />
                                    <p className='ms-10 text-red-700 font-semibold text-xl'>Rajib Hossain</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            boxShadow: `rgba(0, 131, 141, 0.16) 0px 3px 6px, rgba(0, 131, 141, 0.23) 0px 3px 6px`
                        }}
                        className='p-8 my-8 bg-white'>
                        <div className='titel_content'>
                            <div className='flex space-x-1 text-xl text-yellow-500'>
                                <span> <FaStar /></span>
                                <span> <FaStar /></span>
                                <span> <FaStar /></span>
                                <span> <FaStar /></span>
                                <span> <FaStar /></span>
                            </div>
                            <p className='text-xl py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nobis illo cum quam, mollitia veritatis eum non deserunt nihil ratione aut facilis voluptates numquam eligendi.</p>

                            <div className='flex justify-between items-end'>
                                <div className='flex items-center space-x-2'>
                                    <img src={processImg2} className='w-[100px] h-[100px] rounded-full block' alt="solution" />
                                    <p className='ms-10 text-red-700 font-semibold text-xl'>Rajib Hossain</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            </div>
            </div>
        </div>
    );
};

export default Review;
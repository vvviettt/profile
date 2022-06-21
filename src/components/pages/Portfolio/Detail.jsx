/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

function Detail(props) {
    const mode = useSelector((state) => state.mote.value);
    const [activeThumb, setActiveThumb] = useState();
    return (
        <div className="absolute flex items-center top-0 left-0 right-0 h-screen w-full bg-[rgba(0,0,0,.4)] z-50 phone:mx-2 phone:my-2 phone:fixed ">
            <div className="relative max-w-[1200px] w-full m-auto flex bg-toggle p-[30px] rounded-xl phone:flex-col">
                <div className="w-1/2 text-left mr-2 phone:w-full ">
                    <h3
                        className={classNames('text-main uppercase text-[30px] font-bold', {
                            'text-lightBg': mode === 'light',
                        })}
                    >
                        My Profile
                    </h3>
                    <div className="h-[3px] w-full rounded-full bg-lightText mb-4"></div>
                    <div>
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: activeThumb }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            {props.project.thumbnail.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={item} alt="" />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        <Swiper
                            onSwiper={setActiveThumb}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            {props.project.thumbnail.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={item} alt="" />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
                <div className="w-1/2 text-left ml-2 phone:w-full">
                    <h3
                        className={classNames('text-main uppercase text-[30px] font-bold ', {
                            'text-lightBg': mode === 'light',
                        })}
                    >
                        Detail
                    </h3>
                    <div className="h-[3px] w-full rounded-full bg-lightText mb-4"></div>
                    <div className="">
                        <p className="text-white text-[15px]  mb-4">{props.project.detail}</p>
                        <p className="text-white text-[15px] mb-[10px] capitalize">{`Create at :  ${props.project.createdAt}`}</p>
                        <p className="text-white text-[15px] mb-[10px] capitalize">{`Completed at :  ${props.project.completedAt}`}</p>
                        <p className="text-white text-[15px] mb-[10px] capitalize">{`FrontEnd :  ${props.project.frontend}`}</p>
                        <p className="text-white text-[15px] mb-[10px] capitalize">{`BackEnd :  ${props.project.backend}`}</p>
                        <p className="text-white text-[15px] mb-[10px] capitalize">
                            Demo : <a href={props.project.demo} className="" />
                        </p>
                    </div>
                </div>
                <div
                    onClick={props.close}
                    className={classNames(
                        'cursor-pointer w-11 h-11 absolute flex items-center justify-center rounded-full top-[-13px] right-[-20px] bg-main',
                        { 'bg-lightBg': mode === 'light' },
                    )}
                >
                    <FontAwesomeIcon icon={faClose} className="text-white" />
                </div>
            </div>
        </div>
    );
}

export default Detail;

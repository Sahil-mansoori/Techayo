import { useState } from 'react';
import './Shopnavbar.css'
import { IoMenu } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import Button from '../Utils/Button';
// import Footer from "../Utils/Footer";


function Navbar12() {

    const [isclicked, setclicked] = useState(false)

    return (

        <>
            <div className='nav1'>
                <input type='search' />

                <div>
                    <ul id={isclicked ? "navbar12" : "navbar1"}>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">contact</a>
                        </li>
                        <li>
                            <a href="">service</a>
                        </li>
                    </ul>
                </div>
                <button className='menu_icons' style={{ cursor: 'pointer' }} onClick={() => setclicked(!isclicked)}>
                    {
                        isclicked ?
                            <MdOutlineClear /> : <IoMenu />

                    }

                </button>




            </div>
        </>
    )
}

// console.log('hiijojfsdfs')

function Shopbanner(){
    return(
        <div className='shop_banner'>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation


            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide style={{ position: 'relative' }}><img style={{ height: 'auto', width: "100%" }} src='https://techayo-ishi.myshopify.com/cdn/shop/collections/categories-Banner.png?v=1559630548' alt='' />
            </SwiperSlide>
        </Swiper>
    </div>
    )
}

export  {Navbar12,Shopbanner}
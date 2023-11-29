
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './Home.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import Button from '../Utils/Button';
import Footer from "../Utils/Footer";
import { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



function Home() {

    const Navigate = useNavigate();

    const url = 'http://localhost:5200/HomeProduct';


    const [getHomedata, setHomedata] = useState([''])






    //<===================================== Functions ==========================================>

    const getApi = () => {
        axios.get(url).then((res) => setHomedata(res.data)).catch((err) => console.log(err))
    }

    useEffect(() => {
        getApi()
    }, [])

    // console.log("gethome data =======>",getHomedata)


    return (
        <section className="Home">
            {/* // banner section / Hero section */}
            <div className='banner_container' >
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Autoplay, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide style={{ position: 'relative' }}><img style={{ height: 'auto', width: "100%" }} src='https://techayo-ishi.myshopify.com/cdn/shop/files/slide-1.jpg?v=1645850793' alt='' />

                        <div className='banner_text' >
                            <h6 style={{ color: "rgb(210, 54, 133)" }}>Silver Aluminum</h6>
                            <h2 style={{ fontWeight: "bolder", color: 'black' }}>APPLE WATCH</h2>
                            <p className="dis">30% off at your first order</p>
                            <Button className="btnc" text="Shop Now" onclick={() => Navigate('/Product')} />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide style={{ position: 'relative' }}><img style={{ height: 'auto', width: "100%" }} src='https://opsg-img-cdn-gl.heytapimg.com/epb/202308/14/nJRCpevsEbFS3T2r.jpg?x-amz-process=image/format,webp/quality,Q_80' alt='' />

                        <div className='banner_text' >
                            <h2 style={{ fontWeight: "bolder", color: 'rgb(228, 228, 229)' }}>OPPO A79 5G</h2>
                            <h6 style={{ color: "black" }}>Glowing Design</h6>
                            <p className="dis">20% instant Discount</p>
                            <Button className="btnc" text="Shop Now" onclick={() => Navigate('/Product')} />
                        </div>
                    </SwiperSlide>


                    <SwiperSlide style={{ position: 'relative' }}><img style={{ height: 'auto', width: "100%" }} src='https://opsg-img-cdn-gl.heytapimg.com/epb/202311/17/sCoQhrggyp37wm0E.jpg?x-amz-process=image/format,webp/quality,Q_80' alt='' />

                        <div className='banner_text banner12'  >
                            <h2 style={{ fontWeight: "bolder", color: 'black' }}>OPPO A79 5G</h2>
                            <h6 style={{ color: "black" }}>Glowing Design</h6>
                            <p className="dis">10% instant Discount</p>
                            <Button className="btnc" text="Shop Now" onclick={() => Navigate('/Product')} />
                        </div>

                    </SwiperSlide>

                </Swiper>
            </div>

            {/* three mini banner */}
            <div className='mini_banner'>
                <div>
                    <img src='https://techayo-ishi.myshopify.com/cdn/shop/files/Banner-1.png?v=1614295738' alt='' />
                </div>

                <div >
                    <img src='https://techayo-ishi.myshopify.com/cdn/shop/files/Banner-2.png?v=1614295742' alt='' />
                </div>

                <div >
                    <img src='https://techayo-ishi.myshopify.com/cdn/shop/files/Banner-3.png?v=1614295738' alt='' />
                </div>

            </div>

            {/* trending products */}
            <div className='trending_products' >
                <h5 style={{ textAlign: 'center', backgroundColor: "rgb(236, 237, 238)", padding: "7px", fontWeight: "bolder", letterSpacing: '1px', color: "black" }}>TRENDING PRODUCT</h5>
                <div className='Products_cards'>

                    {
                        getHomedata.map((item,index) => {
                            return (
                                <div key={item.id} onClick={() => Navigate('/Product')} className="card" style={{ width: "16rem", border: "2px solid rgb(228, 228, 229)",cursor:'pointer' }}>
                                    <div className="show" style={{ padding: "5px 30px" }}>
                                        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                                            <img className="card-img-top" style={{ width: "8rem", padding: "10px 0px" }} src={item.img} alt="Card image cap" />
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h5 style={{ color: 'black ' }} className="card-title">{item.Pname}</h5>
                                        <p style={{ fontSize: "13px" }} className="card-text">{item.Details}</p>
                                        <p style={{ color: 'rgb(214, 38, 126)', display: "flex", justifyContent: "space-between", alignItems: 'center', marginBottom: '-5px' }}>Rs. {item.price}
                                            <Button className='addtocartbtn' onclick={() => Navigate('/Product')} text="Add to cart" />
                                        </p>

                                    </div>
                                </div>
                            )
                        })
                    }
                    <div style={{ marginBottom: "20px", marginTop: "30px" }}>
                    <Button className="btnc" text="View More" onclick={() => Navigate('/Product')} />
                    </div>

                </div>

            </div>

            {/* Slide banner */}
            <div className="slide_banner">
            </div>


            {/* products slide */}

            <div className="product_slide">

                <div className="box">
                    <img src="https://techayo-ishi.myshopify.com/cdn/shop/files/Multi-Banner-1.png?v=1614295758" alt="" />
                </div>


                <div className="box">
                    <img src="https://techayo-ishi.myshopify.com/cdn/shop/files/Multi-Banner-2.png?v=1614295758" alt="" />
                </div>


                <div className="box">
                    <img src="https://techayo-ishi.myshopify.com/cdn/shop/files/Multi-banner-3_a604b876-30e9-4bb7-a1c4-674fe9718e54.png?v=1614295758" alt="" />
                </div>


                <div className="box">
                    <img src="https://techayo-ishi.myshopify.com/cdn/shop/files/Multi-banner-4.png?v=1614295758" alt="" />
                </div>

                <div className="box">
                    <img className="longbox_slidebanner" src="https://techayo-ishi.myshopify.com/cdn/shop/files/Multi-Banner-5.png?v=1614295758" alt="" />
                </div>
            </div>

            <Footer />

        </section>



    )
}

export default Home
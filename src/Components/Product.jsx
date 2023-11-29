import { Navbar12, Shopbanner } from "./Shopnavbar";
import { BiSolidCategory } from "react-icons/bi";
import './Product.css'
import { FaRegCircle } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Button from '../Utils/Button';
import Footer from "../Utils/Footer";
import { useEffect, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";


function Product(Props) {

    const Navigate = useNavigate();
    const [isclicked, setclicked] = useState(false)

    const filterbutton = ['All Product', 'Tablet', 'Headphone', 'Watch', 'Mobile', 'Camera', 'TV'];

    const filcolor = ['Black', 'White', 'Blue'];

    const [filtercategory, setfiltercategory] = useState("")
    const [filtercolor, setfiltercolor] = useState("")

    const url = 'http://localhost:5200/productsData';
    const [getProductData, setProductData] = useState(['']);
    const [GotoCart, setGotoCart] = useState(['']);







    //<==================================== Functions ====================================>


    const GetprodAPI = () => {
        axios.get(url).then((res) => setProductData(res.data)).catch((err) => console.log(err))
    }

    useEffect(() => {
        GetprodAPI()
    }, [])

    // console.log('Product api ',getProductData)


    const Addtocart = (e) => {


        if (!localStorage.getItem('userId')) {
            toast.warning('Please login')
            Navigate('/Login')
        }
        else {
            const newdata = {
                productid: e.id,
                img: e.img,
                Pname: e.Pname,
                price: e.price,
                quantity: 1
            }
            axios.post('http://localhost:5200/AddtoCartData', { ...newdata, userId: localStorage.getItem('userId') }).then((res) => console.log(res)).catch((err) => console.log(err))
            toast.success(`${e.Pname} add to cart Successfully`, {
                position: "top-center",
                theme: "dark",
            });
        }

    }







    return (
        <div style={{ paddingTop: '100px' }}>
            <Shopbanner />

            <div className="linenavbar" >
                <div className='nav1'>
                    <h5>Filter</h5>
                    <div>
                        <ul id={isclicked ? "navbar12" : "navbar1"}>

                            <h4 style={{ display: "flex", gap: "10px" }}><BiSolidCategory style={{ color: 'white' }} />
                                <p style={{ fontSize: "18px", fontWeight: 'bold', position: 'relative', top: '5px', color: 'white' }}>CATEGORY</p></h4>

                            {
                                filterbutton.map((item) => {
                                    return (
                                        <li>
                                            <button style={{ backgroundColor: 'transparent', color: 'white', border: 'none' }} onClick={(e) => setfiltercategory(item)}>{item}</button>
                                        </li>

                                    )
                                })
                            }

                            <p style={{ fontSize: "18px", fontWeight: 'bold', position: 'relative', top: '10px', textAlign: 'center', left: "-7px", marginTop: "10px",color:"white" }}>COLOR</p>


                            {
                                filcolor.map((item) => {
                                    return (

                                        <div className="colorbox">
                                            <p style={{ backgroundColor: 'white',width:'8px',height:'8px',marginTop:"8px" }}> </p>
                                            <button style={{color:"white"}} onClick={(e) => setfiltercolor(item)}>{item}</button>
                                        </div>
                                    )
                                })
                            }


                        </ul>


                    </div>
                    <button className='menu_icons' style={{ cursor: 'pointer' }} onClick={() => setclicked(!isclicked)}>
                        {
                            isclicked ?
                                <MdOutlineClear /> : <IoMenu />

                        }

                    </button>




                </div>
            </div>


            <div className="Productcontroller">

                {/*<============================= sidebar/category Section =====================================> */}

                <div className="sidebar">

                    <div className="Category">
                        <h4><BiSolidCategory /> </h4>
                        <p style={{ fontSize: "18px", fontWeight: 'bold', position: 'relative', top: '5px' }}>CATEGORY</p>
                    </div>
                    <div className="category_butoons">
                        {
                            filterbutton.map((item) => {
                                return (
                                    <button onClick={(e) => setfiltercategory(item)}>{item}</button>
                                )
                            })
                        }

                    </div>

                    <div className="category_color">
                        <p style={{ fontSize: "18px", fontWeight: 'bold', position: 'relative', top: '10px', textAlign: 'center', left: "-7px", marginTop: "10px" }}>COLOR</p>


                        {
                            filcolor.map((item) => {
                                return (

                                    <div className="colorbox">
                                        <input type="checkbox" />
                                        {/* <p style={{ backgroundColor: {item} }}> </p> */}
                                        <button onClick={(e) => setfiltercolor(item)}>{item}</button>
                                    </div>
                                )
                            })
                        }

                    </div>


                </div>

                {/*<============================= Product Section =====================================> */}

                <div className="Main_container">

                    <h5 style={{ textAlign: 'center', backgroundColor: "rgb(236, 237, 238)", padding: "7px", fontWeight: "bolder", letterSpacing: '1px', color: "black" }}>TRENDING PRODUCT</h5>

                    <div className="products_container">



                        {/* .filter((ditem)=>ditem.title.includes(filtercategory)) */}

                        {
                            getProductData && getProductData.filter((item) => item?.title?.toLowerCase().includes(filtercategory.toLowerCase()||Props.Globalsearch.toLowerCase()) || filtercategory === "All Product").filter((item) => item?.color?.toLowerCase().includes(filtercolor.toLowerCase())).map((item) => {
                                return (
                                    <div className="card" key={item.id} style={{ width: "16rem", border: "2px solid rgb(228, 228, 229)", marginBottom: "35px" }}>
                                        <div className="show" style={{ padding: "5px 30px" }}>
                                            <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                                                <img className="card-img-top" style={{ width: "8rem", padding: "10px 0px" }} src={item.img} alt="Card image cap" />
                                            </div>

                                            <div className='showicons' >
                                                <p style={{ borderBottom: '1px solid rgb(193, 193, 193)' }} ><FaCartPlus onClick={() => Addtocart(item)} /></p>
                                                <p ><CiHeart /></p>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h5 style={{ color: 'black ' }} className="card-title">{item.Pname}</h5>
                                            <p style={{ fontSize: "13px" }} className="card-text">{item.Details}</p>
                                            <p style={{ color: 'rgb(214, 38, 126)', display: "flex", justifyContent: "space-between", alignItems: 'center', marginBottom: '-5px' }}>Rs. {item.price}
                                                <Button className='addtocartbtn' text="Add to cart" onclick={() => Addtocart(item)} />
                                            </p>

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>

            <div style={{ marginTop: '100px' }}>
                <Footer />
            </div>

        </div>
    )
}

export default Product
import { useState } from 'react';
import './Navbar.css'
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import { NavLink, Navigate, useNavigate } from 'react-router-dom'



function Navbar(props) {
    const Navigate = useNavigate()

    const [ismobile, setmobile] = useState(false)
    return (
        <section className="navabr_container">
            <nav >
                <div className="containernav"   >
                    <div className='logocontainer'>

                        <div className='logo'>
                            <img className='logoimg' src="https://techayo-ishi.myshopify.com/cdn/shop/files/Logo_large_7f435a99-3203-4e46-976d-678a5aeb8f5c_large.png?v=1645849203" alt="" />
                        </div>
                        <div>
                            <input type="search" placeholder='Search items' className='seatchinput' onChange={(e) => {
                                Navigate('/Product')
                                props.Gsearchinput(e.target.value)}} />
                            <button className='searchbtn'><IoSearchSharp /></button>
                        </div>

                    </div>



                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative', top: '7px' }}>
                        <div className={ismobile ? 'menu_bar1' : 'menu_bar'} >
                            <ul className='navbarset'>
                                <li>
                                    <NavLink className='mobile_color' to='/'>Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/About'>About</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/Product'>Shop</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/Contact'>Contact</NavLink>
                                </li>
                            </ul>

                        </div>
                        <div className='social_icons' >
                            <NavLink to="/Cart" className='carticons'><FaCartArrowDown /><sup style={{ color: 'red', fontSize: "15px" }}>{props.GotoCart}</sup></NavLink>

                            {
                                localStorage.getItem('userId') ? <p> <NavLink to="/Login" style={{ color: "red" }} onClick={() => {
                                    localStorage.clear()
                                    Navigate('/Login')
                                }
                                }>Logout</NavLink></p>

                                    : <p> <NavLink to="/Login" style={{ color: "green" }}>Login</NavLink></p>
                            }


                            <p className='mobile_menu' ><button style={{ border: 'none', backgroundColor: "transparent" }} onClick={(e) => {
                                e.preventDefault();
                                setmobile(!ismobile)
                            }} >
                                {
                                    ismobile ? <MdClear /> : <IoMdMenu />
                                }
                            </button> </p>
                        </div>
                    </div>

                </div>


            </nav>

        </section>
    )
}

export default Navbar
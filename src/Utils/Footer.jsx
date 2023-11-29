
import './Footer.css'
import { NavLink } from 'react-router-dom'
import { MdAddCall } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";



function Footer() {
    return (
        <>
            <section className="footer_container">
                <h1 style={{ textAlign: "center" }}>
                    <img src="https://techayo-ishi.myshopify.com/cdn/shop/files/Logo_large_7f435a99-3203-4e46-976d-678a5aeb8f5c_large.png?v=1645849203" alt="" />
                </h1>
                <div className='fconatiner'>

                    <div className='dev_inf'>
                        <h5 style={{ color: 'black' }}>Developer Contact</h5>
                        <p><MdAddCall /> :- 8287257519</p>
                        <p><FaAddressBook /> :- Sec-35 Noida, U.P</p>
                        <p><IoMdMail /> :- mansoorisahil340@gmail.com</p>
                        <div className='socail_icons'>
                            <a href='https://github.com/Sahil-mansoori'><FaGithub /></a>
                            <a href='https://www.linkedin.com/in/sahilmansoori123'><FaLinkedinIn /></a>
                            <a href='mailTo:mansoorisahil340@gmail.com'><IoMdMail /></a>
                            <a style={{ padding: "5px", borderRadius: "5px" }} href='https://sahil-mansoori.github.io/Sahil_Portfolio/'>my portfolio</a>
                        </div>
                    </div>

                    <div className='menu'>
                        <ul>
                            <li>
                                <h5 style={{ color: 'black' }}>Menu</h5>
                            </li>
                            <li>
                                <NavLink to='' >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='' >About</NavLink>
                            </li>
                            <li>
                                <NavLink to='' >Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to='' >Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>


            </section >
            <p style={{ textAlign: 'center', color: 'white', backgroundColor: 'black', padding: "10px",letterSpacing:".5px" }}> Techayo made by Sahil</p>
        </>

    )
}

export default Footer
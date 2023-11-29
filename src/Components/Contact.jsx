

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Footer from "../Utils/Footer";
import './Contact.css'


function Contact() {
    return (
        <>
            <section style={{ paddingTop: '100px' }}>

            <h3 style={{ textAlign: 'center', padding: "20px" }}> # CONTACT </h3>

                <div className="main_cont" >
                    <div>
                        <img style={{ width: '100%', height: 'auto' }} src="https://techayo-ishi.myshopify.com/cdn/shop/files/Contact_e1d28a21-8faa-4ce4-b7b4-06c2f2ab859d.jpg?v=1646134517" alt="" />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: "50px", flexWrap: 'wrap' }}>
                        <div> <h1>GET IN TOUCH</h1>
                            <p>We'd Love to Hear From You, Lets Get In Touch!</p></div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', flexWrap: 'wrap' }}>
                            <div>
                                <h4>Address</h4>
                                <p>Panachsheel park, New Delhi</p>
                                <h4>Email</h4>
                                <p>mansoorisahil340@gmail.com</p>
                                <h6>social icons</h6>
                                <div className='socail_icons' style={{ flexWrap: 'wrap', display: 'flex' }}>
                                    <a href='https://github.com/Sahil-mansoori'><FaGithub /></a>
                                    <a href='https://www.linkedin.com/in/sahilmansoori123'><FaLinkedinIn /></a>
                                    <a href='mailTo:mansoorisahil340@gmail.com'><IoMdMail /></a>
                                    <a style={{ padding: "5px", borderRadius: "5px" }} href='https://sahil-mansoori.github.io/Sahil_Portfolio/'>my portfolio</a>
                                </div>
                            </div>

                            <div>
                                <h4>Phone</h4>
                                <p>8287257519</p>
                                <h4>Additonnal information</h4>
                                <p>We are open: Monday - Saturday,<br></br> 10AM - 5PM and closed on <br></br>sunday sorry for that.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section style={{ padding: "10px 80px" }}>
                <div className="message" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>

                    <h1 style={{ textAlign: 'center', fontWeight: 'bolder', letterSpacing: '2px', padding: "30px" }}>LEAVE US A MESSAGE</h1>

                    <div className="inputbox">
                        <input type="text" placeholder="Enter name" />
                        <input type="text" placeholder="Enter email" />
                        <input type="text" placeholder="Phone number" />
                        <textarea name="comment" id="messages" placeholder="Comment"></textarea>
                    </div>
                    <button className="btn btn-warning" style={{ width: "90px", fontSize: '20px', letterSpacing: '1px' }}>Send</button>

                </div>
            </section>

            <div style={{ marginTop: '150px' }}>
                <Footer />
            </div>

        </>

    )
}

export default Contact
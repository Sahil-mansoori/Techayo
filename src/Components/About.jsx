import Button from "../Utils/Button"
import './About.css';
import Footer from "../Utils/Footer";


function About() {
    return (
        <section style={{ paddingTop: '100px' }}>
            <h3 style={{ textAlign: 'center', padding: "20px" }}> # ABOUT US </h3>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: "wrap", gap: "50px", alignItems: "center" }}>
                <div className="boxsett" >
                    <img style={{ width: "100%", height: "auto" }} src="https://techayo-ishi.myshopify.com/cdn/shop/files/About-Us-Page-2_ce3f4086-aea9-4a85-b87b-4c072ae07b46.png?v=1646134516" alt="" />
                </div>
                <div className="boxsett" >
                    <h2>We Have Everything You Need ?</h2>
                    <p>Modern watches come with modern features, such as water resistance and more accurate hand movement. As well as being made with overall better quality materials, making the chances of smashing your watch case slimmer compared to traditional styles.</p>
                    <h4>Sample Unordered List</h4>
                    <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                    <li>Dummy text used in laying out print, graphic or web designs</li>
                    <li>The passage is attributed to.</li>
                    <li>Proin molestie egestas orci ac suscipit risus posuere loremou.</li>
                    <li style={{ marginBottom: "20px" }}>Dummy text used in laying out print, graphic or web designs</li>
                    <Button className='addtocartbtn' text="Contact us" />
                </div>

            </div>


            {/* Services section */}
            <div style={{marginTop:"100px"}}>
                <h3 style={{ textAlign: 'center', padding: "40px", fontWeight: 'bold' }}>Our Services</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

                    <div style={{ textAlign: 'center', width: "300px" }}>
                        <h5 style={{ fontWeight: "bold" }}>FREE RESOURCES</h5>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination</p>
                    </div>

                    <div style={{ textAlign: 'center', width: "300px" }}>
                        <h5 style={{ fontWeight: "bold" }}>MULTI PURPOSE</h5>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination</p>
                    </div>


                    <div style={{ textAlign: 'center', width: "300px" }}>
                        <h5 style={{ fontWeight: "bold" }}>FULLY RESPONSIVE</h5>
                        <p>Bring to the table win-win survival strategies to ensure proactive domination</p>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: "wrap", gap: "50px", alignItems: "center", marginTop: "100px" }}>


                <div className="boxsett" >
                    <h2>We Have Everything You Need ?</h2>
                    <p>Modern watches come with modern features, such as water resistance and more accurate hand movement. As well as being made with overall better quality materials, making the chances of smashing your watch case slimmer compared to traditional styles.</p>
                    <h4>Sample Unordered List</h4>
                    <li>Lorem ipsum, or lipsum as it is sometimes known</li>
                    <li>Dummy text used in laying out print, graphic or web designs</li>
                    <li>The passage is attributed to.</li>
                    <li>Proin molestie egestas orci ac suscipit risus posuere loremou.</li>
                    <li style={{ marginBottom: "20px" }}>Dummy text used in laying out print, graphic or web designs</li>
                    <Button className='addtocartbtn' text="Contact us" />
                </div>


                <div className="boxsett" >
                    <img style={{ width: "100%", height: "auto" }} src="https://techayo-ishi.myshopify.com/cdn/shop/files/Contact_e1d28a21-8faa-4ce4-b7b4-06c2f2ab859d.jpg?v=1646134517" alt="" />
                </div>

            </div>
            <div style={{ marginTop:'200px'}}>
                <Footer />
            </div>

        </section>
    )
}

export default About
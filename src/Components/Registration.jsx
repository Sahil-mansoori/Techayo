
import { useEffect, useState } from "react"
import "./Registration.css"
import { Link } from "react-router-dom"
import axios from 'axios'
import { toast } from 'react-toastify'





function Registration() {


    const url = 'http://localhost:5200/RegistrationData';

    const regdata = {
        name: null,
        email: null,
        contact: null,
        gender: null,
        password: null,
    };

    const [reginput, setreginput] = useState(regdata);

    // <========================= Functions =====================================>
    const handlechangereginput = (e) => {
        const { value, id } = e.target
        setreginput({
            ...reginput,
            [id]: value
        })
    }

    const handlecreateAcc = (e) => {
        e.preventDefault()
        axios.post(url, reginput).then((res) => console.log(res)).catch((err) => console.log(err))
        toast.success("Created your A/c successfully")

        document.getElementById('name').value="";
        document.getElementById('email').value="";
        document.getElementById('contact').value="";
        document.getElementById('gender').value="";
        document.getElementById('password').value="";
    }



    useEffect(() => {
        console.log(localStorage.getItem('userId'))
    },[])


    return (

        <section className="regcontainer" style={{ backgroundColor: "wheat", paddingTop: "90px", paddingBottom: "50px" }}>
            <div className="form" >
                <h1 style={{ textAlign: "center", color: "black", letterSpacing: "2px", fontWeight: "bold", paddingBottom: "10px", paddingTop: "10px" }}>Registration</h1>
                <p className="message" style={{ marginBottom: "50px", paddingLeft: "10px" }}>Signup now and get full access to our app. </p>

                <label>
                    <input type="text" className="input" id="name" style={{textTransform:'capitalize'}} onChange={handlechangereginput} />
                    <span>Full_Name</span>
                </label>

                <label>
                    <input type="text" className="input" id="email" onChange={handlechangereginput} />
                    <span>Email</span>
                </label>

                <label>
                    <input type="text" className="input" id="contact" onChange={handlechangereginput} />
                    <span>Contact no.</span>
                </label>

                <label>
                    <input type="text" className="input" id="gender" onChange={handlechangereginput} />
                    <span>Gender</span>
                </label>

                <label>
                    <input id="password" type="password" className="input" onChange={handlechangereginput} />
                    <span>Password</span>
                </label>

                <button className="submit" onClick={handlecreateAcc}>Create Account</button>
                <p className="signin" style={{ marginTop: "10px" }}>
                    Already have an acount ? <Link to="/Login" style={{ fontSize: "20px" }}>sign in</Link>
                </p>
            </div>
        </section>

    )
}

export default Registration
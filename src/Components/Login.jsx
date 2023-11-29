import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify'
import { useNavigate, NavLink, Link } from "react-router-dom";

import './Login.css'



function Login() {

  const url = 'http://localhost:5200/RegistrationData';
  const Navigate = useNavigate()

  const [logininput, setlogininput] = useState({
    email: null,
    password: null
  })
  const [getUseracc, setUseracc] = useState([]);

  // login input value get
  const handlelogininput = (e) => {
    const { value, id } = e.target;
    setlogininput({
      ...logininput,
      [id]: value
    })
  }
  // console.log("login input =>",logininput)

  const hadleloginbtn = (e) => {
    const { email, password } = logininput

    let emailinput = document.getElementById('email').value;
    let passwordinput = document.getElementById('password').value;

    const isexist = getUseracc.filter((item) => item.email == email && item.password == password)

    if (emailinput == '' && passwordinput == '') {
      toast.warning('Please fill the form carefully')
    }
    else if (isexist.length === 0) {
      toast.error("invalid credantial")
    }
    else {
      const [user] = isexist
      toast.success(`${user.name},Login successfully`)
      localStorage.setItem("userId", user.id)
      Navigate('/product')
    }
  }




  // getdata from registatration account
  const GetDataApi = () => {
    axios.get(url).then((res) => setUseracc(res.data)).catch((err) => console.log(err))
  }
  useEffect(() => {
    GetDataApi()
  }, [])

  const handlereset = () => {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }


  return (
    <section className="vh-50 containerset " style={{ backgroundColor: "wheat", paddingTop: "100px" }}>
      <div className="col-md-6 col-lg-4 d-flex align-items-center bordersetlogin" style={{padding: "20px",margin:"auto" }}>
        <div className="card-body p-4 p-lg-5 text-black" style={{ border: "1px solid red",backgroundColor:"white",borderRadius:"10px" }}>
          <form >
            <h2 style={{ textAlign: "center", marginTop: "-20px", marginBottom: "30px", fontWeight: "bolder" }}>Login Form</h2>
            <h5
              className="fw-normal mb-3 pb-3"
              style={{ letterSpacing: 1 }}
            >
              Sign into your account
            </h5>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example17">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form-control form-control-lg"
                onChange={handlelogininput}
              />

            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example27">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control form-control-lg"
                onChange={handlelogininput}
              />

            </div>
            <div className="pt-1 mb-4" style={{ display: "flex", justifyContent: "space-between" }}>

              <button
                className="btn btn-danger btn-lg btn-block"
                type="button"
                onClick={handlereset} > Reset </button>


              <button
                className="btn btn-success btn-lg btn-block"
                type="button"
                onClick={hadleloginbtn}> Login </button>


            </div>

            <p style={{ color: "#393f81", fontSize: "15px" }}>
              Don't have an account? &nbsp;
              <Link to="/Registration" style={{ color: "#393f81" }}>
                Register here
              </Link>
            </p>

          </form>
        </div>
      </div>
    </section>

  )
}
export default Login
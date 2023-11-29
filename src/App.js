
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Contact from './Components/Contact';
import About from './Components/About';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const url = 'http://localhost:5200/AddtoCartData'

  const [GotoCart, setGotoCart] = useState(['']);
  const [Globalsearch, setGlobalsearch] = useState('');


  const getcartDataApi = () => {
    axios.get(url).then((res) => {

      const data = res.data.filter((item) => item.userId == localStorage.getItem('userId'))
      setGotoCart(data)
    }
    ).catch((err) => console.log(err))
  }


  // 

  // 




  useEffect(() => {
    getcartDataApi()
  }, [getcartDataApi])



  const Removeaddtocart = (e) => {
    const { id, Pname } = e
    axios.delete(`http://localhost:5200/AddtoCartData/${id}`).then((res) => {
      console.log(res)
      getcartDataApi()
      toast.error(`${Pname} Remove from your cart list`, {
        theme: "dark"
      })
    }
    ).catch((err) => console.log(err))
  }

  const Gsearchinput = (e) => {
    setGlobalsearch(e)
  }

  // console.log(Globalsearch)


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar Gsearchinput={Gsearchinput} GotoCart={GotoCart.length} />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Product' element={<Product Globalsearch={Globalsearch} />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Cart' element={<Cart GotoCart={GotoCart} Remove={Removeaddtocart} getcartDataApi={getcartDataApi} />} />
          <Route path='Login' element={<Login />} />
          <Route path='Registration' element={<Registration />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

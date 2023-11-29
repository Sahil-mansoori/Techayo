
import { useEffect, useState } from 'react'
import './Cart.css'
import { MdOutlineClear } from "react-icons/md";
import axios from 'axios';





function Cart(props) {




    const handlecountproductqty = (data, opertaion) => {
        const { id, quantity } = data
        let body = {
            quantity: opertaion === '+' ? quantity + 1 : quantity === 1 ? quantity : quantity - 1
        }
        axios.patch(`http://localhost:5200/AddtoCartData/${id}`, body).then((res) => {
            props.getcartDataApi()
            console.log(res)
        }).catch((err) => console.log(err))

        console.log()
    }

    

    return (
        <section className='Cartcont' style={{ backgroundColor: 'rgb(252, 245, 237)', paddingBottom: "10px"}}>

            <h1 style={{ color: 'black', textAlign: "center", paddingTop: "100px" }}># Add to cart list</h1>
            <div className='card_mainconatiner' >
                <div>


                    {

                        props.GotoCart.length === 0 ? <h1 style={{ marginTop: "120px", color: 'red' }}> Rigth Now Cart is empty !</h1> :

                            props.GotoCart.map((item) => {
                                return (
                                    <div className='cart_card'>
                                        <img src={item.img} style={{ width: "80px" }} />
                                        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column" }}>
                                            <p className='productmobile' style={{ marginTop: "20px", marginBottom: '1px', fontWeight: "bold" }} >{item.Pname}</p>
                                            <p className='productmobile'>Rs. {item.price}</p>
                                        </div>

                                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

                                            <button className='btnset' onClick={() => handlecountproductqty(item, "-")} >-</button>

                                            <p style={{ marginTop: '20px' }}>{item.quantity}</p>

                                            <button className='btnset' onClick={() => handlecountproductqty(item, "+")}>+</button>

                                        </div>


                                        <button className='clerbtn' onClick={() => props.Remove(item)} ><MdOutlineClear /></button>
                                    </div>
                                )
                            })
                    }


                </div>



                {/* total amount cart */}
                <div className='totalamoutset'>
                    <h3 style={{ color: 'green', textAlign: 'center', paddingBottom: "20px" }}>Total Amoutnt</h3>

                    {
                        props.GotoCart.map((item) => {
                            return (
                                <div style={{ display: 'flex', justifyContent: "start", gap: "10px", alignItems: "center" }}>
                                    <h5 style={{ paddingLeft: "10px" }}>{item.Pname} <strong>:</strong></h5>
                                    <h5 style={{ paddingRight: "20px" }}>{item.price * item.quantity}</h5>
                                </div>
                            )
                        })
                    }

                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", borderTop: '1px solid black' }}>
                        <h4> Total (Rs) :</h4>
                        <p style={{ fontSize: "20px", fontWeight: "bolder", paddingTop: '10px', paddingLeft: "10px" }}>
                            {
                                props.GotoCart.map(item => item.price * item.quantity).reduce((total, value) => (total + value), 0)
                            }
                        </p>
                    </div>

                </div>

            </div>
        </section>

    )
}
export default Cart
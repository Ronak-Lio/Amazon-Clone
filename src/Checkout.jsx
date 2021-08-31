import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import img5 from './images/img5.PNG'
import Subtotal from './Subtotal'
import {useStateValue} from "./StateProvider"

function Checkout() {

    const[{basket , user} , dispatch] = useStateValue();


    return (
        <div className="checkout">
           <div className="checkout_left">
               <img
               className="checkout_ad"
               src= {img5} 
               alt="" />
               <div>
                   <h3>Hello , {user? user.email : ""}</h3>
                   <h2 className="checkout_title">
                       Your Shopping Basket
                       {basket.map(item => (
                           <CheckoutProduct
                           id = {item.id}
                           title = {item.title}
                           image = {item.image}
                           price = {item.price}
                           rating = {item.rating}
                           />
                       ))}
                   </h2>
               </div>
           </div>

           <div className="checkout_right">
               <Subtotal/>
           </div>
        </div>
    )
}

export default Checkout


import react from 'react'
import { useState, useEffect } from 'react'


function Cart(setShow, cart, setCart) {
    
    return (
        <div>
                   <div className="cart" onClick={() => setShow(false)}>
            <span>
<link className="thecart" href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
            <i className="shop" class='bx bx-store'></i>
                <span>{cart.length}</span>
            </span>
            </div>


       
        

    </div>
    )
}

export default Cart
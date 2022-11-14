import React from 'react'
import { Link } from 'react-router-dom'
import MakeupDepot from './MakeupDepot'
import { useState } from 'react'


export default function Nav ({setShow, cart, setCart}) {
   

    return (
        <div className="navbar">
            <Link to ="/">Home</Link>
            <Link to ="/MakeupDepot"> Makeup-Depot Collection</Link>
           
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

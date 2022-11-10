import React from 'react'
import { Link } from 'react-router-dom'
import MakeupDepot from './MakeupDepot'
import { useState } from 'react'


export default function Nav ({setShow}) {
   

    return (
        <div className="navbar">
            <Link to ="/">Home</Link>
            <Link to ="/MakeupDepot"> Makeup-Depot Collection</Link>
           
            <div className="cart" onClick={() => setShow(false)}>
            <span>
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
            <i class='bx bx-store'></i>
                <span>0</span>
            </span>
            </div>
        </div>
    )

}

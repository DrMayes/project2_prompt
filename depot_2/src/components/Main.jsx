import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import MakeupDepot from './MakeupDepot'
import { useState, useEffect } from 'react'




export default function Main (props) {

   
   
    return (
        <div>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/MakeupDepot" element={<MakeupDepot cart={props.cart} setCart={props.setCart}/>}/>
</Routes>


        </div>
    )

}

import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import MakeupDepot from './MakeupDepot'




export default function Main () {
   
    return (
        <div>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/MakeupDepot" element={<MakeupDepot/>}/>
</Routes>


        </div>
    )

}

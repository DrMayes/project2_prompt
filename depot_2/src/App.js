import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import MakeupDepot from './components/MakeupDepot'
import Nav from './components/Nav'
import Cart from './components/Cart'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'boxicons'




function App() {

  // const [show, setShow] = useState(true)
  // const [cart, setCart] = useState([])



  // const handleClick = (product) => {
  //     // cart.push(product)
  //     // console.log(cart)
  //     if (cart.indexOf(product) !== -1) return;
  //     setCart([...cart, product])
  // }

  // const handleChange = (product, d) => {
  //   const ind = cart.indexOf(product)
  //   const arr = cart
  //   arr[ind].amount +=d

  //   if (arr[ind].amount === 0) arr[ind].amount =1
  //   setCart([...arr])
  // }

  // useEffect(() => {
  //   console.log("cart chnage")
  // }, [cart])




  // const [products, setProducts] = useState('')



 
  
  //click on items then get the contents of items to the handle click function and the function will give the content to the set cart items function and the items will change the stage of the product by adding to the set items array
  
  // useEffect(() => {
      
  
  // const getData = async () =>{
  
  // const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
  // console.log(response.data)
  
  // setProducts(response.data)
  // }
  // getData()
  
  // }, [])
  







  return (
    <div className="App">
<div>
    <Header/>
</div>

<div>
  <Main  /> 
</div>

<div>
  
</div>
<Footer/>
    </div>
  );
}

export default App;





{/* <Header setShow={setShow} size={cart.lenght}/> */}



// {show? ( 
//   <Main handleClick={handleClick} /> 
//   ) : (
//   <Cart cart={cart} setCart={setCart} handleChange={handleChange}/> 
// )}
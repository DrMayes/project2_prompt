
    const arr1=[]
    const arr2=[]
    const arr3=[]
    const arr4=[]
    const arr5=[]
    const arr6=[]
    const arr7=[]
    const arr8=[]
    fetch ("http://makeup-api.herokuapp.com/api/v1/products.json").then(res=> {
    
          return res.json();
          // console.log(res.json())
      }).then(data=> {
          // console.log(data)
         
          
          for(let i=0;i<data.length;i++){
              if(data[i].brand=="nyx"){
                  arr1.push(data[i])
              }
              if(data[i].brand=="clinique"){
                  arr2.push(data[i])
              }
              if(data[i].brand=="dior"){
                  arr3.push(data[i])
              }
              if(data[i].brand=="benefit"){
                  arr4.push(data[i])
              }
              if(data[i].brand=="l'oreal"){
                  arr5.push(data[i])
              }
              if(data[i].brand=='covergirl'){
                  arr6.push(data[i])
              }
              if(data[i].brand=='maybelline'){
                  arr7.push(data[i])
              }
              if(data[i].brand=='e.l.f.'){
                  arr8.push(data[i])
              }
             
          }
          console.log(arr1);
         
     
      }).catch(e=> {    
          console.log(e)
    
      })
}








  import { useState, useEffect } from 'react'
import axios from 'axios'
export default function MakeupDepot () {

const [products, setProducts] = useState ({})



const [cartItems, setCartItems] = useState ([])


const handleClick = (id) => {
console.log("Makeup")
setCartItems([{id:id,name:"makeup"}])
console.log(cartItems)
}

//click on items then get the contents of items to the handle click function and the function will give the content to the set cart items function and the items will change the stage of the product by adding to the set items array

useEffect(() => {
    

const getData = async () =>{

const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
console.log(response.data)

setProducts(response.data)
}
getData()

}, [])




console.log (products)
console.log (cartItems)



const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/players',
    params: {team: '1', season: '2021'},
    headers: {
      'X-RapidAPI-Key': 'aecea9a6camsh292cbfd0c96dca6p1f8ab8jsn5cd11bb2c02e',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });



    return (
        <div>
            <ul>
                <li></li>
            </ul>
            <button onClick = {(e) => {handleClick(2)}}>Click Me</button>
        </div>
    )

}

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import MakeupDepot from './components/MakeupDepot'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';




function App() {

  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])


const handleClick = (id) => {
console.log("Makeup")
setCartItems([{id:id,name:"makeup"}])
console.log(cartItems)
}

//click on items then get the contents of items to the handle click function and the function will give the content to the set cart items function and the items will change the stage of the product by adding to the set items array

useEffect(() => {
    

const getData = async () =>{

const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
console.log(response.data[0])

setProducts(response.data)
}
getData()

}, [])




console.log (products)
console.log (cartItems)

  return (
    <div className="App">
<div>
    <Header/>
</div>

<div>
  <Main/>
  <MakeupDepot products={products}/>
</div>

<div>
  
</div>
<Footer/>
    </div>
  );
}

export default App;

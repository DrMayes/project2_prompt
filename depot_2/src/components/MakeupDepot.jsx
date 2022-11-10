import { useState, useEffect } from 'react'
import axios from 'axios'





export default function MakeupDepot (props) {
    console.log(props)

    const [products, setProducts] = useState('')
    const [cart, setCart] = useState([])



    const handleClick = (product) => {
        cart.push(product)
        console.log(cart)
    }

    useEffect(() => {
      
  
        const getData = async () =>{
        
        const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
        console.log(response.data)
        
        setProducts(response.data)
        }
        getData()
        
        }, [])


//     return (
//         <div>
//             { props.products && props.products.map((product)=>{
//                     return (<div key={product.id} className="makeup">

// <h3>{product.name}</h3>


// </div>)

//                 })
//             }
//         </div>
//     ) 

    if(products ){
   
        return (
            <div>
                {products.map((product)=>{
                        return (<div key={product.id} className="makeup" handleClick={handleClick}>
    <section >
                    <div className="cards">
    <h3>{product.brand}</h3> 
    <img className="pics" style={{ display: 'block' }} src={product.image_link} alt={product.name} />
     <h4>{product.name}</h4>
    <h5>${product.price}</h5>
    <button onClick={()=>handleClick(product)}className="add-to-cart">Add to Cart</button>
    </div>
    </section>

    
    
    </div>)
    
                    })
                }
            </div>
        )
    
    }else{
        return <div>Still loading the items </div>
    }
    
    }



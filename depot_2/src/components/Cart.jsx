
import react from 'react'
import { useState, useEffect } from 'react'


const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0)

    const handleRemove = (id) => {
        const arr = cart.filter((product) => product.id !== id)
        setCart(arr)
        handlePrice()
    }

    const handlePrice = () => {
        let ans = 0
        cart.map((item) => (ans += item.amount * item.price))
        setPrice(ans)
    }

    useEffect(() => {
        handlePrice()
    })
    return (

        <h2></h2>
        // <article>
        //     {cart.map((product) => (
        //         <div className="cart-box" key={product.id}
        //         <div className="cart-img">
        //             <img src="" alt""/>
        //             <p>title</p>
        //             </div>
        //         </div>
        //         <button onClick={() => handleChange(item, 1)}>+</button>
        //         ))}
        // </article>
    )
    
}

export default Cart
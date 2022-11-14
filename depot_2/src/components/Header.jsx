import Nav from './Nav'


export default function Header (props) {

      
  

    return (
        <div>
            <h2 className="title"> The Makeup-Depot</h2>
            <Nav cart={props.cart} setCart={props.setCart}/>
           
        </div>
    )

}
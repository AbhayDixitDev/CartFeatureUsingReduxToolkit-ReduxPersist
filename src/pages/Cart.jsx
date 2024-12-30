import { useSelector } from "react-redux"
import { Card, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { removeCart,increaseQuantity, decreaseQuantity } from "../redux/cartSlice"

const Cart = () => { 
    
    const data = useSelector(state=>state.cart.cart2)
    const dispatch = useDispatch()
    let totalAmount =0;
    const ans = data.map((item)=>(
      totalAmount += item.price * item.quantity,
        <Card style={{ width: '18rem',margin:"10px" }}>
        <Card.Img variant="top" src={item.image} style={{height:"300px"}}/>
        <Card.Body>
          <Card.Title>{item.name} <br /> Price: {item.price}</Card.Title>
          <Card.Text>
           Description : {item.description} <br />
           Category : {item.category} <br />
            SubCategory : {item.subcategory} <br />
          </Card.Text>
          
           <Card.Body>
                      <button onClick={()=>{dispatch(decreaseQuantity(item.id))}}>-</button> {item.quantity} <button onClick={()=>{dispatch(increaseQuantity(item.id))}}>+</button>
                    </Card.Body>
          <Card.Title>Price to Buy: {item.price * item.quantity}</Card.Title>

          <Button variant="danger" onClick={()=>{dispatch(removeCart(item.id))}}>Remove Cart</Button>
        </Card.Body>
      </Card>
    ))
    return (
      <>
          <h1>Chechout Page : Your Total Amount is {totalAmount} </h1>
           <button>CheckOut</button>

        <div style={{display:"flex",flexWrap:"wrap"}}>
            {ans}

        </div>
        </>
    )
}

export default Cart
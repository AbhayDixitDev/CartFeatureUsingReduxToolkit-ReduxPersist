import { useSelector } from "react-redux"
import { Card, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { removeCart } from "../redux/cartSlice"

const Cart = () => { 
    
    const data = useSelector(state=>state.cart.cart2)
    const dispatch = useDispatch()

    const ans = data.map((item)=>(
        <Card style={{ width: '18rem',margin:"10px" }}>
        <Card.Img variant="top" src={item.image} style={{height:"300px"}}/>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="danger" onClick={()=>{dispatch(removeCart(item.id))}}>Remove Cart</Button>
        </Card.Body>
      </Card>
    ))
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {ans}

        </div>
    )
}

export default Cart
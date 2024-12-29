import axios from "axios";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Home = () => {
 const [data,setData]=useState([]);
 const dispatch = useDispatch();

    useEffect(()=>{
    axios.get("http://localhost:4000/shopping")
    .then((res)=>{
        setData(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    })

    const ans = data.map((item)=>(
        <Card style={{ width: '18rem',margin:"10px" }}>
        <Card.Img variant="top" src={item.image} style={{height:"300px"}}/>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={()=>{dispatch(addToCart(item))}}>Add to cart</Button>
        </Card.Body>
      </Card>
    ))

  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
        {ans}
    </div>
  );
}

export default Home;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Dish = ({dish}) =>{

    const [quantity, setQuantity] = useState(1);
    const dispatch= useDispatch();
return(
    <div >
        <h2>{dish.name}</h2>
        <img className="foto" src={`${dish.img}.jpg`} alt="food"/>
        <p>{dish.name}</p>
        <p>$ {dish.price}</p>
         <ChangeQuantity quantity={ quantity } setQuantity={ setQuantity }/>
        <button onClick = { () => {dispatch(addItemToCart({dish, quantity}));
    }}>Add to cart</button>   
        
    </div>
)
}

export default Dish;

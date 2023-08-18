import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
// import { toast } from "react-hot-toast";


const Product = ({post}) => {
  const cart = useSelector((state)=>state.cart);
  console.log(cart)
  const dispatch = useDispatch();
  const addToCart =()=>{
    dispatch(add(post))
    // toast.success("item added to Cart")
  }

  const removeFromCart =()=>{
    dispatch(remove(post.id))
    // toast.success("item remove from cart")
  }
  return (
    <div>
        <div>
          <p>{post.title}</p>
        </div>
        <div>
          <p>{post.description}</p>
        </div>
        <div>
          <img src={`${post.image}`} />
        </div>
        <div>
          <p>{post.price}</p>
        </div>
        {
          cart.some((p)=> p.id===post.id)?
          (<button onClick={removeFromCart}>
            Remove items
          </button>):(
            <button onClick={addToCart}> 
              Add to Cart
            </button>
          ) 
        }

    </div>
  );
};

export default Product;

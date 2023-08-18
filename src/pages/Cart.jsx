import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0); // Corrected 'totalAmount'
  
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0)); // Corrected 'totalAmount'
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} itemIndex={index} />;
            })}
          </div>
          <div>
            <div>
              <div>Your cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div>
              <p>Total Amount: {totalAmount}</p> {/* Corrected 'totalAmount' */}
              <button>CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty</h1>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

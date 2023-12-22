import { useStateValue } from "../StateProvider/StateProvider";
import { useNavigate } from "react-router-dom";
import "./Subtotal.css"
import numeral from 'numeral';


function Subtotal() {
  const navigate = useNavigate()
    const [{ basket }] = useStateValue();
    const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0); 
 
   const number = getBasketTotal(basket);
  const formattedNumber = numeral(number).format('$0,0.00');
  return (
    <div className="subtotal">
    
          <div>
            <p>
              Subtotal ({basket.length} items): <strong>{formattedNumber}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
      <button  onClick={() => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal
import { Link,useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import "./Payment.css"
import CheckOutProduct from "../CheckoutProduct/CheckOutProduct";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { useEffect, useState } from "react";
import instance from "../Axios/axios";
import { db } from "../File/Firebase";

function Payment() {
  const navigate = useNavigate()
      const [{ basket, user }, dispatch] = useStateValue();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');

  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await instance({
        method: 'post',
       
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      })
      .catch(err => console.log(err));
    
      setClientSecret(response.data.clientSecret);
    }
    

    getClientSecret();
  }, [basket]);



  const handleSubmit = async (event) => {

    event.preventDefault();
    setProcessing(true);
    // eslint-disable-next-line no-unused-vars
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
    
      // eslint-disable-next-line no-unused-vars
      .then(({ paymentIntent }) => {
      
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })
        
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET',
        });

        navigate('/orders');
      });
  }

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>1000 </p>
            <p>Addis abeba</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
                  </div>
                     <div className="payment__details">
            <form onSubmit={handleSubmit} >
              <CardElement onChange={handleChange} />
               <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                 <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}  
            </form>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Payment
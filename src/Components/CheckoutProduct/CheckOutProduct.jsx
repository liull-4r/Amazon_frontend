
import { useStateValue } from "../StateProvider/StateProvider";
import "./CheckoutProduct.css"
function CheckOutProduct({ id, title, image, price, rating,hideButton }) {
    const [, dispatch] = useStateValue();
    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };
  return (
    <div key={id} className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={image}
      />

      <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">{ title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              // eslint-disable-next-line react/jsx-key
              <p>🌟</p>
            ))}
        </div>
       {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckOutProduct
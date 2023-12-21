import { useStateValue } from "../StateProvider/StateProvider";
import "./Product.css";

// eslint-disable-next-line react/prop-types
function Product({ id, title, image, price, rating }) {

  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();



  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title, 
        image: image,
        price: price,
        rating: rating,
      },
    });
  }
  return (
    <div key={id} className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              // eslint-disable-next-line react/jsx-key
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

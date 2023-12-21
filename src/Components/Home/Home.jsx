import { useState } from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => {
      // Calculate the index of the previous image
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => {
     
      const newIndex = (prevIndex + 1) % images.length;
      return newIndex;
    });
  };

  const images = ['https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81KkrQWEHIL._SX3000_.jpg', 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61zAjw4bqPL._SX3000_.jpg', 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Q+c4-cnjL._SX3000_.jpg'];
    const currentImage = images[currentImageIndex];
  return (
    <div>
      <div className="home__container">
        <img className="home__image" src={currentImage} alt={`Image ${currentImageIndex + 1}`} />
       <button style={{position: 'absolute', top: '50%', left: '0'}}   onClick={handlePrevClick}>Previous</button>
      <button style={{position: 'absolute', top: '50%', right: '0'}} onClick={handleNextClick}>Next</button>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v6._SY608_CB573698005_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AmazonExports/Events/2023/GiftGuides/Fuji_Holiday_Gift_guide_Desktop_Card_2x_758x608_EN._SY608_CB576347904_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v1._SY608_CB573698005_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/31f3bj9o63L._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
          />
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41iDzC2UOzL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
          />
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v5._SY608_CB573698005_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

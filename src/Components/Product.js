import React from "react";
import "../Styles/Product.css";

import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
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
  };

  return (
    <div className="groww_skew_forward product win-btn">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price__rating">
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>
                  <StarIcon className="product__ratingStar" />
                </p>
              ))}
          </div>
        </div>
      </div>

      <img src={image} alt="" />

      <div className="product__buttonContainer">
        <button className="product__addButton" onClick={addToBasket}>
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;

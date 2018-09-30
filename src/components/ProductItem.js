import React from "react";
import PropTypes from "prop-types";
const ProductItem = ({ id, name, price, weight, onClick }) => (
  <li
    className="list-group-item"
    onClick={e => {
      e.preventDefault();
      onClick(id);
    }}
  >
    {name}
    <span className="badge badge-primary mx-1">$ {price} </span>
    <span className="badge badge-danger"> {weight} kg</span>
  </li>
);

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired
};

export default ProductItem;

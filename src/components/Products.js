import React from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import { removeProduct } from "../actions/products";
import { addToList } from "../actions/shoppingList";
import { addToSummary } from "../actions/summary";

class Products extends React.Component {
  handelClick = id => {
    const item = this.props.products.find(i => i.id === id);
    this.props.addToList(item);
    this.props.removeProduct(id);
    this.props.addToSummary(item);
  };
  render() {
    return (
      <div className="col-md-4 my-3">
        <h3>Products</h3>
        <ul className="list-group">
          {this.props.products.map(i => (
            <ProductItem
              key={i.id}
              id={i.id}
              name={i.name}
              price={i.price}
              weight={i.weight}
              onClick={this.handelClick}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: i => dispatch(removeProduct(i)),
    addToList: i => dispatch(addToList(i)),
    addToSummary: i => dispatch(addToSummary(i))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

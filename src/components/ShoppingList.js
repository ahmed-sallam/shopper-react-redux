import React from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import { removeFromList } from "../actions/shoppingList";
import { addProduct } from "../actions/products";
import { removeFromSummary } from "../actions/summary";

class ShoppingList extends React.Component {
  handelClick = id => {
    const product = this.props.shoppingList.find(i => i.id === id);
    this.props.addProduct(product);
    this.props.removeFromList(id);
    this.props.removeFromSummary(product);
  };
  render() {
    return (
      <div className="col-md-4 my-3">
        <h3>ShoppingList</h3>
        <ul className="list-group">
          {this.props.shoppingList.map(i => (
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
  shoppingList: state.shoppingList
});

const mapDispatchToProps = dispatch => {
  return {
    removeFromList: i => dispatch(removeFromList(i)),
    addProduct: i => dispatch(addProduct(i)),
    removeFromSummary: i => dispatch(removeFromSummary(i))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);

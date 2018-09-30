import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Summary = ({ summary }) => (
  <div className="col-md-4 my-3">
    <h3>Summary</h3>
    <div className="list-group">
      <h5 className="list-group-item">Total: {summary.total} items</h5>
      <h5 className="list-group-item">Price: $ {summary.price}</h5>
      <h5 className="list-group-item">Weight: {summary.weight} KG</h5>
    </div>
  </div>
);

Summary.propTypes = {
  summary: PropTypes.shape({
    total: PropTypes.number,
    price: PropTypes.number,
    weight: PropTypes.number
  })
};

const mapStateToProps = state => ({
  summary: state.summary
});
export default connect(mapStateToProps)(Summary);

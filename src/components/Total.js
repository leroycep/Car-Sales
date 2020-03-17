import React from "react";
import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h4>
        Total Amount: $
        {props.addedFeatures.reduce((accum, feature) => {
          return accum + feature.price;
        }, props.price)}
      </h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addedFeatures: state.car.features
  };
};

export default connect(mapStateToProps, {})(Total);

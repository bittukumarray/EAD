import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getCrop } from "../../actions/crops";

const Crop = ({ getCrop, crop: { crop, loading }, match }) => {
  useEffect(() => {
    console.log("crop detail");

    getCrop(match.params.id);
    console.log(crop);
  }, [getCrop, match.params.id]);

  return loading || crop === null ? (
    <div>loading</div>
  ) : (
    <Fragment>
      name = {crop.name}
      <hr />
      farmer = name {crop.farmer_name}
      <hr />
      quantity : {crop.quantity}
      <hr />
      price = {crop.price}
      <hr />
      city = {crop.city}
      <hr />
      details = {crop.details}
    </Fragment>
  );
};

Crop.propTypes = {
  getCrop: PropTypes.func.isRequired,
  crop: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  crop: state.crop,
});

export default connect(mapStateToProps, { getCrop })(Crop);

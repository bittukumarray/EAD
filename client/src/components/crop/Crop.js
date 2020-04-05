import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {getCrops} from '../../actions/crops';

const Crop = ({getCrops, crop:{crop},match})=>{
    useEffect(()=>{
        getCrops(match.params.id);
    });

    return (
        <Fragment>
            <div>laj;slkfjas</div>
        </Fragment>
    )
};


Crop.propTypes = {
    getCrops: PropTypes.func.isRequired,
    crop: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    crop: state.crop
  });

  export default connect(mapStateToProps,{getCrops})(Crop);
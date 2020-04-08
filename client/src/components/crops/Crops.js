import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getCrops, getCrop} from '../../actions/crops';
import { Link } from 'react-router-dom';

const Crops = ({getCrops,crop:{crops,loading}})=>{
    useEffect(()=>{
        console.log("crops list");

        getCrops();
        console.log(crops);
    },[getCrops]);

    return loading || crops=== null ? (
        <div>loading</div>
      ) : (
        <Fragment>
            <div>crops  </div>
            <hr/>
            <div className='crops'>
        {crops.map(crop => (
          <div >
              <div>{crop.name}</div>
              <div>{crop.price}</div>
              <Link to={`/crop/${crop._id}`} className='btn btn-primary'>
          {crop.name}
          </Link>
              <div>{crop.quantiy}</div>
              <hr/>
          </div>
          ))}
      </div>
        </Fragment>
    )

};

Crops.propTypes = {
getCrops: PropTypes.func.isRequired,
crop: PropTypes.object.isRequired

};


const mapStateToProps = state => ({
crop: state.crop
});
export default connect(mapStateToProps,{getCrops}) (Crops);
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getCrops} from '../../actions/crops';

const Crops = ({getCrops,crop:{crops}})=>{
    useEffect(()=>{
        getCrops();
    });

    return (
        <Fragment>
            <div>crops </div>
            <div className='crops'>
        {crops.map(crop => (
          <div >{crop.name}</div>
        ))}
      </div>
        </Fragment>
    )

};

Crops.propTypes = {
getCrops: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
crop: state.crop
});
export default connect(mapStateToProps,{getCrops}) (Crops);
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getCrops} from '../../actions/crops';

const Crops = ({getCrops})=>{
    useEffect(()=>{
        getCrops();
    });

    return (
        <Fragment>
            <div>crops </div>
        </Fragment>
    )

};

Crops.propTypes = {
getCrops: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
crop: state.crops
});
export default connect(mapStateToProps,{getCrops}) (Crops);
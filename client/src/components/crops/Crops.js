import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Crops = ({getCrops})=>{
    useEffect(()=>{
        getCrops();
    });

    return (
        <Fragment>
            <div>hello </div>
        </Fragment>
    )

};
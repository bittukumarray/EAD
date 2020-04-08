import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {getCrop} from '../../actions/crops';

import './Cropdispay.css';

const Crop = ({ getCrop, crop: { crop,loading }, match }) => {
    useEffect(() => {
    console.log("crop detail");

      getCrop(match.params.id);
      console.log(crop);

    },[getCrop, match.params.id]);
  
    return loading || crop === null ? (
        <div>loading</div>
      ) : (

        <Fragment>

<div class="row">
						<div class="col-xs-12 col-sm-4 center mt-4 ml-5">
							<span class="profile-picture">
								<img class="img-thumbnail" alt=" Avatar" id="avatar2" src="https://www.brecorder.com/wp-content/uploads/2018/03/xwheat-grain-1024.jpg.pagespeed.ic.C52WOz7L1I.webp"/>
							</span>

							<div class="space space-4"></div>

						</div>

						<div class="col-xs-12 col-sm-7 mt-5">

							<div class="profile-user-info">
								<div class="profile-info-row">
									<div class="profile-info-name"> Name </div>

									<div class="profile-info-value">
										<span>{crop.name}</span>
									</div>
								</div>

                <div class="profile-info-row">
									<div class="profile-info-name"> Farmer Name </div>

									<div class="profile-info-value">
										<span>{crop.farmer_name}</span>
									</div>
								</div>

                <div class="profile-info-row">
									<div class="profile-info-name"> Quantity </div>

									<div class="profile-info-value">
										<span>{crop.quantity}</span>
									</div>
								</div> 

								<div class="profile-info-row">
									<div class="profile-info-name"> Price </div>

									<div class="profile-info-value">
										<span>{crop.price}</span>
									</div>
								</div>

                <div class="profile-info-row">
									<div class="profile-info-name"> City </div>

									<div class="profile-info-value">
										<i class="fa fa-map-marker light-orange bigger-110"></i>
										<span> {crop.city}</span>
										<span>India</span>
									</div>
								</div>

								<div class="profile-info-row">
									<div class="profile-info-name"> details </div>

									<div class="profile-info-value">
										<span>{crop.details}</span>
									</div>
								</div>
							</div>

						</div>
					</div>

					<div class="space-20"></div>

        </Fragment>

      );
  };

Crop.propTypes = {
    getCrop: PropTypes.func.isRequired,
    crop: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    crop: state.crop
  });

  export default connect(mapStateToProps, { getCrop })(Crop);

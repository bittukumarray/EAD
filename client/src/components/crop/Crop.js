import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getCrop } from "../../actions/crops";

import "./Cropdispay.css";

class Crop extends React.Component{
  state = {
    quantity:1,
  }
  componentDidMount(){
    this.props.getCrop(this.props.match.params.id);
  }
  onclick= (userId, cropId, quantity)=>{
    console.log(userId,this.props.match.params.id, quantity, 'adding to cart ')
}

IncrementItem = () => {
  this.setState({ quantity: this.state.quantity + 1 });
}
DecreaseItem = () => {
  if(this.state.quantity>1)
  this.setState({ quantity: this.state.quantity - 1 });
}

  render(){
    const {crop,user} = this.props;
    const {quantity}= this.state;
    console.log("class crop",crop)
    const {loading}= crop;

    let crp=""
    if(!loading){
      crp = crop.crop;
    }

    console.log(crp)
    // return <div>loading ....</div>
    return loading || crop === null ? (
          <div>loading</div>
        ) : (
          <Fragment>
            <div class="row">
              <div class="col-xs-12 col-sm-4 center mt-4 ml-5">
                <span class="profile-picture">
                  <img
                    class="img-thumbnail"
                    alt=" Avatar"
                    id="avatar2"
                    src={crp.img}
                  />
                </span>
      
                <div class="space space-4"></div>
              </div>
      
              <div class="col-xs-12 col-sm-7 mt-5">
                <div class="profile-user-info">
                  <div class="profile-info-row">
                    <div class="profile-info-name"> Name </div>
      
                    <div class="profile-info-value">
                      <span>{crp.name}</span>
                    </div>
                  </div>
      
                  <div class="profile-info-row">
                    <div class="profile-info-name"> Farmer Name </div>
      
                    <div class="profile-info-value">
                      <span>{crp.farmer_name}</span>
                    </div>
                  </div>
      
                  <div class="profile-info-row">
                    <div class="profile-info-name"> Quantity </div>
      
                    <div class="profile-info-value">
                      <span>{crp.quantity}</span>
                    </div>
                  </div>
      
                  <div class="profile-info-row">
                    <div class="profile-info-name"> Price </div>
      
                    <div class="profile-info-value">
                      <span>{crp.price}</span>
                    </div>
                  </div>
      
                  <div class="profile-info-row">
                    <div class="profile-info-name"> City </div>
      
                    <div class="profile-info-value">
                      <i class="fa fa-map-marker light-orange bigger-110"></i>
                      <span> {crp.city}</span>
                      <span>India</span>
                    </div>
                  </div>
      
                  <div class="profile-info-row">
                    <div class="profile-info-name"> details </div>
      
                    <div class="profile-info-value">
                      <span>{crp.details}</span>
                    </div>
                                                                                    
                    <div class="col-md-3-sm-3">
                      <div  class="profile-info-value">
                      <div  style={{textAlign:"center"}} className='btn btn-outline' onClick={()=>this.onclick(user._id, crop._id , quantity)}> Add to cart</div>
                      </div>
              </div>
              <div>
        <button onClick={this.IncrementItem}>Click to increment by 1</button>
        <button onClick={this.DecreaseItem}>Click to decrease by 1</button>

         <h2>{ this.state.quantity }</h2>
      </div>

                                                              
                                                               
                  </div>
                </div>
              </div>
            </div>
      
            <div class="space-20"></div>
          </Fragment>)
  }
} 
Crop.propTypes = {
  getCrop: PropTypes.func.isRequired,
  crop: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  crop: state.crop,
  user : state.auth.user,

});

export default connect(mapStateToProps, { getCrop })(Crop);

import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getCrops, getCrop} from '../../actions/crops';
import { Link } from 'react-router-dom';
import axios from "axios";
import { LOGIN_SUCCESS } from '../../actions/types';

class Crops extends React.Component{
    state = {
        crop :null,
        error:false,
        loading:true,
        quantity:1,

    }
    async componentDidMount(){
        try{
        
        const url  = `/api/filter/get-crop/${this.props.match.params.id}`

        const res =await axios.get(url)
        const data = await res.data;
        console.log("crop ",data)
        if(data['success']){
        this.setState({crop:data['crop'],loading:false})
        }
        else{
            this.setState({error:true, loading:false})
        }
        }
        catch{
            this.setState({error:true, loading:false})
        }
    }
    onclick = async (farmerId, cropId, quantity)=>{
        try{
        console.log(farmerId,this.props.match.params.id, quantity, 'adding to cart ')
        const url = `/api/user/add-cart`
        console.log(this.props.token)
        const {token} = this.props;
        const body = {
            "farmerId":farmerId, //"5e899d88fe910a4bd7123311",
            "quantity":quantity,
            "cropsId":cropId //"5f132594fa75183b01c92093"
        }
        const config = {
            headers: {
              "Content-Type": "application/json",
              'x-auth-token':token
            }
          };
        const body1 = {}
        const res = await axios.post(url,body)//,body,
            // {
            //     headers
            // })
           alert('Successfully Added to Cart')

        console.log("data", res.data)
        }
        catch{
            console.log("error")
            alert('Error Occured , not able to add to cart ')
        }
    }
    
    IncrementItem = () => {
      this.setState({ quantity: this.state.quantity + 1 });
    }
    DecreaseItem = () => {
      if(this.state.quantity>1)
      this.setState({ quantity: this.state.quantity - 1 });
    }

    render(){
        const {user} = this.props;
        console.log("userfrom props", user)

        const {crop,error,loading,quantity} = this.state;
        if(loading)return <div>Loading </div>
        if(error) return <div>Error Occured</div>
        console.log("state", crop);

        let addToCart = ""
        console.log(user)
        if(user){
          if(user.role === "genuser")
         addToCart = (
          <React.Fragment>
          <div class="col-md-3-sm-3">
          <div  class="profile-info-value">
          <div  style={{textAlign:"center"}} className='btn btn-outline' onClick={()=>this.onclick(crop.farmer, crop._id , quantity)}> Add to cart</div>
          </div>
    </div>
    <div>
    <button onClick={this.IncrementItem}>Click to increment by 1</button>
    <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
    
    <h2>{ this.state.quantity }</h2>
    </div></React.Fragment>
    
        )
    
         }
        
        return  (
            <Fragment>
                
              <div class="row">
                <div class="col-xs-12 col-sm-4 center mt-4 ml-5">
                  <span class="profile-picture">
                    <img
                      class="img-thumbnail"
                      alt=" Avatar"
                      id="avatar2"
                      src={crop.img}
                    />
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
                                                                                      
                      {/* {user._id} */}
                              {/* { user._id === 'farmer' && {addToCart}}                                */}
                            {addToCart}                                     
                    </div>
                  </div>
                </div>
              </div>
        
              <div class="space-20"></div>
            </Fragment>)
                        













    }
}

Crops.propTypes = {
getCrops: PropTypes.func.isRequired,
crop: PropTypes.object.isRequired

};


const mapStateToProps = state => ({
crop: state.crop,
user : state.auth.user,
token:state.auth.token,
});
export default connect(mapStateToProps,{getCrops}) (Crops);
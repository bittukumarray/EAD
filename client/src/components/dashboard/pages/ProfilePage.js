import React from "react";
import {connect} from 'react-redux'
import { registerFarmer } from './../../../actions/auth';

const ProfilePage = (props) => {
  return (
    <div>
      <div class="container py-2">
        <div class="row my-2 ml-5 mt-5">
          <div className="col-lg-4 text-center">
            <h2 className="text-center font-weight-dark" style={{color:"#0099ff"}}>User Profile</h2>
          </div>
          <div class="col-lg-8 mt-5"></div>
          <div class="col-lg-8 order-lg-1 personal-info">
            <form role="form">
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label" style={{fontSize:"20px"}}> 
                  Name : 
                </label>
                <div className="profile-info-name" style={{fontSize:"20px"}}> {props.user.name} </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label" style={{fontSize:"20px"}}>
                  Username :
                </label>
                <div className="profile-info-name" style={{fontSize:"20px"}}>x</div>
              </div>
              <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label" style={{fontSize:"20px"}}> 
                  Email :
                </label>
                <div className="profile-info-name" style={{fontSize:"20px"}}> {props.user.email} </div>
              </div>
              <div class="form-group row">
                <label class="col-lg-3 col-form-label form-control-label" style={{fontSize:"20px"}}> 
                  Address :
                </label>
                <div className="profile-info-name" style={{fontSize:"20px"}}>x</div>
              </div>
              

              {/* <div class="form-group row">
                <div class="col-lg-9 ml-auto text-right">
                  <input
                    type="reset"
                    class="btn btn-danger"
                    value="Cancel"
                  ></input>
                  <input
                    type="button"
                    class="btn btn-primary"
                    value="Save Changes"
                  />
                </div>
              </div> */}
            </form>
          </div>

          <div class="col-lg-4 order-lg-0 text-center">
            <img
              src="https://img.etimg.com/thumb/width-640,height-480,imgsize-120883,resizemode-1,msid-65900138/small-and-marginal-farmers-are-to-see-better-days-with-a-free-of-cost-farmer-to-farmer-rental-program-through-this-revolutionary-app-by-tafes-jfarm-services.jpg"
              class="mx-auto img-fluid rounded-circle"
              alt="Image ka kya krega"
              style={{width:"280px"}}
            />
            {/* <h6 class="my-4">Upload a new photo</h6>
            <div class="input-group px-xl-4">
              <form>
                <div style={{ textAlign: "left" }} class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="customFile"
                  ></input>
                  <label class="custom-file-label" for="customFile">
                    Choose file
                  </label>
                </div>
              </form>
              <div class="input-group-append">
                <button style={{ float: "right" }} class="btn btn-secondary">
                  <i class="fa fa-upload"></i>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps=(state)=>{
  return{
    user:state.auth.user
  }
}

export default connect(mapStateToProps)(ProfilePage);
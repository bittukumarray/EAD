import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn
} from "mdbreact";
import { GetCropsInfo } from "../actions/cropsInfo";
import { connect } from "react-redux";
import SideNavigation from "./sidenav";
import store from '../store';

class BlogPage extends Component {
  componentDidMount() {
    this.props.GetCropsInfo();
    // this.setState({"name":"Bittu"});
  }


  render() {
    console.log("state is ",this.state);
    console.log("props is ",this.props);
    console.log("store is ", store.getState());
    return (
      <React.Fragment>
        <SideNavigation />
        <MDBCard className="my-5 px-5 pb-5">
          <MDBCardBody className="text-left">
            <div
              style={{ color: "black", backgroundColor: "#e0e0e0" }}
              className="card h1-responsive font-weight-bold text-center my-5"
            >
              Information About Crops
            </div>
            {this.props.cropsInfo[0]
              ? this.props.cropsInfo[0].map(element => (
                  <MDBRow key={element._id}>
                    <MDBCol lg="2" md="12" className="mb-lg-0 mb-4"></MDBCol>
                    <MDBCol lg="8" md="10" className="mb-lg-0 mb-4">
                      <a href="#!" className="blue-text">
                        <h2 className="font-weight-bold mb-3">
                          <MDBIcon icon="fire" className="pr-2" />
                          {element.name}
                        </h2>
                      </a>
                      <MDBView
                        hover
                        className="rounded z-depth-2 mb-4"
                        waves
                        style={{ maxHeight: "10px" }}
                      >
                        <img
                          className="img-fluid"
                          src={element.img}
                          alt=""
                          style={{ width: "100%", maxHeight: "400px" }}
                        />
                        <MDBMask overlay="white-slight" />
                      </MDBView>

                      <p>
                        <b>{element.date}</b>
                      </p>
                      {element.details.map(para => (
                        <p className="dark-grey-text" key={para}>
                          {para}
                        </p>
                      ))}
                    </MDBCol>
                  </MDBRow>
                ))
              : null}
          </MDBCardBody>
        </MDBCard>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cropsInfo: state.cropsInfo,
  errors: state.errors
});

export default connect(mapStateToProps, { GetCropsInfo })(BlogPage);

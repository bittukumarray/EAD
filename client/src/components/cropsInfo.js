import React, { Component } from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import {GetCropsInfo} from "../actions/cropsInfo";
import { connect } from "react-redux";



class BlogPage extends Component {

    componentDidMount(){
        this.props.GetCropsInfo();
    }


    render(){
        
        return(
            <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody className="text-left">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Recent posts
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
            {this.props.cropsInfo[0] ? this.props.cropsInfo[0].map((element)=>
            <MDBRow key={element._id}><MDBCol lg="2" md="12" className="mb-lg-0 mb-4">
            </MDBCol>
          <MDBCol lg="8" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src={element.img}
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <a href="#!" className="blue-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="fire" className="pr-2" />
                {element.name}
              </h6>
            </a>
            <p>
              <b>{element.date}</b>
            </p>
            {element.details.map((para)=>
            <p className="dark-grey-text" key={para}>
              {para}
            </p>
            )}
          </MDBCol>
          </MDBRow>
            ) :null}
        
      </MDBCardBody>
    </MDBCard>
        )
    }
}

const mapStateToProps = state => ({
    cropsInfo: state.cropsInfo,
    errors: state.errors
  });



export default connect(mapStateToProps, { GetCropsInfo })(BlogPage);
    
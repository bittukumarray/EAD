import React, { Fragment, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import SectionContainer from "../../components/sectionContainer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { Redirect } from "react-router-dom";
import { loginFarmer } from "../../actions/auth";

const Login = ({ loginFarmer, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { password, email } = formData;

  //if we had class we had something like this
  // state = {
  //   formData:{

  //   }
  // }

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  // console.log(formData);

  const onSubmit = async e => {
    e.preventDefault();
    console.log("Succes sbmit");
    console.log(email, password);
    loginFarmer(email, password);
  };

  //redirect if logged in

  if (isAuthenticated) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <Fragment>
      <SectionContainer header="Sign in -" noBorder>
        <MDBRow className="d-flex flex-row justify-content-center row">
          <MDBCol md="6">
            {" "}
            setAlert: PropTypes.func.isRequired,
            <SectionContainer>
              <form onSubmit={e => onSubmit(e)}>
                <p className="h5 text-center mb-4">Sign inn</p>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    icon="lock"
                    group
                    name="email"
                    // type="password"
                    onChange={e => onChange(e)}
                    validate
                    // required
                  />

                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    name="password"
                    type="password"
                    onChange={e => onChange(e)}
                    validate
                  />
                </div>

                <div className="text-center">
                  <MDBBtn type="submit">Login</MDBBtn>
                </div>
              </form>
            </SectionContainer>
          </MDBCol>
        </MDBRow>
      </SectionContainer>
    </Fragment>
  );
};

loginFarmer.propTypes = {
  setAlert: PropTypes.func.isRequired,
  loginFarmer: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginFarmer })(Login);

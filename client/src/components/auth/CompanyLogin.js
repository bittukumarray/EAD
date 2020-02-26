import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import SectionContainer from "../sectionContainer";
import { setAlert } from "../../actions/alert";
import { loginCompany } from "../../actions/auth";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { registerCompany } from "../../actions/auth";

const CompanyLogin = ({ setAlert, loginCompany, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  //if we had class we had something like this
  // state = {
  //   formData:{

  //   }
  // }

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    loginCompany(email, password);

    e.target.className += " was-validated"; //this line is added to the form class = needs validation -was-validated
  };

  if (isAuthenticated) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <Fragment>
      <SectionContainer header="Sign in -" noBorder>
        <MDBRow className="d-flex flex-row justify-content-center row">
          <MDBCol md="6">
            <SectionContainer>
              <form onSubmit={e => onSubmit(e)} className="needs-validation">
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
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
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

CompanyLogin.propTypes = {
  setAlert: PropTypes.func.isRequired,
  loginCompany: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { setAlert, loginCompany })(
  CompanyLogin
);
//pass all the actions you wanna use you have to pass it in to connect
//connect takes two parameter

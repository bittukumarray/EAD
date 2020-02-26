import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import SectionContainer from "../../components/sectionContainer";
import { setAlert } from "../../actions/alert";
import { registerFarmer } from "../../actions/auth";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const Register = ({ setAlert, registerFarmer, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  //if we had class we had something like this
  // state = {
  //   formData:{

  //   }
  // }

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    e.target.className += " was-validated"; //this line is added to the form class = needs validation -was-validated

    if (password !== password2) {
      setAlert("password not match", "danger");
      setAlert("test alert ", "danger");
    } else {
      console.log(formData);
      registerFarmer({ name, email, password });
    }
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
                <p className="h5 text-center mb-4">Register</p>
                <div className="grey-text">
                  <MDBInput
                    value={name}
                    name="name"
                    onChange={e => onChange(e)}
                    type="text"
                    id="materialFormRegisterNameEx"
                    label="First name"
                    required
                  >
                    <div className="valid-feedback">Looks good!</div>
                  </MDBInput>
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
                    label="Type your name"
                    icon="lock"
                    group
                    name="name"
                    // type="password"
                    onChange={e => onChange(e)}
                    validate
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
                  <MDBInput
                    label="Retype your password"
                    icon="lock"
                    group
                    name="password2"
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerFarmer: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { setAlert, registerFarmer })(Register);
//pass all the actions you wanna use you have to pass it in to connect
//connect takes two parameter

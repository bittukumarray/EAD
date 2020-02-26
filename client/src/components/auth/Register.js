import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBContainer } from "mdbreact";
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

    // e.target.className += " was-validated"; //this line is added to the form class = needs validation -was-validated

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
      <SectionContainer header="" noBorder>
        <MDBRow className="d-flex flex-row justify-content-center row">
          <MDBCol md="6">
            <SectionContainer>
              {/* //fasdfaskdjfform */}

              <form onSubmit={e => onSubmit(e)}>
                <p className="h4 text-center mb-4">Sign up</p>
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  onChange={e => onChange(e)}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                  onChange={e => onChange(e)}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterConfirmEx"
                  className="grey-text"
                >
                  Confirm your pass
                </label>
                <input
                  type="type"
                  name="password"
                  id="defaultFormRegisterConfirmEx"
                  className="form-control"
                  onChange={e => onChange(e)}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="grey-text"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password2"
                  id="defaultFormRegisterPasswordEx"
                  className="form-control"
                  onChange={e => onChange(e)}
                />
                <div className="text-center mt-4">
                  <MDBBtn color="unique" type="submit">
                    Register
                  </MDBBtn>
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

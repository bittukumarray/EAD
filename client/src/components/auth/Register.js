import React, { Fragment, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import SectionContainer from "../../components/sectionContainer";
import axios from "axios";
const Register = () => {
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
  // console.log(formData);

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("password not match");
    } else {
      console.log(formData);

      const newUser = {
        name,
        email,
        password
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };
        const body = JSON.stringify(newUser);
        // const res = await axios.post("/api/users", body, config);
        // console.log(res.data);
      } catch (err) {}
    }
  };

  return (
    <Fragment>
      <SectionContainer header="Sign in -" noBorder>
        <MDBRow className="d-flex flex-row justify-content-center row">
          <MDBCol md="6">
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
                    label="Type your password"
                    icon="lock"
                    group
                    name="password2"
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

export default Register;

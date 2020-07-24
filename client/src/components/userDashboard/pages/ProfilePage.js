import React from "react";
import { connect } from "react-redux";
import { registerFarmer } from "./../../../actions/auth";
import { render } from "react-dom";
import axios from "axios";

import Divider from "@material-ui/core/Divider";
import SideNavigation from "./../../userDashboard/sideNavigation";
class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      city: "",
      email: "",
      loading: true,
      error: false
    };
  }
  async componentDidMount() {
    try {
      const url = "/api/user/get-user-details/";
      const body = {
        role: "farmer"
      };
      const res = await axios.post(url, body);
      const data = await res.data;
      console.log("farmer details", data.user);
      const { user } = data;
      this.setState({
        loading: false,
        email: user.email,
        name: user.name,
        city: user.city,
        id: user._id
      });
    } catch {
      this.setState({ error: true, loading: false });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = async e => {
    e.preventDefault();
    console.log("submit ");

    try {
      // get our form data out of state
      const { name, city, email } = this.state;
      const url = "api/farmer/update-farmer/";
      const body = {
        role: "farmer",
        city: city,
        name: name
      };
      const res = await axios.post(url, body); //,body,
      // alert("Successfully changed");
      window.location.reload(false);

      // this.props.history.push("/user-dashboard");
    } catch {
      alert("Error Occured , not able to add to cart ");
    }
  };

  render() {
    const { user } = this.props;
    const { name, city, email, loading, error } = this.state;
    if (loading) return <div>Loading </div>;
    if (error) return <div>Error Occured</div>;
    // console.log("this state", this.state);
    if (!user) return <div>Loading </div>;
    const form_elemnt = (
      <form role="form" onSubmit={this.onSubmit}>
        <div className="form-group ">
          <label
            className="col-lg-7"
            // style={{ fontSize: "20px" }}
          >
            Name :{" "}
            <div class="md-form form-lg">
              <input
                type="text"
                name="name"
                id="inputLGEx"
                value={name}
                onChange={this.onChange}
                className="form-control form-control-lg"
              />
            </div>
          </label>
        </div>
        <Divider />
        <div className="form-group ">
          <label
            className="col-lg-7"
            // style={{ fontSize: "20px" }}
          >
            Email :{" "}
            <div class="md-form form-lg">
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.onChange}
                disabled
                id="inputLGEx"
                className="form-control form-control-lg"
              />
            </div>
          </label>
        </div>
        <Divider />
        <div className="form-group ">
          <label className="col-lg-7">
            city :
            <div class="md-form form-lg">
              <input
                type="text"
                name="city"
                value={city}
                id="inputLGEx"
                onChange={this.onChange}
                className="form-control form-control-lg"
              />
            </div>
          </label>
        </div>
        <Divider />
        <button className="btn btn-danger" type="submit">
          Submit
        </button>
      </form>
    );
    return (
      <div class="container py-2">
        <SideNavigation />
        <div
          className="card"
          style={{
            backgroundColor: "#eeeeee",
            color: "black",
            fontFamily: "garamond",
            fontWeight: "bolder",
            fontSize: "60px"
          }}
          className=" card h1-responsive font-weight-bolder text-center my-5"
        >
          User Profile
        </div>

        <div
          className="card h1-responsive font-weight-bolder my-5"
          style={{
            backgroundColor: "#D5D8DC",

            color: "black",
            fontFamily: "garamond",
            fontWeight: "bolder",
            fontSize: "30px"
          }}
        >
          {form_elemnt}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(ProfilePage);

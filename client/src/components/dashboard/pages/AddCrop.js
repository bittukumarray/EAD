import React from "react";
import { connect } from "react-redux";
import { registerFarmer } from "../../../actions/auth";
import { render } from "react-dom";
import axios from "axios";

class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      img: "",
      details: "",
      price: "",
      quantity: "",
      city: "",
      details: "",
      loading: false,
      error: false,
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit  axios");
    try {
      const { name, city, details, price, quantity } = this.state;

      const url = "api/farmer/add-crops/";
      const body = {
        name: name,
        img: "",
        details: details,
        price: price,
        quantity: quantity,
        role: "farmer",
        city: city,
      };

      const res = await axios.post(url, body);
      const data = await res.data;
      if (res.data["success"]) {
        this.props.history.push("/farmer-crops");
      } else {
        alert("error ");
      }
    } catch {
      alert("error ");
    }
  };

  render() {
    // return <div>Loading </div>
    const { user } = this.props;
    const { name, city, details, price, quantity, loading, error } = this.state;
    // if (loading) return <div>Loading </div>;
    // if (error) return <div>Error Occured</div>;
    // console.log("this state", this.state);
    const form_element = (
      <form onSubmit={this.onSubmit}>
        <div class="form-group ">
          <label
            class="col-lg-7"
            // style={{ fontSize: "20px" }}
          >
            Crop Name :
            <div class="md-form form-lg">
              <input
                type="text"
                name="name"
                value={name}
                className="form-control form-control-lg"
                onChange={this.onChange}
                style={{ width: "700px" }}
              />
              <small id="emailHelp" class="form-text text-muted">
                Enter a name of the crop like tea, coffe, wheat
              </small>
            </div>
          </label>
        </div>
        <div class="form-group ">
          <label
            class="col-lg-7"
            // style={{ fontSize: "20px" }}
          >
            <div class="md-form form-lg">
              Details :{" "}
              <input
                type="text"
                name="details"
                value={details}
                onChange={this.onChange}
                style={{ width: "700px" }}
                className="form-control form-control-lg"
              />
              <small id="emailHelp" class="form-text text-muted">
                Tell us about your crops
              </small>
            </div>
          </label>
        </div>{" "}
        <div class="form-group ">
          <label class="col">
            <div class="md-form form-lg">
              Price :{" "}
              <input
                type="number"
                name="price"
                value={price}
                onChange={this.onChange}
                style={{ width: "700px" }}
                className="form-control form-control-lg"
              />
              <small id="emailHelp" class="form-text text-muted">
                Price of crop per unit
              </small>
            </div>
          </label>
        </div>{" "}
        <div class="form-group ">
          <label
            class="col-lg-7"
            // style={{ fontSize: "20px" }}
          >
            <div class="md-form form-lg">
              Quantity :{" "}
              <input
                type="number"
                name="quantity"
                value={quantity}
                onChange={this.onChange}
                style={{ width: "700px" }}
                className="form-control form-control-lg"
              />
              <small id="emailHelp" class="form-text text-muted">
                Quantity in Kg
              </small>
            </div>
          </label>
        </div>
        <div class="form-group ">
          <label
            class="col-lg-7"
            // style={{ fontSize: "20px" }}
          >
            <div class="md-form form-lg">
              City :{" "}
              <input
                type="text"
                name="city"
                value={city}
                onChange={this.onChange}
                style={{ width: "700px" }}
                className="form-control form-control-lg"
              />
              <small id="emailHelp" class="form-text text-muted">
                Enter a name of the city
              </small>
            </div>
          </label>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>{" "}
      </form>
    );
    return (
      <React.Fragment>
        <div
          className="card"
          style={{
            backgroundColor: "#eeeeee",
            color: "black",
            fontFamily: "garamond",
            fontWeight: "bolder",
            fontSize: "60px",
          }}
          className=" card h1-responsive font-weight-bolder text-center my-5"
        >
          Add Crop
        </div>

        <div class="container py-2">
          <div class="row ">{form_element}</div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(ProfilePage);

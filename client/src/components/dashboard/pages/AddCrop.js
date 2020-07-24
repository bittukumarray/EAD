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
      error: false
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = async e => {
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
        city: city
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
    if (true)
      return (
        <div>
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
            Add Crop
          </div>
          <div class="container py-2">
            <div class="row my-2 ml-5 mt-5">
              <div className="col-lg-4 text-center"></div>
              <div class="col-lg-8 mt-5"></div>
              <div class="col-lg-8 order-lg-1 personal-info">
                <form role="form" onSubmit={this.onSubmit}>
                  <div class="form-group row">
                    <label
                      class="col-lg-3 col-form-label form-control-label"
                      style={{ fontSize: "20px" }}
                    >
                      Name :{" "}
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                      />
                    </label>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-lg-3 col-form-label form-control-label"
                      style={{ fontSize: "20px" }}
                    >
                      city :{" "}
                      <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={this.onChange}
                      />
                    </label>
                  </div>
                  <div class="form-group row">
                    <label
                      class="col-lg-3 col-form-label form-control-label"
                      style={{ fontSize: "20px" }}
                    >
                      details :{" "}
                      <input
                        type="text"
                        name="details"
                        value={details}
                        onChange={this.onChange}
                      />
                    </label>
                  </div>{" "}
                  <div class="form-group row">
                    <label
                      class="col-lg-3 col-form-label form-control-label"
                      style={{ fontSize: "20px" }}
                    >
                      price :{" "}
                      <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={this.onChange}
                      />
                    </label>
                  </div>{" "}
                  <div class="form-group row">
                    <label
                      class="col-lg-3 col-form-label form-control-label"
                      style={{ fontSize: "20px" }}
                    >
                      quantity :{" "}
                      <input
                        type="number"
                        name="quantity"
                        value={quantity}
                        onChange={this.onChange}
                      />
                    </label>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>

              <div class="col-lg-4 order-lg-0 text-center">
                <img
                  src="https://img.etimg.com/thumb/width-640,height-480,imgsize-120883,resizemode-1,msid-65900138/small-and-marginal-farmers-are-to-see-better-days-with-a-free-of-cost-farmer-to-farmer-rental-program-through-this-revolutionary-app-by-tafes-jfarm-services.jpg"
                  class="mx-auto img-fluid rounded-circle"
                  alt="Image ka kya krega"
                  style={{ width: "280px" }}
                />
              </div>
            </div>
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

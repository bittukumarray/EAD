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
      loading: true,
      error: false,
    };
  }
  async componentDidMount() {
    try {
      const url = "/api/farmer/add-crops/";
      const body = {
        role: "farmer",
      };
      const res = await axios.post(url, body);
      const data = await res.data;
      console.log("farmer details", data.farmer);
      const { farmer } = data;
      this.setState({
        loading: false,
        email: farmer.email,
        name: farmer.name,
        city: farmer.city,
        id: farmer._id,
      });
    } catch {
      this.setState({ error: true, loading: false });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit ");

    try {
      // get our form data out of state
      const { name, city, email } = this.state;
      const url = "api/farmer/add-crops/";
      const body = {
        role: "farmer",
        city: city,
        name: name,
      };
      const res = await axios.post(url, body); //,body,
      alert("Successfully changed");
      this.props.history.push("/dashboard");
    } catch {
      alert("Error Occured , not able to add to cart ");
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
          <div class="container py-2">
            <div class="row my-2 ml-5 mt-5">
              <div className="col-lg-4 text-center">
                <h2
                  className="text-center font-weight-dark"
                  style={{ color: "#0099ff" }}
                >
                  User Profile111
                </h2>
              </div>
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
                        disabled
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
                        type="email"
                        name="details"
                        value={details}
                        onChange={this.onChange}
                        disabled
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
                        type="email"
                        name="price"
                        value={price}
                        onChange={this.onChange}
                        disabled
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
                        type="email"
                        name="quantity"
                        value={quantity}
                        onChange={this.onChange}
                        disabled
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

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(ProfilePage);

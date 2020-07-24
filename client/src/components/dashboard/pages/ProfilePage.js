import React from "react";
import { connect } from "react-redux";
import { registerFarmer } from "./../../../actions/auth";
import { render } from "react-dom";
import axios from "axios";

class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      city: "",
      email: "",
      loading: true,
      error: false,
    };
  }
  async componentDidMount() {
    try {
      const url = "/api/farmer/farmer-details/";
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
      const url = "api/farmer/update-farmer/";
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
    const { user } = this.props;
    const { name, city, email, loading, error } = this.state;
    if (loading) return <div>Loading </div>;
    if (error) return <div>Error Occured</div>;
    // console.log("this state", this.state);
    if (!user) return <div>Loading </div>;

    const form_elemnt = (
      <form role="form" onSubmit={this.onSubmit} className="">
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

        <div className="form-group row">
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
        <div className="form-group row">
          <label className="col-lg-7">
            city :{" "}
            <div class="md-form form-lg">
              <input
                type="text"
                name="city"
                value={city}
                onChange={this.onChange}
                className="form-control form-control-lg"
              />
            </div>
          </label>
        </div>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    );
    return (
      <div class="container py-2">
        <img
          src="https://img.etimg.com/thumb/width-640,height-480,imgsize-120883,resizemode-1,msid-65900138/small-and-marginal-farmers-are-to-see-better-days-with-a-free-of-cost-farmer-to-farmer-rental-program-through-this-revolutionary-app-by-tafes-jfarm-services.jpg"
          class="mx-auto img-fluid rounded-circle"
          alt="Image ka kya krega"
          style={{ width: "280px" }}
        />
        {form_elemnt}
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

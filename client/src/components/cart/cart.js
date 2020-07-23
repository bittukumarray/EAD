import React from "react";
import { connect } from "react-redux";
// import { registerFarmer } from "../../../actions/auth";
import { render } from "react-dom";
import axios from "axios";
import crop from "../../assets/crop.jpg";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
} from "mdbreact";
class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: null,
      loading: true,
      error: false,
    };
  }
  async componentDidMount() {
    try {
      const url = "/api/user/get-cart";
      const body = {
        role: "genuser",
      };
      const res = await axios.post(url, body);
      const data = await res.data;
      //   console.log(data);
      this.setState({ cart: data.items, loading: false });
    } catch {
      this.setState({ error: true, loading: false });
    }
  }

  render() {
    const { cart, error, loading } = this.state;
    if (loading) return <div>Loading </div>;
    if (error) return <div>Error Occured</div>;
    const element = (
      <div className="container">
        {cart.map((cartItem) => (
          <div key={cartItem.productId._id} class="col">
            {/* <!--Card group--> */}
            <div class="card-group">
              {/* <!--Card--> */}
              <div class="card card-personal mb-4">
                {/* <!--Card image--> */}
                <a href={`/crop/detail/${cartItem.productId._id}`}>
                  <div class="view" style={{ backgroundColor: "grey" }}>
                    <img class="card-img-bottom" src={crop} alt={crop}></img>

                    {/* <!--Card footer--> */}
                    <div class="card card-cascade card-ecommerce wider">
                      <div class="card-footer ">
                        <span class="float-left">
                          <a data-toggle="tooltip" data-placement="top">
                            <MDBIcon icon="map-marker-alt" />{" "}
                            {cartItem.productId.city}
                          </a>
                        </span>
                        <span class="float-right">
                          <a
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Cart"
                            href="/crop/detail/"
                          >
                            <i
                              style={{ color: "rgba(234, 111,123)" }}
                              class="fas fa-shopping-cart mr-3"
                            ></i>
                          </a>

                          <a
                            class="active"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Added to Wishlist"
                          >
                            <i class="fas fa-heart"></i>
                          </a>
                        </span>
                      </div>
                      <div class="card-footer ">
                        <strong>
                          <a
                            href=""
                            style={{
                              marginRight: "1rem",
                              fontSize: "20px",
                            }}
                          >
                            {cartItem.productId.name}
                          </a>
                        </strong>
                        <span style={{ fontSize: "17px" }}>
                          Rs. {cartItem.productId.price}/kg
                        </span>
                        <span className="float-right">
                          <MDBIcon icon="cash-register" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
    console.log("state", cart);
    return <div>{element}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(ProfilePage);

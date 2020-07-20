import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn
} from "mdbreact";
import { connect } from "react-redux";
import axios from "axios";
import crop from "../assets/crop.jpg";
import { Link } from "react-router-dom";

class CatalogPage extends Component {
  state = {
    data: "",
    searchv: "",
    filterv: "anydata"
  };
  async componentDidMount() {
    const data = await axios.get(`/api/filter/all`);
    this.setState({ data: data.data });
    console.log("data is ", data.data);
  }

  onChangeSearchHandler = async e => {
    this.setState({ searchv: e.target.value });
    let pathv;
    if (e.target.value.length === 0) {
      this.AllDataFilter();
    } else if (this.state.filterv !== "all" && e.target.value.length > 0) {
      pathv = this.state.filterv + "/" + e.target.value;
    } else {
      pathv = this.state.filterv;
    }
    if (e.target.value.length > 0) {
      try {
        console.log(pathv);
        const data = await axios.get(`/api/filter/${pathv}`);
        this.setState({ data: data.data });
      } catch (err) {
        console.log(err);
      }
    }
  };

  onChangeSelectHandler = e => {
    console.log(e.target.value);
    this.setState({ filterv: e.target.value, searchv: "" });
    this.AllDataFilter();
  };

  AllDataFilter = async () => {
    const data = await axios.get(`/api/filter/all`);
    this.setState({ data: data.data });
  };

  render() {
    console.log(this.state.data);
    return (
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="text-left">
          <div
            className="card"
            style={{
              backgroundColor: "#eeeeee",
              color: "black",
              fontFamily: "Sans",
              fontWeight: "bolder",
              fontSize: "60px"
            }}
            className=" card h1-responsive font-weight-bolder text-center my-5"
          >
            Catalog
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <select
                onChange={this.onChangeSelectHandler}
                class="btn btn-md btn-outline-primary m-0 px-3 py-2 z-depth-0 waves-effect"
                style={{
                  fontFamily: "sans",
                  fontSize: "15px",
                  fontWeight: "bold"
                }}
              >
                <option value="anydata">Filter By</option>
                <option value="all">All Posts</option>
                <option value="name">Crops Name</option>
                <option value="city">City Name</option>
              </select>
            </div>
            <input
              onChange={this.onChangeSearchHandler}
              value={this.state.searchv}
              disabled={this.state.filterv === "all"}
              type="text"
              placeholder="Enter city name"
              class="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            ></input>
          </div>
          <section class="pt-5 mt-3 pb-3">
            <div class="row">
              {this.state.data
                ? this.state.data.map(element => {
                  {
                    /* <!--Grid column--> */
                  }
                  return (

                    <div key={element._id} class="col-md-3">
                      {/* <!--Card group--> */}
                      <div class="card-group">
                        {/* <!--Card--> */}
                        <div class="card card-personal mb-4">
                          {/* <!--Card image--> */}
                          <Link to={`/crop/detail/${element._id}`} >
                            <div
                              class="view"
                              style={{ backgroundColor: "grey" }}
                            >
                              <img
                                class="card-img-bottom"
                                src={crop}
                                alt={crop}
                              ></img>

                              {/* <!--Card footer--> */}
                              <div class="card card-cascade card-ecommerce wider">
                                <div class="card-footer ">
                                  <span class="float-left">
                                    <a
                                      data-toggle="tooltip"
                                      data-placement="top"
                                    >
                                      <MDBIcon icon="map-marker-alt" />{" "}
                                      {element.city}
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
                                        fontSize: "20px"
                                      }}
                                    >
                                      {element.name}
                                    </a>
                                  </strong>
                                  <span style={{ fontSize: "17px" }}>
                                    Rs. {element.price}/kg
                                  </span>
                                  <span className="float-right">
                                    <MDBIcon icon="cash-register" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                      </div>
                    </div>

                  );
                })

                : null}
            </div>
          </section>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default connect(null, null)(CatalogPage);

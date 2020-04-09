import React, { Component } from "react";
import { MDBCard, MDBCardBody } from "mdbreact";
import { connect } from "react-redux";
import axios from "axios";

class WeatherPage extends Component {
  state = {
    data: "",
    city: "patna"
  };
  async componentDidMount() {
    const data = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=bebc487b6c92189e53406045437508b6`
    );
    this.setState({ data: data.data });
  }

  onChangeHandler = e => {
    this.setState({ city: e.target.value });
  };

  onClickHandler = async e => {
    const data = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=bebc487b6c92189e53406045437508b6`
    );
    this.setState({ data: data.data });
  };

  render() {
    console.log(this.state.data.weather);
    return (
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="text-left" >
          <div
            style={{
              color: "black",
              backgroundColor: "#e0e0e0",
              fontFamily: "didot",
              backgroundImage: "url(" + "https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&dpr=1" + ")"
            }}
            className="card h1-responsive font-weight-bold text-center my-5"
          >
            Today's Weather Information
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button
                onClick={this.onClickHandler}
                class="btn btn-md btn-outline-primary m-0 px-3 py-2 z-depth-0 waves-effect"
                type="button"
                id="button-addon1"
              >
                Apply
              </button>
            </div>
            <input
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Enter city name"
              class="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            ></input>
          </div>
          {this.state.data ? (
            <div class="card weather-card" style={{ backgroundImage: "url(" + "https://rekordeast.co.za/wp-content/uploads/sites/85/2019/06/cool-weather.jpeg" + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", }}>
              <div class="card-body pb-3">
                <h4 class="card-title font-weight-bold">
                  {this.state.data.name}
                </h4>
                <p class="card-text">
                  {this.state.data.weather.map(element => {
                    return element.description;
                  })}
                </p>

                <div class="d-flex justify-content-between">
                  <p class="display-1 degree">
                    {this.state.data.main.temp - 273.15}.°C
                  </p>
                  <i class="fas fa-sun-o fa-5x pt-3 amber-text"></i>
                </div>
                <div class="d-flex justify-content-between mb-4">
                  <p>
                    <i class="fas fa-tint fa-lg text-info pr-2"></i>
                    {this.state.data.clouds.all}% Cloud
                  </p>
                  <p style={{color:"cyan"}}>
                    <i class="fas fa-leaf fa-lg grey-text pr-2"></i>
                    {(this.state.data.wind.speed * 3600) / 1000} km/h Winds
                  </p>
                </div>
                <div class="progress md-progress">
                  <div
                    class="progress-bar black"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <ul class="list-unstyled d-flex justify-content-between font-small text-muted mb-4">
                  <li class="pl-4">8AM</li>
                  <li>11AM</li>
                  <li>2PM</li>
                  <li>5PM</li>
                  <li class="pr-4">8PM</li>
                </ul>

                <div class="collapse-content">
                  <div class="collapse" id="collapseExample">
                    <table class="table table-borderless table-sm mb-0">
                      <tbody>
                        <tr>
                          <td class="font-weight-normal align-middle">
                            Tuesday
                          </td>
                          <td class="float-right font-weight-normal">
                            <p class="mb-1">
                              24&deg;<span class="text-muted">/12&deg;</span>
                            </p>
                          </td>
                          <td class="float-right mr-3">
                            <i class="fas fa-sun fa-lg amber-text"></i>
                          </td>
                        </tr>
                        <tr>
                          <td class="font-weight-normal align-middle">
                            Wednesday
                          </td>
                          <td class="float-right font-weight-normal">
                            <p class="mb-1">
                              19&deg;<span class="text-muted">/10&deg;</span>
                            </p>
                          </td>
                          <td class="float-right mr-3">
                            <i class="fas fa-cloud-sun-rain fa-lg text-info"></i>
                          </td>
                        </tr>
                        <tr>
                          <td class="font-weight-normal align-middle">
                            Thursday
                          </td>
                          <td class="float-right font-weight-normal">
                            <p class="mb-1">
                              23&deg;<span class="text-muted">/15&deg;</span>
                            </p>
                          </td>
                          <td class="float-right mr-3">
                            <i class="fas fa-sun fa-lg amber-text"></i>
                          </td>
                        </tr>
                        <tr>
                          <td class="font-weight-normal align-middle">
                            Friday
                          </td>
                          <td class="float-right font-weight-normal">
                            <p class="mb-1">
                              26&deg;<span class="text-muted">/19&deg;</span>
                            </p>
                          </td>
                          <td class="float-right mr-3">
                            <i class="fas fa-sun fa-lg amber-text"></i>
                          </td>
                        </tr>
                        <tr>
                          <td class="font-weight-normal align-middle">
                            Saturday
                          </td>
                          <td class="float-right font-weight-normal">
                            <p class="mb-1">
                              20&deg;<span class="text-muted">/16&deg;</span>
                            </p>
                          </td>
                          <td class="float-right mr-3">
                            <i class="fas fa-cloud fa-lg text-info"></i>
                          </td>
                        </tr>
                        <tr>
                          <td class="font-weight-normal align-middle">
                            Sunday
                          </td>
                          <td class="float-right font-weight-normal">
                            <p class="mb-1">
                              22&deg;<span class="text-muted">/13&deg;</span>
                            </p>
                          </td>
                          <td class="float-right mr-3">
                            <i class="fas fa-cloud-sun fa-lg text-info"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <hr></hr>

                  <a
                    class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 deep-purple-text collapsed"
                    data-toggle="collapse"
                    href="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  ></a>
                </div>
              </div>
            </div>
          ) : null}
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default connect(null, null)(WeatherPage);

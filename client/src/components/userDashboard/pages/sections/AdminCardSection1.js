import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from "mdbreact";
import axios from "axios";

class AdminCardSection1 extends Component {
  state = {
    NoOfCartItems: 0,
    NoOfOrders: 0,
    error: false,
    loading: true
  };

  async componentDidMount() {
    try {
      const url = "/api/user/get-user-details";
      const body = {
        role: "genuser"
      };
      const res = await axios.post(url, body);
      const data = await res.data;
      console.log(data.details);
      const { NoOfCartItems, NoOfOrders } = data.details;

      this.setState({
        NoOfCartItems: NoOfCartItems,
        NoOfOrders: NoOfOrders,
        loading: false
      });
    } catch {
      this.setState({ error: true, loading: false });
    }
  }

  render() {
    const { NoOfCartItems, NoOfOrders } = this.state;

    return (
      <MDBRow className="mb-4">
        <MDBCol className="mb-r">
          <MDBCard
            className="cascading-admin-card"
            style={{ width: "30%", float: "right" }}
          >
            <div className="admin-up">
              <MDBIcon icon="money-bill-alt" className="default-color-dark" />
              <div className="data">
                <p>Number of Item in cart </p>
                <h4>
                  <strong>{NoOfCartItems}</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div className="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="50"
                  className="progress-bar default-color-dark"
                  role="progressbar"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon icon="chart-line" className="warning-color-dark" />
              <div className="data">
                <p>Total Orders</p>
                <h4>
                  <strong>{NoOfOrders}</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div className="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  className="progress-bar warning-color-dark"
                  role="progressbar"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        {/*         
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon icon="chart-line" className="info-color-dark" />
              <div className="data">
                <p>Order Completed</p>
                <h4>
                <strong>{completedOrders}</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div className="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  className="progress-bar info-color-dark"
                  role="progressbar"
                  style={{ width: "92%" }}
                ></div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon icon="hand-holding-usd" className="success-color-dark" />
              <div className="data">
                <p>All earnings</p>
                <h4>
                <strong>{totalEarnings}</strong>
                </h4>
              </div>
            </div>
            <MDBCardBody>
              <div className="progress">
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="25"
                  className="progress-bar success-color-dark"
                  role="progressbar"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
     
      */}
      </MDBRow>
    );
  }
}
export default AdminCardSection1;

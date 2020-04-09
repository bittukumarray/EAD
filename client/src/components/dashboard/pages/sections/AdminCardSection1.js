import React from "react";
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from "mdbreact";

const AdminCardSection1 = () => {
  return (
    <MDBRow className="mb-4">
      <MDBCol className="mb-r">
        <MDBCard className="cascading-admin-card">
          <div className="admin-up">
            <MDBIcon icon="money-bill-alt" className="default-color-dark" />
            <div className="data">
              <p>Total Crops</p>
              <h4>
                <strong>50</strong>
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
                style={{ width: "50%" }}
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
                <strong>100</strong>
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
      <MDBCol xl="3" md="6" className="mb-r">
        <MDBCard className="cascading-admin-card">
          <div className="admin-up">
            <MDBIcon icon="chart-line" className="info-color-dark" />
            <div className="data">
              <p>Order Completed</p>
              <h4>
                <strong>92</strong>
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
                <strong>Rs. 8000</strong>
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
    </MDBRow>
  );
};

export default AdminCardSection1;

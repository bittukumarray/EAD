import React from "react";
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from "mdbreact";

const AdminCardSection1 = () => {
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
              <p>Total Orders Placed</p>
              <h4>
                <strong>2</strong>
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
              <p>Total Items in Cart</p>
              <h4>
                <strong>2</strong>
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
                style={{ width: "15%" }}
              ></div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default AdminCardSection1;

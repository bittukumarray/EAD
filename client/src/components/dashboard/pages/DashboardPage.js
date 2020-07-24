import React from "react";
// import { MDBRow } from 'mdbreact';
import axios from "axios";

import AdminCardSection1 from "./sections/AdminCardSection1";
// import TableSection from "./sections/TableSection";
import TableSection2 from "./sections/TableSection2";
import TableSection1 from "./sections/TableSection1";
// import BreadcrumSection from './sections/BreadcrumSection';
// import ChartSection1 from "./sections/ChartSection1";
import ChartSection2 from "./sections/ChartSection2";
// import MapSection from './sections/MapSection';
// import ModalSection from './sections/ModalSection';
// import '../index.css';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import BarChart from "../../Charts/BarChart";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBTable,
//   MDBTableBody,
//   MDBTableHead,
//   MDBCardHeader,
//   MDBRow,
//   MDBCol,
// } from "mdbreact";

class DashboardPage extends React.Component {
  state = {
    labels: [],
    data: [],
    crops: {},
  };
  async componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const farmerid = this.props.auth.user._id;

    const body = JSON.stringify({ farmer: farmerid });
    // try
    try {
      const res = await axios.post("/api/farmer/pie-chart", body, config);
      const labels = [];
      const data = [];
      const success = res.data.Type;
      if (success === "Success") {
        const { crops } = res.data;

        for (const [key, value] of Object.entries(crops)) {
          labels.push(value["crop"]);
          data.push(value["quantity"]);
        }
        this.setState({ data, labels, crops });
      }
    } catch (err) {}
  }
  render() {
    const { labels, data, crops } = this.state;

    return (
      <React.Fragment>
        <div style={{ width: "100%" }}>
          <AdminCardSection1 />
        </div>
        <div class="row mt-3">
          <div class="col-md-6">
            <div style={{ marginTop: "1rem" }}>
              <TableSection2 crops={crops} />
              <TableSection1 />
            </div>
          </div>
          <div class="col-md-6">
            <div style={{ marginTop: "1rem" }}>
              <BarChart
                heading={"Crops Quantity"}
                labels={labels.slice(0, 5)}
                data={data.slice(0, 5)}
              />
            </div>
          </div>
        </div>

        <div class="row mt-3">
          <div class="col-md-10">
            <div>
              <ChartSection2
                heading={"Crops Quantity"}
                labels={labels}
                data={data}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(DashboardPage);

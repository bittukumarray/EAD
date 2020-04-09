import React from "react";
// import { MDBRow } from 'mdbreact';
import AdminCardSection1 from "./sections/AdminCardSection1";
import TableSection from "./sections/TableSection";
import TableSection2 from "./sections/TableSection2";
// import BreadcrumSection from './sections/BreadcrumSection';
import ChartSection1 from "./sections/ChartSection1";
import ChartSection2 from "./sections/ChartSection2";
// import MapSection from './sections/MapSection';
// import ModalSection from './sections/ModalSection';
// import '../index.css';
import {
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBCardHeader,
  MDBRow,
  MDBCol
} from "mdbreact";

const DashboardPage = () => {
  return (
    <React.Fragment>
      <div style={{ width: "100%" }}>
        <AdminCardSection1 />
      </div>
      <div>
        <div style={{ width: "55%", float: "left" }}>
          {" "}
          <TableSection />
        </div>
        <div
          style={{
            width: "45%",
            float: "right",
            paddingLeft: "4rem"
          }}
        >
          <ChartSection2 />
        </div>
      </div>
      <div>
        <div style={{ widht: "60%", float: "left", marginTop: "3rem" }}>
          <TableSection2 />
        </div>
        <div
          style={{
            widht: "40%",
            float: "left",
            marginLeft: "3rem",
            marginTop: "3rem"
          }}
        >
          <ChartSection1 />
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardPage;

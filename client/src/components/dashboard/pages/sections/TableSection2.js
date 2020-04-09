import React from "react";
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

const TableSection = () => {
  return (
    <MDBRow className="mb-4">
      <MDBCol md="12" className="mb-12">
        <MDBCard>
          <MDBCardHeader>Crops List</MDBCardHeader>
          <MDBCardBody>
            <MDBTable hover>
              <MDBTableHead color="blue lighten-4">
                <tr>
                  <th>#</th>
                  <th>Crops name</th>
                  <th>Total left</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>1</td>
                  <td>Onion</td>
                  <td>324</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>sugarcane</td>
                  <td>544</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>radish</td>
                  <td>766</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default TableSection;

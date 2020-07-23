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
    <MDBRow>
      <MDBCol md="12">
        <MDBCard>
          <MDBCardHeader>Recents</MDBCardHeader>
          <MDBCardBody>
            <MDBTable hover>
              <MDBTableHead color="blue lighten-4">
                <tr>
                  <th>Crops</th>
                  <th>Crops sold (kgs)</th>
                  <th>Crops Remaining (kgs)</th>
                  <th>Amount Earned</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>Rice</td>
                  <td>20</td>
                  <td>50</td>
                  <td>2000.00</td>
                </tr>
                <tr>
                  <td>Wheat</td>
                  <td>10</td>
                  <td>35</td>
                  <td>1000.00</td>
                </tr>
                <tr>
                  <td>Barley</td>
                  <td>7</td>
                  <td>22</td>
                  <td>765.00</td>
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

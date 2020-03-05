import React from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBCardHeader, MDBRow, MDBCol } from 'mdbreact';

const TableSection = () => {
  return (
    <MDBRow className="mb-4">
          <MDBCol md="6" className="mb-4">
              <MDBCard>
                <MDBCardHeader>Recents</MDBCardHeader>
                  <MDBCardBody>
                    <MDBTable hover>
                      <MDBTableHead color="blue lighten-4">
                        <tr>
                          <th>#</th>
                          <th>No. of product sold</th>
                          <th>No. of product remaining</th>
                          <th>Farmer Name</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>1</td>
                          <td>1407</td>
                          <td>947</td>
                          <td>ABC</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>1900</td>
                          <td>844</td>
                          <td>XYZ</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>2450</td>
                          <td>666</td>
                          <td>PQR</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
      </MDBRow>
  )
}

export default TableSection;


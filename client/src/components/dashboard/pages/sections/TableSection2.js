import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBCardHeader,
  MDBRow,
  MDBCol,
} from "mdbreact";

class TableSection extends React.Component {
  state = {
    crops: {},
  };
  componentWillReceiveProps(newprops) {
    console.log("reciveing props list", newprops);
    this.setState({ crops: newprops.crops });
  }
  render() {
    const { crops } = this.state;
    console.log(crops);
    // const item;
    let item;
    // const a = {}
    if (Object.keys(crops).length !== 0) {
      console.log("aaaaa");
      item = this.state.crops.map((item, key) => (
        <tr>
          <th>{key + 1}</th>
          <th>{item.crop}</th>
          <th>{item.quantity}</th>
        </tr>
      ));
    }
    // const listItems = crops.map((item) =>
    // <li key={1}>{item.quantity}</li>
    // );

    return (
      <MDBRow className="mb-4">
        <MDBCol md="12" className="mb-12">
          <MDBCard>
            <MDBCardHeader>Crops List</MDBCardHeader>
            <MDBCardBody>
              {item && (
                <MDBTable hover>
                  <MDBTableHead color="blue lighten-4">
                    <tr>
                      <th>#</th>
                      <th>Crops name</th>
                      <th>Total left</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>{item}</MDBTableBody>
                </MDBTable>
              )}
              {!item && <div>No crops Available. Please add crops</div>}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default TableSection;

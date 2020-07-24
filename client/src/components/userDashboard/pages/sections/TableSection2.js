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
import axios from "axios";

class TableSection extends React.Component {
  state = {
    crops: null,
    error: false,
    loading: true,
  };

  async componentDidMount() {
    const url = "/api/user/get-orders";
    const body = {
      role: "farmer",
    };
    const res = await axios.post(url, body);
    const data = await res.data;

    console.log("data loadin ", data.crops);
    this.setState({ crops: data.crops, loading: false });
  }
  //   componentWillReceiveProps(newprops) {
  //     this.setState({ crops: newprops.crops });
  //   }
  render() {
    const { crops, error, loading } = this.state;
    if (loading) return <div>Loading </div>;
    if (error) return <div>Error Occured</div>;

    let item;
    if (Object.keys(crops).length !== 0) {
      item = this.state.crops.map((item, key) => (
        <tr>
          <th>{key + 1}</th>
          <th>{item.order_id}</th>
          <th>{item.crop_details.name}</th>

          <th>
            {item.isDelivered !== false ? (
              <div>Delivered</div>
            ) : (
              <div>Not Delivered</div>
            )}
          </th>
          <th>{item.DeliveryDate}</th>
        </tr>
      ));
    }
    const listItems = crops.map((item) => <li key={1}>{item.quantity}</li>);

    return (
      <MDBRow className="mb-4">
        <MDBCol md="12" className="mb-12">
          <MDBCard>
            <MDBCardHeader>Order List</MDBCardHeader>
            <MDBCardBody>
              {item && (
                <MDBTable hover>
                  <MDBTableHead color="blue lighten-4">
                    <tr>
                      <th>#</th>
                      <th>Order Id</th>
                      <th>Ordered Crop</th>

                      <th>Delivery status</th>
                      <th>Delivery Date</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>{item}</MDBTableBody>
                </MDBTable>
              )}
              {!item && <div>No Orders Available.</div>}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default TableSection;

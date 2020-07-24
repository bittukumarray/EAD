import React, { Component } from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from "mdbreact";
import { Line, Doughnut } from "react-chartjs-2";

class ChartSection2 extends Component {
  state = {
    dataLine: {
      labels: []
    }
  };
  componentWillReceiveProps(newprops) {
    const dataLine = {
      labels: newprops.labels,
      datasets: [
        {
          data: newprops.data,
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#226ACA",
            "#117A3A",
            "#691A0A",
            "#701EAC ",
            "#DC0A3A ",
            "#299387 ",
            "#060C72 ",
            "#DE5DC2 "
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#226ACA",
            "#117A3A",
            "#691A0A",
            "#701EAC ",
            "#DC0A3A ",
            "#299387 ",
            "#060C72 ",
            "#DE5DC2 "
          ]
        }
      ]
    };
    this.setState({ dataLine });
  }
  render() {
    const { dataLine } = this.state;
    return (
      <MDBRow className="mb-4">
        <MDBCol lg="9">
          <MDBCard className="mb-4">
            <MDBCardHeader>Number of Crops (per kg)</MDBCardHeader>
            <MDBCardBody>
              {dataLine.labels.length > 0 && (
                <Doughnut
                  data={dataLine}
                  height={250}
                  options={{ responsive: true }}
                />
              )}
              {dataLine.labels.length === 0 && (
                <div>No crops Available. Please add crops</div>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default ChartSection2;

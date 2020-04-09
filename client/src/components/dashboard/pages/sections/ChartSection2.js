import React, { Component } from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from "mdbreact";
import { Line, Doughnut } from "react-chartjs-2";

class ChartSection2 extends Component {
  render() {
    const dataLine = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Crops(in %)",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 70]
        }
      ]
    };

    const dataDoughnut = {
      labels: ["Wheat", "Rice", "Maize", "Millet", "Pulses"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774"
          ]
        }
      ]
    };

    return (
      <MDBRow className="mb-4">
        {/*<MDBCol md="12" lg="4" className="mb-4">
                    <MDBCard className="mb-4">
                    <MDBCardHeader>Sales</MDBCardHeader>
                    <MDBCardBody>
                        <Line data={dataLine} options={{responsive: true }} />
                    </MDBCardBody>
                    </MDBCard>
        </MDBCol>*/}
        <MDBCol lg="9">
          <MDBCard className="mb-4">
            <MDBCardHeader>Number of Crops (per kg)</MDBCardHeader>
            <MDBCardBody>
              <Doughnut
                data={dataDoughnut}
                height={250}
                options={{ responsive: true }}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default ChartSection2;

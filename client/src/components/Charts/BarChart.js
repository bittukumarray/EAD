import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataHorizontal: { labels: [] },
  };
  componentWillReceiveProps(newprops) {
    const dataHorizontal = {
      labels: newprops.labels,
      datasets: [
        {
          label: newprops.heading,
          data: newprops.data,
          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          // borderWidth: 1
        },
      ],
    };
    this.setState({ dataHorizontal });
  }
  render() {
    const { dataHorizontal } = this.state;
    return (
      <MDBContainer>
        <h3 className="mt-5">Bar chart</h3>
        {dataHorizontal.labels.length > 0 && (
          <HorizontalBar data={dataHorizontal} options={{ responsive: true }} />
        )}
        {dataHorizontal.labels.length === 0 && (
          <div>No crops Available. Please add crops</div>
        )}
      </MDBContainer>
    );
  }
}

export default ChartsPage;

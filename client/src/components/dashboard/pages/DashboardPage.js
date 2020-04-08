import React from 'react';
// import { MDBRow } from 'mdbreact';
import AdminCardSection1 from './sections/AdminCardSection1';
// import AdminCardSection2 from './sections/AdminCardSection2';
import TableSection from './sections/TableSection';
import TableSection2 from './sections/TableSection2';
// import BreadcrumSection from './sections/BreadcrumSection';
// import ChartSection1 from './sections/ChartSection1';
import ChartSection2 from './sections/ChartSection2';
// import MapSection from './sections/MapSection';
// import ModalSection from './sections/ModalSection';
// import '../index.css';


const DashboardPage =  () => {
  return (
    <React.Fragment>
      {/* <AdminCardSection1 /> */}
      <TableSection2/>
      <TableSection/>
      <ChartSection2 />
    </React.Fragment>
  )
}

export default DashboardPage;
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
///whenever interact with redux we have to use connect
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert //check the name in rootreducer
});

export default connect(mapStateToProps)(Alert);

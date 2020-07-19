// import React, { Fragment, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCol,
  MDBInput,
  MDBCardBody,
  MDBCardHeader,
  MDBIcon,
  MDBBtn
} from "mdbreact";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
// import { Redirect } from "react-router-dom";
import { loginCompany } from "../../actions/auth";
import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, withStyles } from "@material-ui/styles";
import { blue } from "@material-ui/core/colors";
import { connect } from "react-redux";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { Redirect } from "react-router-dom";

import { loginAllUser } from "../../actions/auth";
const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const useStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "55vh"
  },
  margin: {
    margin: theme.spacing(2)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },

  input: {
    height: "45px",
    width: "100%"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/collection/8706966)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Whizingo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class Login extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      console.log("push profile page");
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }

    //   if (nextProps.errors) {
    //     this.setState({ errors: nextProps.errors });
    //   }
  }
  onSubmitLogin = e => {
    const { email, password } = this.state;
    e.preventDefault();
    console.log("Success submit");
    console.log(email, password);
    this.props.loginAllUser(email, password);
  };

  state = {
    password: "",
    email: ""
  };

  onChange_email = e => {
    this.setState({
      email: e.target.value
    });
  };

  onChange_password = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    console.log("Wilson", this.props.isAuthenticated);
    const { classes } = this.props;
    // if (this.props.isAuthenticated) {
    //   console.log("User is Logged in successfully!!", this.props);
    // } else {
    //   console.log("Authentication Failed!!", this.props);
    // }

    const redirectToReferrer = this.props.isAuthenticated;
    if (redirectToReferrer === true) {
      return <Redirect to="/catalog" />;
    }

    return (
      <React.Fragment>
        <br />
        <br />
        <Grid container component="main" className={classes.image}>
          {/* <CssBaseline /> */}
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.root} noValidate>
                <ThemeProvider theme={theme}>
                  <TextField
                    className={classes.margin}
                    label="Email"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    InputProps={{
                      className: classes.input
                    }}
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange_email}
                  />
                  <TextField
                    className={classes.margin}
                    label="Password"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    type="password"
                    InputProps={{
                      className: classes.input
                    }}
                    value={this.state.password}
                    onChange={this.onChange_password}
                  />

                  {/* <Link href="/success"> */}
                  <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    className={classes.submit}
                    onClick={this.onSubmitLogin}
                  >
                    Submit
                  </Button>
                  {/* </Link> */}
                  <Grid container spacing={4}>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </ThemeProvider>
              </form>

              <Box mt={5}>
                <Copyright />
              </Box>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  loginAllUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert, loginAllUser }, null, {
  pure: false
})(withStyles(useStyles)(Login));

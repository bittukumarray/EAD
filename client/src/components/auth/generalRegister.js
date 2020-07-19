import { setAlert } from "../../actions/alert";
import { registerFarmer } from "../../actions/auth";

import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, withStyles } from "@material-ui/styles";
import { blue } from "@material-ui/core/colors";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Agventure
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
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
    margin: theme.spacing(1)
  },
  margin1: { margin: theme.spacing(0.5) },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },

  input: {
    height: "45px",
    width: "100%"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/collection/1461851)",
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
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
};

class Register extends Component {
  componentDidMount() {
    console.log("hello");
    console.log(this.props.auth);
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  state = {
    name: "",
    password: "",
    password2: "",
    email: ""
  };
  onSubmitRegistration = e => {
    console.log("wilson");
    const { name, email, password, password2 } = this.state;

    if (password !== password2) {
      alert("password not match", "danger");
      alert("test alert ", "danger");
    } else {
      console.log(name, email, password);
      // console.log(formData);
      this.props.registerFarmer({ name, email, password });
    }
  };

  onChange_username = e => {
    this.setState({
      name: e.target.value
    });
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

  onChange_confirmpassword = e => {
    this.setState({
      password2: e.target.value
    });
  };

  render() {
    const { classes } = this.props;
    // if (this.props.isRegistered) {
    //   console.log("User is registered successfully!!");
    // } else {
    //   console.log("Registration failed!!", this.props);
    // }

    const redirectToReferrer = this.props.isAuthenticated;
    if (redirectToReferrer === true) {
      return <Redirect to="/catalog" />;
    }

    return (
      <React.Fragment>
        <Grid container component="main" className={classes.image}>
          {/* <CssBaseline /> */}
          {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
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
              <Typography
                component="h1"
                variant="h6"
                className={classes.margin}
              >
                Sign Up For General User
              </Typography>
              <form className={classes.root} noValidate>
                <ThemeProvider theme={theme}>
                  <TextField
                    className={classes.margin1}
                    label="Name"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    InputProps={{
                      className: classes.input
                    }}
                    onChange={this.onChange_username}
                    value={this.state.name}
                  />
                  <TextField
                    className={classes.margin1}
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
                    className={classes.margin1}
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
                  <TextField
                    className={classes.margin1}
                    label="Confirm Password"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    type="password"
                    InputProps={{
                      className: classes.input
                    }}
                    value={this.state.password2}
                    onChange={this.onChange_confirmpassword}
                  />
                  {/* <Link href="/login"> */}
                  <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    className={classes.submit}
                    onClick={this.onSubmitRegistration}
                  >
                    Submit
                  </Button>
                  {/* </Link> */}
                  <Grid container spacing={4}>
                    <Grid item xs>
                      <div href="#" variant="body2">
                        Already have an account ?
                      </div>
                    </Grid>
                    <Grid item>
                      <Link href="/login" variant="body2">
                        {"Sign In"}
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  isRegistered: PropTypes.bool,
  registerFarmer: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors,
    isAuthenticated: state.auth.isAuthenticated,
    isRegistered: state.auth.isRegistered,
    userData: state.auth.userData
  };
};

export default connect(mapStateToProps, { setAlert, registerFarmer })(
  withStyles(useStyles)(Register)
);

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import CompanyRegister from "./components/auth/CompanyRegister";
import CompanyLogin from "./components/auth/CompanyLogin";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from './components/dashboard/Dashboard';
import BlogPage from './components/cropsInfo';
import Crops from './components/crops/Crops'


import TopNavigation from './components/dashboard/topNavigation'

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
// import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
// import companyRegister from "./components/auth/companyRegister";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  //it is like component did mount
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
  }, []);
  return (
    <Provider store={store}>
      <Router>
        {/* <div className="flyout"> */}
        {/* <Navbar /> */}

        <TopNavigation />

        <main style={{ marginTop: "4rem" }}>
          <Alert />

          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/company-register" component={CompanyRegister} />
            <Route exact path="/company-login" component={CompanyLogin} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/crops-info" component={BlogPage} />
            <Route exact path="/crops" component={Crops} />

            <Route exact path="/" component={Landing} />
          </Switch>
        </main>
        {/* </div> */}
      </Router>
    </Provider>
  );
};

export default App;

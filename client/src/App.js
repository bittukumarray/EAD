import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import CompanyRegister from "./components/auth/CompanyRegister";
import CompanyLogin from "./components/auth/CompanyLogin";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import UserDashboard from "./components/userDashboard/Dashboard";
import BlogPage from "./components/cropsInfo";
import Crops from "./components/crops/Crops";
import WeatherPage from "./components/wheather";
import CatalogPage from "./components/catalog";
import DetailcropsPage from "./components/detail-crops";
import Crop from "./components/crop/Crop";
import Landing from "./components/landing";
import TopNavigation from "./components/dashboard/topNavigation";
import PrivateRoute from "./components/common/PrivateRoute";
import RegisterTab from "./components/auth/tabview";
import ProfilePage from "./components/dashboard/pages/ProfilePage"; //./pages/ProfilePage";
import ProductPage from "./components/crop/cropDetails";
import AddCrop from "./components/dashboard/pages/AddCrop";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
// import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Payment from "./components/payment/Payment";
import AllCrops from "./components/allCrops/allCrops";
import SingleCrop from "./components/allCrops/crop";
import Cart from "./components/cart/cart";
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
        <Route exact path="/" component={Landing} />
        <TopNavigation />
        <main style={{ marginTop: "4rem" }}>
          <Alert />

          <Switch>
            <Route exact path="/register" component={RegisterTab} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/company-register" component={CompanyRegister} />
            <Route exact path="/company-login" component={CompanyLogin} />
            {/* <Route exact path="/dashboard" component={Dashboard} /> */}
            <PrivateRoute
              exact
              path="/user-dashboard"
              component={UserDashboard}
            />

            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/crop/detail/:id" component={ProductPage} />
            <Route exact path="/crops-info" component={BlogPage} />
            <Route exact path="/crops" component={AllCrops} />
            <Route exact path="/crops/:id" component={SingleCrop} />
            <Route exact path="/farmer-crops" component={Crops} />
            <Route exact path="/farmer-crop/:id" component={Crop} />
            <Route exact path="/weather-report" component={WeatherPage} />
            {/* <Route exact path="/catalog/detail-crops" component={CatalogPage} />*/}
            {/* <Route path="/profile" component={ProfilePage} /> */}
            <Route path="/add-crop" component={AddCrop} />
            <Route path="/cart" component={Cart} />

            <Route exact path="/catalog" component={CatalogPage} />
            <Route exact path="/catalog/" component={DetailcropsPage} />
            {/* <Route exact path="/payment" component={Payment} /> */}
          </Switch>
        </main>
        {/* </div> */}
      </Router>
    </Provider>
  );
};

export default App;

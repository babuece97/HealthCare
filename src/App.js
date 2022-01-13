import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About/About";
import Departments from "./Pages/Departments/Departments";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Services from "./Pages/Services/Services";
import NavBar from "./Pages/Header/NavBar";
import Gallery from "./Pages/Gallery/Gallery";
import ServiceInfo from "./Pages/ServiceInfo/ServiceInfo/ServiceInfo";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import ConsultantInfo from "./Pages/ConsultantInfo/ConsultantInfo";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Header></Header>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/departments">
              <Departments></Departments>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/serviceInfo/:serviceId">
              <ServiceInfo></ServiceInfo>
            </PrivateRoute>
            <PrivateRoute path="/consultentInfo/:consultentId">
              <ConsultantInfo></ConsultantInfo>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

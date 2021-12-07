import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import CallAction from "./components/callAction";
import Contact from "./components/contact";
import About from "./components/about";
import Appointment from "./components/appointment";
import ScrollToTop from "./components/scrollToTop";
import DigitalDentistry from "./components/digitalDentistry";
import Products from "./components/products";
import Shipping from "./components/shipping";
import Price from "./components/price";
import NotFound from "./components/notFound";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <>
          <Header />
          <div>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/price" component={Price} />
              <Route exact path="/shipping" component={Shipping} />
              <Route exact path="/digital" component={DigitalDentistry} />
              <Route exact path="/appointment" component={Appointment} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/notfound" component={NotFound} />
              <Redirect from="/" exact to="/home" />
              <Redirect from="*" exact to="/notfound" />
            </Switch>
          </div>
          <CallAction />
          <Footer />
        </>
      </ScrollToTop>
    </Router>
  );
}

export default App;

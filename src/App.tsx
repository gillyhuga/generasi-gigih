// import BasicLoop from "./pages/Example/module-2-example-4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Navbar from "./component/Navbar";
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Provider store={store}>
          <Switch>
            <Route path="/trending">
              <Trending />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;


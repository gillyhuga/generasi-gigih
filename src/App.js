// import BasicLoop from "./pages/Example/module-2-example-4";
import Search from "./pages/Search";
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";

// const giphy_secret_key = process.env.REACT_APP_GIPHY_KEY
// console.log(giphy_secret_key)

function App() {
  return (
    <Provider store={store}>
    <div className="App"> 
      <Search />
    </div>
    </Provider>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Products from './components/Products';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from './components/Admin';
import AddProduct from './components/AddProduct';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav /> */}
        <Sidebar/>
        <Switch>
          <Route path="/home">
            <Products />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/add-product">
            <AddProduct/>
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

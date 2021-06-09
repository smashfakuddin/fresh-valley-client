import './App.css';
import Nav from './components/Nav';
import Products from './components/Products';
import Login from './components/Login';
import Admin from './components/Admin';
import AddProduct from './components/AddProduct';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/home" component={Products} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

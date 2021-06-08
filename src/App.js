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

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/home">
            <Products />
          </Route>
          <Route path="/login">
            <Login/>
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

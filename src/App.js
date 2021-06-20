import './App.css';
import Nav from './components/Nav';
import Products from './components/Products';
import Login from './components/Login';
import Admin from './components/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Order from './components/Order';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteAdmin from './components/PrivateRouteAdmin';
import Deals from './components/Deals';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/home" >
              <Products />
            </Route>

            <Route path="/login" >
              <Login />
            </Route >

            <PrivateRoute path="/admin" >
              <Admin />
            </PrivateRoute >
            <PrivateRoute exact path="/orders" >
              <Order />
            </PrivateRoute>
            <Route exact path="/deals" >
              <Deals />
            </Route>

            <Route path='/'>
              <Products />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}
export default App;

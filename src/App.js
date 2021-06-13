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

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});


  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/home" component={Products} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route path="/" component={Products} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

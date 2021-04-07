import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LogIn from './components/LogIn/LogIn';
import SignIn from './components/SignIn/SignIn';
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';
import SearchResult from './components/SearchResult/SearchResult';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({ success: false })
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/signIn">
              <SignIn />
            </Route>
            <PrivateRoute path="/searchResult">
              <SearchResult />
            </PrivateRoute>
            <PrivateRoute path="/:id">
              <Search />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

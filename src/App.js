import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user,authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
              <Router>
              <Navbar />
              <Switch>
                <Route exact path="/">
                   {user ? <Home /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login">
                  {!user && <Login />}
                  {user && <Redirect to="/" />}
                </Route>
                <Route path="/signup">
                   {!user && <Signup />}
                   {user && <Redirect to="/" />} 
                </Route>
              </Switch>
            </Router>
      )}
    </div>
  );
}

export default App;

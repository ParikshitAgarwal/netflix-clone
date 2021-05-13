import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser("");
      }
    });
  
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <SignIn />
        ) : (
         <Home />
        )}
      </Router>
    </div>
  );
}

export default App;

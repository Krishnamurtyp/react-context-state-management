import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact component={Homepage} />
      </Switch>
    </Router>
  );
};

export default App;

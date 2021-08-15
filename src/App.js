import "./app.css";
import HomePage from "./Components/HomePage";
import CharacterProfile from "./Components/CharacterProfile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
      <Route path={'/'} strict exact component={HomePage} />
      <Route path={'/characters/:id'} strict exact component={CharacterProfile} />
      </Switch>
    </Router>
  )
}

export default App;

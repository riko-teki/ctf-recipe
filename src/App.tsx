import classes from "./App.module.css";
import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/home";
import NotFound from "./components/pages/404";
import Header from "./components/containers/header";

function App() {
  return (
    <>
      <Header></Header>
      <div className={classes.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;

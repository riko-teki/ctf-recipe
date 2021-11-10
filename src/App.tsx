import classes from "./App.module.css";
import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/home";
import NotFound from "./components/pages/404";
import Header from "./components/containers/header";
import SideMenu from "./components/containers/sidemenu";
import Base64 from "./components/pages/base64";

function App() {
  return (
    <>
      <Header></Header>
      <div className={classes.container}>
        <div className={classes.mainview}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/base64" component={Base64}/>
            <Route component={NotFound} />
          </Switch>
        </div>
        <SideMenu></SideMenu>
      </div>
    </>
  );
}

export default App;

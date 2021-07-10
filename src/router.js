import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";

export default () => {
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  </BrowserRouter>;
};

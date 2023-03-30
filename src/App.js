import { Route, Switch } from 'react-router-dom';
import Homepage from './screen/Homepage';
import "../src/assets/scss/main.scss";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/products" component={Homepage} />
        <Route exact path="/applications" component={Homepage} />
        <Route exact path="/aboutUs" component={Homepage} />
        <Route exact path="/contactUs" component={Homepage} />

      </Switch>
    </>
  );
}

export default App;

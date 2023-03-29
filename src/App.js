import { Route, Switch } from 'react-router-dom';
import Homepage from './screen/Homepage';
import "../src/assets/scss/main.scss";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </>
  );
}

export default App;

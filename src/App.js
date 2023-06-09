import { Route, Switch } from 'react-router-dom';
import Homepage from './screen/Home/Homepage';
import Header from './globals/Header';
import "../src/assets/scss/main.scss";
import Footer from './globals/Footer';
import OurProcucts from './screen/Products/OurProducts';
import Products from './screen/Home/Products'

function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/products" component={Homepage} />
          <Route exact path="/applications" component={Homepage} />
          <Route exact path="/aboutUs" component={Homepage} />
          <Route exact path="/contactUs" component={Homepage} />
          <Route exact path="/product/:product" component={OurProcucts} />
        </Switch>
      <Footer />

    </>
  );
}

export default App;

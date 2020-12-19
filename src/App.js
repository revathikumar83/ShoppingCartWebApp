import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./component/Screens/HomeScreen"
import OrderScreen from "./component/Screens/OrderScreen";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">

            <header className="header">
              
              
              <Link to="/" className="margin"><HomeIcon  className="name"  fontSize="large" /> 
              </Link>
              
              <Link to="/admin"  ><PersonIcon  className="person" fontSize='large'/></Link>
              
              
              </header>
            <main>
              <Route path="/order" component={OrderScreen} />
              <Route path="/" component={HomeScreen} exact />
              </main>
            <footer ></footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
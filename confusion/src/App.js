import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import Dishdetail from "./components/DishdetailComponent";


class App extends Component {
   /* constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
*/
    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    }
  /*render() {
    return (
        <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
            <Menu dishes={this.state.dishes} />
            {/!*<Dishdetail dishes={this.state.dishes} />*!/}
        </div>
    );
  }*/
}



export default App;

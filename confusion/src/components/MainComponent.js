import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import DishDetail from './DishdetailComponent';
import About from "./AboutComponent";

import {DISHES} from '../shared/dishes';
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";

import { addComment } from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({

    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});



class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    };

    render() {
        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                            addComment={this.props.addComment}
                />
            );
        };

        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage} />

                    <Route path='/aboutus' component={About} />

                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route exact path='/contactus' component={Contact} />} />
                    <Redirect to="/home" />
                </Switch>

                <Footer/>
            </div>
        );
    }
}

export default Main;

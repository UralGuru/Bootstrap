import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class Dishdetail extends Component {

    render() {
        const {dish} = this.props;

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {/*<RenderDish dish={dish} />*/}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {/*<RenderComments comments={dish.comments} />*/}
                    </div>
                </div>
            </div>
        );
    }


    RenderDish = (dish) => {
        if (dish != null) {
            return (
                <div className="container">
                    <React.Fragment>
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(dish.comments)}
                        </div>

                    </React.Fragment>
                </div>

            )
        } else {
            return (<div></div>)
        }
    }

    RenderComments = (comments) => {
        if (comments != null) {
            const com = comments.map(co => {
                return (
                        <React.Fragment>
                            <li>{co.comment}</li>
                            <br/>
                            <li>-- {co.author}, {this.formatDate(co.date)}</li>
                            <br/>
                        </React.Fragment>
                    )
                }
            );
            return (
                <ul className="list-unstyled">
                    {com}
                </ul>
            )
        } else {
            return (<div></div>)
        }
    }

    formatDate(date) {
        const option = {year: 'numeric', month: 'short', day: 'numeric'};
        const date1 = new Date(date)
        const newdate = date1.toLocaleDateString("en-US", option)
        return newdate;
    }
}


export default Dishdetail;
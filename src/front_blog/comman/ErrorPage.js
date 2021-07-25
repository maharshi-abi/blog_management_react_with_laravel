import React ,{Component} from 'react';
import { Link } from "react-router-dom";

class ErrorPage extends Component{
    constructor (props) {
        super(props);        
    }
    render() {
        return (
            <React.Fragment>
                <section className="normal-breadcrumb set-bg" style={{backgroundImage:"url(../img/normal-breadcrumb.jpg)"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="normal__breadcrumb__text">
                                    <h2>404 Page</h2>
                                    <Link to='/' >Go Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
};

export default ErrorPage;


import React ,{Component} from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './comman/Footer';
import Header from './comman/Header';
import HomePage from './pages/HomePage';
import PublicRoute from './RouteConfig/PublicRoute';
import PrivateRoute from './RouteConfig/PrivateRoute';
import ErrorPage from './comman/ErrorPage';
import Blog from './pages/Blog';

class FrontSection extends Component{  
  constructor (props) {
    super(props);    
  }
  render() {
    return (
      <div className="App">         
        <Router onUpdate={() => window.scrollTo(0, 0)} >
          {/* Header section */}  
          <Header></Header>        
          <Switch>
            <PublicRoute restricted={true} path="/" component={HomePage} exact />
            <PublicRoute restricted={true} path="/blog" component={Blog} exact />
            <Route path="*" render={() => <ErrorPage></ErrorPage>}/>
            <Route path="" render={() => <ErrorPage></ErrorPage>}/>
            <Route path="*" render={() => <ErrorPage></ErrorPage>}/>
            <Route render={() => <ErrorPage></ErrorPage>}/>
          </Switch>
          {/* Footer Section */}
          <Footer></Footer>  
        </Router>

      </div>
    );
  }
}

export default FrontSection;

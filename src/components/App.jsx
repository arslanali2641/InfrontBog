import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Users from "./Users/Users";
import SignUp from "./SignUp/SignUp";
import Navbar from "./Navbar/Navbar";
import CreatePost from "./CreatePost/CreatePost";
import Home from "./Home/Home";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <div>
      
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/createpost" component={CreatePost} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("State", state);
};
export default connect(mapStateToProps)(App);

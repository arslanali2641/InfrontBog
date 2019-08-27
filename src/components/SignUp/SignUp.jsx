import React, { Component } from 'react'
import axios from 'axios';

class SignUp extends Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        password: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        axios.post("/signup", this.state).then(res => console.log(res));
    };


  render() {
    return (

<div className="container my-4">
<form onSubmit={this.handleSubmit} className="col-md-6 mx-auto">
<div className="form-group">
    <label for="name">First Name</label>
    {" "}
    <input className="form-control" type="text" name="fname" placeholder="Enter name"  onChange={this.handleChange}/>
</div>
<div className="form-group">
    <label for="name">Last Name</label>
    {" "}
    <input className="form-control" type="text" name="lname" placeholder="Enter name"  onChange={this.handleChange}/>
</div>
<div className="form-group"> 
    <label for="email">Email address</label>
    {" "}
    <input className="form-control" type="email" name="email" placeholder="Enter email" onChange={this.handleChange}/>
    <small className="form-text text-muted">Your Email will not ever be shared</small>
</div>

<div className="form-group">
    <label for="password">Password</label>
    {" "}
    <input className="form-control" type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
</div>

<button className="btn btn-primary btn-block" type="submit">Submit</button>
</form>
</div>

    )
  }
}

export default  SignUp;

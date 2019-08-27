import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light  bg-light mb-3">
        <div className="container">
            <Link className="navbar-brand" to="/">Blog</Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/createpost">Create Post</Link>
                </li>
            </ul>
        </div>
    </nav>
    )
  }
}

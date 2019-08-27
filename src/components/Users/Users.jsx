import React, { Component } from 'react';
import axios from 'axios';




 class Users extends Component {
     state = {
         data: []
     };
     componentDidMount(){
         axios.get("/api/users").then(res =>
            this.setState({
                data: [...res.data]
            })
            );
     };
  render() {
      let response = this.state.data.map(user => {
          return (
                <tr key={user._id}>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.email}</td>
                </tr>
          )
      })
    return (
      <div className="container">
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
               {response}            
            </tbody>
        </table>
      </div>
    )
  }
}

export default Users;
import React, { Component } from 'react';
import axios from 'axios';
import ReadMoreReact from 'read-more-react';


class Home extends Component {
    state = {
        data: []
    };

    componentDidMount(){
        axios.get("/api/posts")
        .then(res => {
          this.setState({data: res.data});
        })
        .catch ( e => {
          console.log("error", e)
        }); 
            
    }
  render() {
      let response = this.state.data.map(post => {
          return(
            <div className="card m-4" key={post._id}>
            <img className="card-img-top img-fluid" src={post.path} alt="" />
            <div className="card-body">
            <h4 className="card-title">{post.title}</h4>
            <p className="card-text"><ReadMoreReact text={post.desc}
            min={20}
            ideal={60}
            max={200}
            readMoreText={"readMoreText"}/></p>
            <p className="card-text">
                <small className="text-muted">By {post.author}</small> | <small className="text-muted">On {post.postDate}</small>
            </p>
            </div>
            </div>
          )
      })
    return (
        <div className="container">
      <div className="card-columns" >
        {response}
      </div>
      </div>
    )
  }
}

export default Home;

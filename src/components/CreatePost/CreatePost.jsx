import React, { Component } from 'react'
import axios from 'axios';

class CreatePost extends Component {
    state = {
        title: "",
        desc: "",
        author: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    uploadFile = e => {
        this.setState({
            file: e.target.files[0]
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        let forms = new FormData();

        forms.append("image", this.state.file);
        forms.append("author", this.state.author);
        forms.append("title", this.state.title);
        forms.append("desc", this.state.desc);

        axios.post("/createpost", forms).then(res => {
            console.log(res);
        });
    };

  render() {
    return (
        <div className="container my-4">
        <form onSubmit={this.handleSubmit} className="col-md-6 mx-auto">
        <div className="form-group">
            <h1 className="h3">Create Post</h1>
            <label htmlFor="title">Post Title</label>
            {" "}
            <input className="form-control" type="text" id="title" name="title" placeholder="Enter name"  onChange={this.handleChange}/>
        </div>
        <div className="form-group">
                <label htmlFor="desc">Description</label>
                {" "}
                <textarea className="form-control" id="desc" placeholder="Description" rows="10" name="desc" onChange={this.handleChange} ></textarea>
        </div>
        <div className="form-group"> 
            <label htmlFor="email">Author</label>
            {" "}
            <input className="form-control" type="text" id="email" name="author" placeholder="Author Name" onChange={this.handleChange}/>
        </div>
        <div className="custom-file mb-4">
                <input type="file" id="myfile" className="custom-file-input" onChange={this.uploadFile} />
                <label htmlFor="myfile" className="custom-file-label">Choose Image</label>
        </div>
        <br/>

        
        <button className="btn btn-primary btn-block" type="submit">Publish</button>
        </form>
        </div>
    )
  }
}

export default CreatePost;
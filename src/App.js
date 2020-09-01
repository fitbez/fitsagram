import React, { Component } from "react";
import Comment from "./components/Comment";
import "./App.css";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        photo: require("./images/photo-one.jpeg"),
        title: "title one",
        comments: [],
      },
      {
        id: 1,
        photo: require("./images/photo-two.jpeg"),
        title: "title one",
        comments: [],
      },
      {
        id: 2,
        photo: require("./images/photo-three.jpeg"),
        title: "title one",
        comments: [],
      },
    ],
  };

  handleAddComment = (id, comment) => {
    const newComment = {
      id: uuid(),
      comment: comment,
    };

    this.setState({
      posts: this.state.posts.map((post) => {
        if (post.id === id) {
          post.comments.push(newComment);
        }
        return post;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.posts.map((post) => (
          <div className="post" key={post.id}>
            <img src={post.photo} alt="vacation" />
            <Comment posts={post} handleAddComment={this.handleAddComment} />
            <div className="comment">
              {post.comments.map((comment) => (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <div className="clear">Clear</div>
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

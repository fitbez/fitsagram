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

    // return this.state.posts;
    // console.log(this.state.posts);
  };

  render() {
    return (
      <div className="App">
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <div>
              {post.comments.map((comment) => (
                <div key={comment.id}>
                  <button>x</button>
                  <p>{comment.comment}</p>
                </div>
              ))}
            </div>
            <button>X</button>
            <img src={post.photo} alt="vacation" />
            <Comment posts={post} handleAddComment={this.handleAddComment} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;

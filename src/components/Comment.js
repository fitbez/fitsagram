import React, { Component } from "react";

export default class Comment extends Component {
  state = {
    id: 0,
    comment: "",
  };

  onChange = (e) => {
    this.setState({
      comment: e.target.value,
    });

    console.log(this.state.comment);
  };

  onSubmit = (id) => {
    this.props.handleAddComment(id, this.state.comment);
    this.setState({
      comment: "",
    });
    console.log(id);
  };
  render() {
    return (
      <div>
        <input onChange={this.onChange} type="text" placeholder="comment" />
        <button
          onClick={() => {
            this.onSubmit(this.props.posts.id);
            console.log(this.props.posts);
          }}
        >
          + Add Comment
        </button>
      </div>
    );
  }
}

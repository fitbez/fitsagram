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
        <input
          style={inputStyle}
          onChange={this.onChange}
          type="text"
          placeholder="comment"
        />
        <button
          style={buttonStyle}
          disabled={!this.state.comment}
          onClick={() => {
            this.onSubmit(this.props.posts.id);
            console.log(this.props.posts);
          }}
        >
          Comment
        </button>
      </div>
    );
  }
}

const inputStyle = {
  padding: "10px 5px",
  margin: "7px",
  width: "300px",
  border: "none",
  borderBottom: "1px solid #333",
  outline: "none",
  fontSize: "20px",
};

const buttonStyle = {
  padding: "10px 15px",
  background: "#d04115",
  border: "none",
  color: "#fff",
};

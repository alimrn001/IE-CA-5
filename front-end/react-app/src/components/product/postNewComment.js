import React, { Component } from "react";
import "../../assets/styles/product-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

class PostNewComment extends Component {

  render() {
    return (
        <div className="row mb-3">
            <form action="" method="post">
            <label for="opinion" className="form-label text-brown h4">
                Submit your opinion
            </label>
            <div className="d-flex">
                <div className="col-lg-11">
                <textarea
                    className="form-control comment-text-input"
                    id="opinion"
                    rows="3"
                    required
                ></textarea>
                </div>
                <div className="col-lg-1">
                <button
                    className="= btn comment-submit-button"
                    type="submit"
                >
                    Post
                </button>
                </div>
            </div>
            </form>
        </div>
    );
  }
}

export default PostNewComment;

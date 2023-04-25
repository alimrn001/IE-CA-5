import React, { Component } from "react";
import "../../assets/styles/product-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import likeImgURL from "../../assets/img/like.png";
import dislikeImgURL from "../../assets/img/dislike.png";


class Comment extends Component {

  render() {
    return (
      <div>
        <div className="row">
            <p className="comment-text">{this.props.comment.commentText}</p>

            <pre className="comment-date">
            <span>{this.props.comment.commentDate}</span> . <span>{this.props.comment.commentUsername}</span>
            </pre>
            <p className="text-end">
            <span className="text-brown">
                Is this comment helpful?{" "}
            </span>
            {this.props.comment.commentLikes}
            <span>
                <button type="submit" className="no-border">
                <img
                    src={likeImgURL}
                    alt="like"
                />
                </button>
            </span>
            {this.props.comment.commentDislikes}
            <span>
                <button type="submit" className="no-border">
                <img
                    src={dislikeImgURL}
                    alt="dislike"
                />
                </button>
            </span>
            </p>
        </div>

        <div className="row spacer"> </div>
      </div>
    );
  }
}

export default Comment;

import React from "react";
import "./post.css";

class Post extends React.Component {
  getLayoutStyle = layout => {
    switch (layout) {
      case "horizontal":
        return "horizontal-image";

      case "vertical":
        return "vertical-image";

      default:
        return "image-container";
    }
  };

  render() {
    return (
      <div
        className={"post-container " + this.getLayoutStyle(this.props.layout)}
      >
        {this.props.src && <img src={this.props.src} alt="funny_image" />}
        {this.props.description && <div className={"description " + (this.props.src ? "" : "no-image")}>{this.props.description}</div>}
      </div>
    );
  }
}

export default Post;

import React from "react";
import "./post.css";

class Post extends React.Component {

  getLayout = () => {
    let width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    console.log(width);
    if(this.props.alignment && width>=710){
      // if(this.props.src){
      //   return <img src={this.props.src} alt="funny_image" />
      // }
      // if(this.props.description){
      //   return <div className={"description " + (this.props.src ? "" : "no-image")}>{this.props.description}</div>
      // }
      return (
      <div
        className={"post-container " + this.getLayoutStyle(this.props.layout)}
      >
          {this.props.description && <div className={"description " + (this.props.src ? "" : "no-image")}>{this.props.description}</div>}
          {this.props.src && <img src={this.props.src} alt="funny_image" />}
      </div>
      );
    } else {
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

  getLayoutStyle = layout => {
    switch (layout) {
      case "Horizontal":
        return "horizontal-image";

      case "Vertical":
        return "vertical-image";

      default:
        return "image-container";
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.getLayout()}
      </React.Fragment>
    );
  }
}

export default Post;

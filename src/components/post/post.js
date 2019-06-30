import React from 'react';
import './post.css';

class Post extends React.Component {
  getLayout = () => {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (this.props.alignment && width >= 710) {
      return (
        <div
          className={'post-container ' + this.getLayoutStyle(this.props.layout)}
        >
          {this.props.description && (
            <div
              className={'description ' + (this.props.src ? '' : 'no-image')}
            >
              {this.props.description.split('_nl_').map((line, index) => {
                return (
                  <p key={index} style={{ margin: '0px' }}>
                    {line}
                  </p>
                );
              })}
            </div>
          )}
          {!this.props.hideImage && this.props.layout ? (
            this.props.layout === 'Vertical' ? (
              <img
                src={this.props.src}
                style={{
                  width: `${this.props.width}`,
                  height: `${this.props.height}`,
                }}
                alt="funny_image"
              />
            ) : (
              <img src={this.props.src} alt="funny_image" />
            )
          ) : null}
        </div>
      );
    } else {
      return (
        <div
          className={'post-container ' + this.getLayoutStyle(this.props.layout)}
        >
          {!this.props.hideImage && this.props.layout ? (
            this.props.layout === 'Vertical' ? (
              <img
                src={this.props.src}
                style={{
                  width: `${this.props.width}`,
                  height: `${this.props.height}`,
                }}
                alt="funny_image"
              />
            ) : (
              <img src={this.props.src} alt="funny_image" />
            )
          ) : null}
          {this.props.description && (
            <div
              className={'description ' + (this.props.src ? '' : 'no-image')}
            >
              {this.props.description.split('_nl_').map((line, index) => {
                return (
                  <p key={index} style={{ margin: '0px' }}>
                    {line}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      );
    }
  };

  getLayoutStyle = layout => {
    switch (layout) {
      case 'Horizontal':
        return 'horizontal-image';

      case 'Vertical':
        return 'vertical-image';

      default:
        return 'image-container';
    }
  };

  render() {
    return <React.Fragment>{this.getLayout()}</React.Fragment>;
  }
}

export default Post;

import React from 'react';
import './post.css';

class Post extends React.Component {
  getLayout = () => {
    let widthOfScreen =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (widthOfScreen >= 710) {
      if (this.props.alignment) {
        return (
          <div
            className={
              'post-container ' + this.getLayoutStyle(this.props.layout)
            }
          >
            {this.props.description && (
              <div
                className={'description ' + (this.props.src ? '' : 'no-image')}
              >
                {this.props.description.split('_nl_').map((line, index) => {
                  if (line === '') {
                    return (
                      <p key={index} style={{ margin: '10px' }}>
                        {line}
                      </p>
                    );
                  } else {
                    return (
                      <p key={index} style={{ margin: '0px' }}>
                        {line}
                      </p>
                    );
                  }
                })}
              </div>
            )}
            {!this.props.hideImage && this.props.layout ? (
              this.props.layout === 'Vertical' ? (
                <img
                  src={this.props.src}
                  style={{
                    width: `${this.props.width}`,
                    height: this.props.height,
                  }}
                  alt={`funny_image_${this.props.id}`}
                />
              ) : (
                <img
                  src={this.props.src}
                  alt={`funny_image_${this.props.id}`}
                />
              )
            ) : null}
          </div>
        );
      } else {
        return (
          <div
            className={
              'post-container ' + this.getLayoutStyle(this.props.layout)
            }
          >
            {!this.props.hideImage && this.props.layout ? (
              this.props.layout === 'Vertical' ? (
                <img
                  src={this.props.src}
                  style={{
                    width: `${this.props.width}`,
                    height: this.props.height,
                  }}
                  alt={`funny_image_${this.props.id}`}
                />
              ) : (
                <img
                  src={this.props.src}
                  alt={`funny_image_${this.props.id}`}
                />
              )
            ) : null}
            {this.props.description && (
              <div
                className={'description ' + (this.props.src ? '' : 'no-image')}
              >
                {this.props.description.split('_nl_').map((line, index) => {
                  if (line === '') {
                    return (
                      <p key={index} style={{ margin: '10px' }}>
                        {line}
                      </p>
                    );
                  } else {
                    return (
                      <p key={index} style={{ margin: '0px' }}>
                        {line}
                      </p>
                    );
                  }
                })}
              </div>
            )}
          </div>
        );
      }
    } else {
      return (
        <div
          className={'post-container ' + this.getLayoutStyle(this.props.layout)}
        >
          {!this.props.hideImage && this.props.layout ? (
            this.props.layout === 'Vertical' ? (
              <img src={this.props.src} alt={`funny_image_${this.props.id}`} />
            ) : (
              <img src={this.props.src} alt={`funny_image_${this.props.id}`} />
            )
          ) : null}
          {this.props.description && (
            <div
              className={'description ' + (this.props.src ? '' : 'no-image')}
            >
              {this.props.description.split('_nl_').map((line, index) => {
                if (line === '') {
                  return (
                    <p key={index} style={{ margin: '10px' }}>
                      {line}
                    </p>
                  );
                } else {
                  return (
                    <p key={index} style={{ margin: '0px' }}>
                      {line}
                    </p>
                  );
                }
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

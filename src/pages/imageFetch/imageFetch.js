import React from 'react';
import SubHeader from '../../components/subHeader/subHeader';
import Post from '../../components/post/post';
import './imageFetch.css';
var x = require('./imageData');
var albumHash;
class imageFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.fetchImage = this.fetchImage.bind(this);
  }

  fetchImage() {
    fetch('https://api.imgur.com/3/album/lztmpo2/images', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer bcd027e8a7fb7aae65bd03bae87988b66ae00813',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(response => {
        console.log(response);
        this.setState({
          images: response.data,
        });
      });
  }

  compare(a, b) {
    var x = parseInt(a.title.split('_')[0]);
    var y = parseInt(b.title.split('_')[0]);
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  }

  componentDidMount() {
    this.fetchImage();
  }
  render() {
    let isPrevImageVertical = false;
    this.state.images.sort(this.compare);
    console.log(this.state.images);
    return (
      <div className="semester-container">
        <SubHeader title="Image fetch" />
        <div className="post-grid">
          {this.state.images.map(image => {
            var layout;
            if (image.title.split('_')[1] === 'V') {
              layout = 'Vertical';
            } else {
              layout = 'Horizontal';
            }
            if (layout === 'Vertical') {
              isPrevImageVertical = !isPrevImageVertical;
            } else {
              isPrevImageVertical = false;
            }
            return (
              <Post
                layout={layout}
                description={image.description}
                src={image.link}
                alignment={isPrevImageVertical}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default imageFetch;

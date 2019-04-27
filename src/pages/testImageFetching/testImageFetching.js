import React from "react";
import SubHeader from "../../components/subHeader/subHeader";
import Post from "../../components/post/post";
import "./imageFetch.css";
var x = require('./imageData');
var albumHash;
class imageFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images : []
    }
    this.fetchImage = this.fetchImage.bind(this);
    this.createAlbum = this.createAlbum.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
  }

  fetchImage() {
    fetch('https://api.imgur.com/3/album/7Stvgch/images', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer fb3e405dddad179e500323669d20a8f00826f0ba'
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        this.setState({
          images: response.data
        });
      })
  }

  componentDidMount() {
    //this.createAlbum();
    //this.uploadImage();
    this.fetchImage();
  }
  render() {
    return (
    <div className="semester-container">
    <SubHeader title="Image fetch" />
    <div className="post-grid">
      <div className="two-verticals">
      {
        this.state.images.map((image) => {
          return <Post
          layout={image.title}
          description={image.description}
          src = {image.link}
          />
        })
      }
      </div>
    </div>
  </div>
   )
 }


}

export default imageFetch;

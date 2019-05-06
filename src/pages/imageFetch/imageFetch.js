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


  createAlbum() {
    var url = 'https://api.imgur.com/3/album',
        data = {
        title: 'strangerBeingsBetaTesting',
        description : 'This is sample image folder for testing.'
    };
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Authorization': 'Bearer fb3e405dddad179e500323669d20a8f00826f0ba'
        }
      }).then(res => res.json())
      .then(response => {
        console.log('Success:', JSON.stringify(response));
        albumHash = response.data.id;
      })
      .catch(error => console.error('Error:', error));
  }

  uploadImage() {
    var url = 'https://api.imgur.com/3/upload',
        imageData = x.data,
        formdata = new FormData();
        formdata.append('image',imageData);
        formdata.append('album','e0igi96');
        formdata.append('description','This is a sample image file for testing')
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: formdata, // data can be `string` or {object}!
        headers:{
            'Authorization': 'Bearer fb3e405dddad179e500323669d20a8f00826f0ba'
        }
      }).then(res => res.json())
      .then(response => {
        console.log('Success:', JSON.stringify(response));
      })
      .catch(error => console.error('Error:', error));
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
    let isPrevImageVertical = false;
    return (
    <div className="semester-container">
    <SubHeader title="Image fetch" />
    <div className="post-grid">
      {
        this.state.images.map((image) => {
          if (image.title==='Vertical')
          {                                                                                                                                                                                             
            isPrevImageVertical = !isPrevImageVertical;
          }
          else
          {
            isPrevImageVertical = false;
          }
          return <Post
          layout={image.title}  
          description={image.description}
          src = {image.link}
          alignment={isPrevImageVertical}
          />
        })
      }
    </div>
  </div>
   )
 }


}

export default imageFetch;

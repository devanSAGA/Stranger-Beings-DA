import React from 'react';
import Loader from 'react-loader-spinner';
import SubHeader from '../../components/subHeader/subHeader';
import Post from '../../components/post/post';
import PageNavigation from '../../components/pageNavigation/pageNavigation';
import '../semester.css';

class RandomPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.fetchImage('https://api.imgur.com/3/album/7Stvgch/images');
  }

  render() {
    let isPrevImageVertical = false;
    return (
      <div className="semester-container">
        <SubHeader title="RANDOM" />
        {this.state.images.length > 1 ? (
          <div className="post-grid">
            {this.state.images.map(image => {
              if (image.title === 'Vertical') {
                isPrevImageVertical = !isPrevImageVertical;
              } else {
                isPrevImageVertical = false;
              }
              return (
                <Post
                  layout={image.title}
                  description={image.description}
                  src={image.link}
                  alignment={isPrevImageVertical}
                />
              );
            })}
          </div>
        ) : (
          <div className="spinner-container">
            <Loader type="Oval" color="#113f67" height={60} width={60} />
          </div>
        )}
        <PageNavigation prevPageText="Semester 8" prevPageLink="semester8" />
      </div>
    );
  }
}

export default RandomPage;

import React from 'react';
import Loader from 'react-loader-spinner';
import SubHeader from '../../components/subHeader/subHeader';
import Post from '../../components/post/post';
import PageNavigation from '../../components/pageNavigation/pageNavigation';
import { getLayout, compareFunction } from '../../utils/utilityFunctions';
import '../semester.css';

class TripPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    fetch('https://api.imgur.com/3/album/0ZzJsbI/images', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer fb3e405dddad179e500323669d20a8f00826f0ba',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(response => {
        this.setState({
          images: response.data,
        });
      });
  }

  render() {
    let isPrevImageVertical = false;
    this.state.images.sort(compareFunction);
    return (
      <div className="semester-container">
        <SubHeader title="Imagica/Matheran Trip" />
        {this.state.images.length > 1 ? (
          <React.Fragment>
            <div className="post-grid">
              {this.state.images.map(image => {
                let layout = getLayout(image.title);
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
                    hideImage={!layout}
                  />
                );
              })}
            </div>
          </React.Fragment>
        ) : (
          <div className="spinner-container">
            <Loader type="Oval" color="#113f67" height={60} width={60} />
          </div>
        )}
        <PageNavigation
          nextPageText="Semester 8"
          prevPageText="Semester 7"
          nextPageLink="semester8"
          prevPageLink="semester7"
        />
      </div>
    );
  }
}

export default TripPage;

import React from 'react';
import Loader from 'react-loader-spinner';
import SubHeader from '../../components/subHeader/subHeader';
import Post from '../../components/post/post';
import PageNavigation from '../../components/pageNavigation/pageNavigation';
import { getLayout, compareFunction } from '../../utils/utilityFunctions';
import '../semester.css';
var authorize = require('../../utils/authorize');

class SemesterSeven extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    authorize.initializeToken();
    fetch('https://api.imgur.com/3/album/i4Lcj54/images', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer bcd027e8a7fb7aae65bd03bae87988b66ae00813',
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
        <SubHeader title="Semester 7" />
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
                    height={image.height}
                    width={image.width}
                  />
                );
              })}
            </div>
            <div className="video-container">
              <h3>Dove experiment at the Zoo</h3>
              <div
                className="video"
                dangerouslySetInnerHTML={{
                  __html:
                    '<iframe width="560" height="315" src="https://www.youtube.com/embed/LEQa3cvaEK0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
                }}
              />
            </div>
          </React.Fragment>
        ) : (
          <div className="spinner-container">
            <Loader type="Oval" color="#113f67" height={60} width={60} />
          </div>
        )}
        <PageNavigation
          nextPageText="Matheran Trip"
          prevPageText="Semester 6"
          nextPageLink="trip"
          prevPageLink="semester6"
        />
      </div>
    );
  }
}

export default SemesterSeven;

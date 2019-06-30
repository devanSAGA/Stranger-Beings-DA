import React from 'react';
import Loader from 'react-loader-spinner';
import SubHeader from '../../components/subHeader/subHeader';
import Post from '../../components/post/post';
import PageNavigation from '../../components/pageNavigation/pageNavigation';
import { getLayout, compareFunction } from '../../utils/utilityFunctions';
import '../semester.css';

class semesterOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    fetch('https://api.imgur.com/3/album/GTLOwxm/images', {
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
        <SubHeader title="Semester One" />
        {this.state.images.length > 1 ? (
          <React.Fragment>
            <div className="post-grid">
              {this.state.images.map((image, index) => {
                let layout = getLayout(image.title);
                if (layout === 'Vertical') {
                  isPrevImageVertical = !isPrevImageVertical;
                } else {
                  isPrevImageVertical = false;
                }
                return (
                  <Post
                    key={index}
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
          </React.Fragment>
        ) : (
          <div className="spinner-container">
            <Loader type="Oval" color="#113f67" height={60} width={60} />
          </div>
        )}
        <PageNavigation
          prevPageText={null}
          nextPageText="Semester 2"
          prevPageLink={null}
          nextPageLink="semester2"
        />
      </div>
    );
  }
}

export default semesterOne;

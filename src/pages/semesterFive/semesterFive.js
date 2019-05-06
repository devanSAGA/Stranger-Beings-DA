import React from "react";
import Loader from 'react-loader-spinner';
import SubHeader from "../../components/subHeader/subHeader";
import Post from "../../components/post/post";
import PageNavigation from '../../components/pageNavigation/pageNavigation';
import { fetchImage } from '../../utils/fetchImage';
import "../semester.css";

class SemesterFive extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      images : []
    }
    this.fetchImage = this.fetchImage.bind(this);
  }

  componentDidMount(){
    this.fetchImage('https://api.imgur.com/3/album/7Stvgch/images');
  }
  
  render(){
    let isPrevImageVertical = false;
    return (
        <div className="semester-container">
        <SubHeader title="Semester 5" />
        {
          this.state.images.length > 1 ? (
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
          ) : (
            <div className="spinner-container">
              <Loader type="Oval" color="#113f67" height={60} width={60} />      
            </div>
          ) 
        }
        <PageNavigation nextPageText="Semester 6" prevPageText="Semester 4" nextPageLink="semester6" prevPageink="semester4"/>
      </div>
    );
  }
};

export default SemesterFive;
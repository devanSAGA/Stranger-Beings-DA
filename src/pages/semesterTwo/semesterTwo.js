import React from "react";
import Loader from 'react-loader-spinner';
import SubHeader from "../../components/subHeader/subHeader";
import Post from "../../components/post/post";
import PageNavigation from '../../components/pageNavigation/pageNavigation';
import { fetchImage } from '../../utils/fetchImage';
import "../semester.css";

class SemesterTwo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      images : []
    }
  }

  componentDidMount(){
    fetchImage('https://api.imgur.com/3/album/7Stvgch/images');
  }
  
  render(){
    let isPrevImageVertical = false;
    return (
        <div className="semester-container">
        <SubHeader title="Semester 2" />
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
        <PageNavigation nextPageText="Semester 3" prevPageText="Semester 1" nextPageLink="semester3" prevPageLink="semester1"/>
      </div>
    );
  }
};

export default SemesterTwo;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import Footer from './Footer';
import Header from './Header';
import ProfileNavigator from './ProfileNavigator';

class MyVideos extends Component {
  constructor(props) {
    super(props);
   }

  componentWillMount() {
    this.props.fetchMessage('user');
  }

  // renderInformation() {
  // if (this.props.message) {
  //    this.props.message.video.map(video => {
  //     console.log(video.name);
  //     return (<p key={video.name}>{video.name}</p>)
  //     }
  //   }


//   return (
//     <div className="video-description">
//       <h4>SM i Rugby</h4>
//       <p>
//       {test}
//       </p>
//     </div>
// )};

  // renderInformation(array) {
  //   // const info = this.props.message;
  //   // console.log(info);
  // this.props.message.video.map(video => (
  //   console.log(video);
  // ));
  //   if (info) {
  //     return (
  //       <div className="video-description">
  //         <h4>SM i Rugby</h4>
  //         <p>
  //           {/* {
  //             this.props.message.map(function(video, i){
  //               console.log('test');
  //               return <li key={i}>Test</li>
  //             })
  //         // this.props.message.video
  //         } */}
  //         </p>
  //       </div>
  //   )};
  // }

  render(){
    return(
      <div>
      <Header />
      <ProfileNavigator />
      <div className="container profile">
        <div className="col-md-12">
          <h2>Mina videos</h2>
        </div>
        <div className="col-md-4">
          <div className="video-block squash-default">
            <img src={'src/assets/img/play-button-transparent-2x.png'} className="play"/>
          </div>
          {/* {this.renderInformation()} */}
          {/* {renderInformation(props.data)} */}
          <div className="video-description">
            <h4>Squash, Lerumstk Bana 4</h4>
            <p>
              Sport: Squash<br />
              Klubb: Lerumstk<br />
              Inspelat: 2017-09-01 13:16<br />
              Bana: 3
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="video-block tennis-default">
            <img src={'src/assets/img/play-button-transparent-2x.png'} className="play"/>
          </div>
          <div className="video-description">
            <h4>Tennis, Lerumstk Bana 3</h4>
            <p>
              Sport: Tennis<br />
              Klubb: Lerumstk<br />
              Inspelat: 2017-11-01 13:16<br />
              Bana: 3
            </p>
          </div>
        </div>
        <div className="col-md-4">
          {/* <div className="video-block"></div> */}
          <div className="video-description">
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    message: state.auth.message
  };
}



// function mapStateToProps(state) {
//   return{
//     payload: state.map((item) => ({
//       video: {
//         name: item.video.name
//       }
//     }));
//   }
// }


export default connect(mapStateToProps, actions)(MyVideos);

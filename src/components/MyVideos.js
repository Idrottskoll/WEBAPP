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
          <div className="video-block"></div>
          {/* {this.renderInformation()} */}

          {/* {renderInformation(props.data)} */}
        </div>
        <div className="col-md-4">
          <div className="video-block"></div>
          <div className="video-description">
            <h4>SM i Rugby</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.<br /><br />
              Datum: 20170929<br />
              Plats: LandalaSquash<br />
              Speltid:1610-1615<br />
              Bana: 01<br />
              Dagar kvar på hemsidan: +31 dagar
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="video-block"></div>
          <div className="video-description">
            <h4>SM i Rugby</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.<br /><br />
              Datum: 20170929<br />
              Plats: LandalaSquash<br />
              Speltid:1610-1615<br />
              Bana: 01<br />
              Dagar kvar på hemsidan: +31 dagar
            </p>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';


class Feature extends Component {
  componentWillMount() {
    //input what to fetch
    this.props.fetchMessage('user');
  }

  //map all videos
  renderVideos() {
    console.log(this.props.message);
    // return _.map(this.props.message.video, video => {
    //   console.log(video);
      
    //     return (
    //       <p key={video}>{video}</p>
    //     );
    // });
}
  renderMessage() {
    if (this.props.message) {
      return (
        <div className="">
          <p>NAME: {this.props.message.name}</p>
          <p>EMAIL: {this.props.message.email}</p>
          Videos: {this.renderVideos()}
      </div>
    )};
    
  }
  
  render() {
    return (
      <div className="">
        {this.renderMessage()}
      </div>
    );
  }
}
function mapStateToProps(state){
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
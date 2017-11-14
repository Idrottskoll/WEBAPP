import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import ProfileNavigator from './ProfileNavigator';

class VideoFeed extends Component {
  render(){
    return(
      <div>
      <div className="container profile">
        <div className="col-md-12">
          <h2>Mina sidor</h2>
        </div>
        <div className="col-md-4">
          <div className="video-block squash-default">
            <img src={'src/assets/img/play-button-transparent-2x.png'} className="play"/>
          </div>
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
          {/* <div className="video-block"></div>
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
          </div> */}
        </div>
      </div>
      </div>
    );
  }
}

export default VideoFeed;

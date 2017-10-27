import React, { Component } from 'react';
import Slider from 'react-slick';

export default class CaseSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="col-md-2"><div className="case"><h4>Junior sm 2016 i squash</h4></div></div>
          <div className="col-md-2"><div className="case"><h4>Junior sm 2016 i squash</h4></div></div>
          <div className="col-md-2"><div className="case"><h4>Junior sm 2016 i squash</h4></div></div>
          <div className="col-md-2"><div className="case"><h4>Junior sm 2016 i squash</h4></div></div>
          <div className="col-md-2"><div className="case"><h4>Junior sm 2016 i squash</h4></div></div>
          <div className="col-md-2"><div className="case"><h4>Junior sm 2016 i squash</h4></div></div>
        </Slider>
      </div>
    );
  }
}

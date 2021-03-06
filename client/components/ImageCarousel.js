import React from 'react';
import Slider from 'react-slick';

var sampleImages = [
  'https://pbs.twimg.com/profile_images/856549987697733632/4s096MPz.jpg',
  'http://www.packers.com/assets/images/imported/GB/photos/article_images/2015/12-december/151222-packers-pro-bowl-950.jpg',
  'http://www.packers.com/assets/images/imported/GB/photos/article_images/2016/04-april/160414-schedule-release-PR-950.jpg',
  'http://www.packers.com/assets/images/imported/GB/photos/article_images/common/150120-helmets-950.jpg',
  'http://www.packers.com/assets/images/imported/GB/photos/article_images/2017/01-january/170118-young-players-feature-950.jpg',
]

export default class ImageCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      centerMode: true,
    };
    var style = {
      'marginLeft': 'auto',
      'marginRight': 'auto',
    }
    return (
      <div>
        <h2>Go Pack!</h2>
        <Slider {...settings}>
          {sampleImages.map((image) => (
            <div><img style={style} src={image}></img></div>
          ))}
        </Slider>
      </div>
    )
  }
}
import React, { useEffect } from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import * as Services from '../services';
import CodeConstant from '../config/CodeConstant';

import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import "../assets/scss/about.scss";

function About() {
  useEffect(() => {
    Services.getAllApisList().then(response => {
      if (response.status === CodeConstant.Success) {
        console.log('--response success--', response.data);
      }
    })
    .catch(err => {
      console.log('--response error--', err.message);
    })
  });

  return (
    <>
      <Header/>
      <div className="about_container">
        <div className="about_banner"><h2>About</h2></div>
        <div className="about_content_wrapper">
          <div className="about_content">
            <p>Sed nisi lacus sed viverra tellus in. Egestas tellus rutrum tell
              us pellentesque eu tincidunt tortor. Lorem sed risus ultricies tristique nulla aliquet. Sit amet aliquam id diam maecenas. Risus in hendrerit gravida rutrum quisque. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Id ornare arcu odio ut sem nulla pharetra diam. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Donec massa sapien faucibus et molestie ac feugiat sed. Facilisi cras fermentum odio eu feugiat. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Nec ultrices dui sapien eget mi proin sed libero enim. Erat imperdiet sed euismod nisi porta lorem. Et molestie ac feugiat sed lectus vestibulum mattis. Et odio pellentesque diam volutpat commodo sed egestas. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Leo vel orci porta non 
              pulvinar neque laoreet suspendisse interdum. Dignissim sodales ut eu sem integer vitae justo
            </p>
          </div>
          <div className="about_content">
            <p>Vel elit scelerisque mauris pellentesque pulvinar. Morbi tristique senectus et netus et malesuada fames ac turpis. Fermentum et sollicitudin ac orci phasellus egestas 
              tellus rutrum. Posuere urna nec tincidunt praesent. Blandit massa enim nec dui nunc mattis 
              enim ut. Sit amet nisl suscipit adipiscing bibendum. Pharetra et ultrices neque ornare.  
              Non diam phasellus vestibulum lorem sed risus. In arcu cursus euismod quis viverra nibh cras 
              pulvinar mattis. Convallis a cras semper auctor neque vitae. Dignissim sodales ut eu sem integer 
              vitae justo. Dis parturient montes nascetur ridiculus.
            </p>
            <div className="img_wrapper"></div>
          </div>
        </div>
        <div className='social_link_wrapper'>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><TwitterIcon className="social_icon"/></a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><YouTubeIcon className="social_icon"/></a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><InstagramIcon className="social_icon"/></a>
        </div>
      </div>
      <Footer/>
    </>    
  );
}

export default About;
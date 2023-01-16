import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function UserCarosuel() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='./assets/gif1.gif'
        height='400'
        alt='...'
      >
        <h5>Easy & Fast Payments</h5>
        <p>Natwest Bank</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='./assets/gif2.gif'
        height='400'
        alt='...'
      >
        <h5>Payments are One Tap Away</h5>
        <p>Natwest Bank</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='./assets/gif3.gif'
        height='400'
        alt='...'
      >
        <h5>Scan for Payments</h5>
        <p>Natwest Bank</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
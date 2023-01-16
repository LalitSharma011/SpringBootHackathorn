import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { textAlign } from '@mui/system';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Products.css'
import UserCarosuel from './Carosuel';
import Spinner from '../spinner/Spinner';


export default function MediaCard1() {
  return (
    <div className="container usermargin">
      <UserCarosuel />
      {/* <Spinner/> */}
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 ho mt-3">
          <MDBCard alignment='center' className='paper'>
            <MDBCardImage src='/assets/service1.jpg' className='user-height' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Buy Medicines</MDBCardTitle>
              <MDBCardText>
                Buy Genuine Medicines.
              </MDBCardText>
              <MDBBtn href='#' className='user-Button'>Buy Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="col-12 col-md-6 col-lg-4 ho mt-3">
          <MDBCard alignment='center' className='paper'>
            <MDBCardImage src='/assets/services2.jpg' className='user-height' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Buy Movie Tickets</MDBCardTitle>
              <MDBCardText>
                Buy Latest Movie Tickets
              </MDBCardText>
              <MDBBtn href='#' className='user-Button'>Buy Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="col-12 col-md-6 col-lg-4 ho mt-3">
          <MDBCard alignment='center' className='paper'>
            <MDBCardImage src='/assets/service3.jpg' className='user-height' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Pay Education Fees</MDBCardTitle>
              <MDBCardText>
                Pay Education Fees.
              </MDBCardText>
              <MDBBtn href='#' className='user-Button'>Pay Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="col-12 col-md-6 col-lg-4 ho mt-3">
          <MDBCard alignment='center' className='paper'>
            <MDBCardImage src='/assets/service4.jpg' className='user-height' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Mobile Recharge</MDBCardTitle>
              <MDBCardText>
                Recharge Your Mobile
              </MDBCardText>
              <MDBBtn href='#' className='user-Button'>Buy Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="col-12 col-md-6 col-lg-4 ho mt-3">
          <MDBCard alignment='center' className='paper'>
            <MDBCardImage src='/assets/service5.jpg' className='user-height' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Credit Card Bill</MDBCardTitle>
              <MDBCardText>
                Pay your Credit Card Bill
              </MDBCardText>
              <MDBBtn href='#' className='user-Button'>Pay Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="col-12 col-md-6 col-lg-4 ho mt-3">
          <MDBCard alignment='center' className='paper'>
            <MDBCardImage src='/assets/service6.jpg' className='user-height' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Car Insaurance</MDBCardTitle>
              <MDBCardText>
                Get your Car Insured
              </MDBCardText >
              <MDBBtn href='#' className='user-Button'>Buy Now</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </div>
  );
}
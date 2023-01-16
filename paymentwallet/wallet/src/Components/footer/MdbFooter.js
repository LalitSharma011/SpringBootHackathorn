import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Footer.css'
import Timer1 from '../../Timer';
import { useNavigate } from "react-router-dom";
// import SignInSide from '../LoginPage/SignInSide';

export default function MdbFooter() {

  const navigate = useNavigate();
  function logout() {
    navigate("/")
    localStorage.removeItem('jwt_token');
  }
  if (localStorage.getItem('jwt_token')) {
    setTimeout(logout, 122000);
  }


  return (
    <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1 user-social'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#2FE965' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='whatsapp' />
          </MDBBtn>
        </section>
        </MDBContainer>
        
      <div className='text-center p-3' style={{ backgroundColor: '#271745' }}>
        © 2022 Copyright: 
        <a className='text-white' href='#'> Lalit Sharma
        {localStorage.getItem('jwt_token') ?
            <Timer1/>
            :null
          }
       </a>        
        </div>
            
    </MDBFooter>
  );
}
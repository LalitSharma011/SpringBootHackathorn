import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../Components/registration/SignUp';



test('render of First name field should be correct',()=>{
    render(<SignUp/>,{wrapper: BrowserRouter});
    const userFirstNameField = screen.getByLabelText("First Name *");
    expect(userFirstNameField).toBeInTheDocument();
  })

test('render of Last Name field should be correct',()=>{
    render(<SignUp/>,{wrapper: BrowserRouter});
    const userLastNameField = screen.getByLabelText("Last Name *");
    expect(userLastNameField).toBeInTheDocument();
  })

test('render of City field should be correct',()=>{
    render(<SignUp/>,{wrapper: BrowserRouter});
    const userCityField = screen.getByLabelText("City *");
    expect(userCityField).toBeInTheDocument();
  })  

  test('render of Phone field should be correct',()=>{
    render(<SignUp/>,{wrapper: BrowserRouter});
    const userPhoneField = screen.getByLabelText("Phone *");
    expect(userPhoneField).toBeInTheDocument();
  })

test('render of Email field should be correct',()=>{
    render(<SignUp/>,{wrapper: BrowserRouter});
    const userEmailField = screen.getByLabelText("Email Address *");
    expect(userEmailField).toBeInTheDocument();
  })

test('render of SignUp field should be correct',()=>{
    render(<SignUp/>,{wrapper: BrowserRouter});
    const userSignUpField = screen.getByText("Sign Up");
    expect(userSignUpField).toBeInTheDocument();
  })  

test('render of New Registration Link field should be correct',()=>{
    render(<SignUp/>,{wrapper: BrowserRouter});
    const existingLoginField = screen.getByText("Already have an account?");
    expect(existingLoginField).toBeInTheDocument();
  })

export default SignUp

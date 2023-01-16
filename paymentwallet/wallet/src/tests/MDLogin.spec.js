import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MDLogin from '../Components/login/MDLogin';


test('render of login here heading',()=>{
    render(<MDLogin/>,{wrapper: BrowserRouter});
    const loginHeading = screen.getByText("Login Here");
    expect(loginHeading).toBeInTheDocument();
  }) 

test('render of email field should be correct',()=>{
  render(<MDLogin/>,{wrapper: BrowserRouter});
  const emailField = screen.getByText("Enter your Email");
  expect(emailField).toBeInTheDocument();
})

test('render of password field should be correct',()=>{
  render(<MDLogin/>,{wrapper: BrowserRouter});
  const passwordField = screen.getByText("Enter your Password");
  expect(passwordField).toBeInTheDocument();
})

test('render of Show Password field should be correct',()=>{
    render(<MDLogin/>,{wrapper: BrowserRouter});
    const showPasswordField = screen.getByText("Show Password");
    expect(showPasswordField).toBeInTheDocument();
  })

  test('render of New Registration Link field should be correct',()=>{
    render(<MDLogin/>,{wrapper: BrowserRouter});
    const newRegistrationField = screen.getByText("Don't have an account?");
    expect(newRegistrationField).toBeInTheDocument();
  })  

test('render of login button',()=>{
    render(<MDLogin/>,{wrapper: BrowserRouter});
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  })

export default MDLogin

import * as React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import Link from '@mui/material/Link';
import './Login.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// import IconButton from "@mui/material/IconButton";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { WidthNormal } from '@mui/icons-material';

const Alert = React.forwardRef(function Alert(props, ref) {         //added for snackbar
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MDLogin() {

  const myFunction = () => {
    var x = document.getElementById("password");
    console.log(x);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }

  }

  const handleChange = (e) => {
    e.preventDefault();
  };

  const [open, setOpen] = React.useState(false);   //added for snackbar
  const handleClick = () => {}
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: values => {
      console.log("submit");
      fetch("http://localhost:8765/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);         
          if (data.status === 200) {
            localStorage.setItem("jwt_token", data.jwt_token)  //use local storage to remove token on closure of browser
            localStorage.setItem("userName", data.email) //to get data of user in the state, we can now print user details when they log in
            
            navigate("/products") 
            }   
          })
       .catch((error)=>{
        setOpen(true);
    });
      },
    validationSchema: yup.object().shape({
      email: yup.string()
        .email("Invalid email address")
        .required("Email cannot be left blank"),
      password: yup.string()
        .required("Password cannot be left blank"),

    })
  })

  return (
    <div className="container user-margin">
      <div className="row">
        <div className="col-12 col-md-6">
          <MDBCard>
            <MDBCardImage src='./assets/nwpay.png' className='user-image' alt='...' position='top' />
            <MDBCardBody>
              <MDBCardText>
                Looking to reduce your spending and save more? Our money management tools and guides could help you get started.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>


        <div className="col-12 col-md-6 paper">
          <h1 className='user-login-text'>Login Here</h1>
          <form onSubmit={formik.handleSubmit}>
            <MDBInput onChange={formik.handleChange} onBlur={formik.blur}
              value={formik.values.email} label='Enter your Email' id='email' type='text' onCopy={handleChange}
              onPaste={handleChange} autoFocus />
            {formik.errors.email && formik.touched.email ? <span className='text-danger'>{formik.errors.email}</span> : null}
            <br />
            <br />
            <MDBInput onChange={formik.handleChange} onBlur={formik.handleBlur}
              value={formik.values.password} label='Enter your Password' id='password' type='password' onCopy={handleChange} onPaste={handleChange} />
            {formik.errors.password && formik.touched.password ? <span className='text-danger'>{formik.errors.password}</span> : null}
            <br />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' className='usercheckbox' label='Show Password' onClick={myFunction} onCopy={handleChange}
              onPaste={handleChange} />
            {/* <Link href="/forgetpassword" variant="body2">
              Forgot password?
            </Link> */}
            <br />
            <br />
            <h6>Don't have an account? <Link href="/registration" variant="body2">
              {"Click Here"}
            </Link></h6>
            
            <br />
            <MDBBtn className='user-button' type="submit" onClick={handleClick}>Login</MDBBtn>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Invalid Credentials !!
              </Alert>
            </Snackbar>
          </form>
        </div>
      </div>
    </div>

  );
}

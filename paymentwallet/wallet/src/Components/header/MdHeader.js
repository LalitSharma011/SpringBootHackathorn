// import React from 'react';
// import {
//     MDBNavbar,
//     MDBContainer,
//     MDBBreadcrumb,
//     MDBBreadcrumbItem
// } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';
// import './Header.css'
// import { useNavigate } from "react-router-dom";

// export default function MdHeader() {

//     const username = JSON.parse(localStorage.getItem('userName'));
//     const navigate = useNavigate();

//     function logout() {
        
//         localStorage.removeItem('jwt_token');
//         navigate("/registraion")
//     }

//     return (
//         <MDBNavbar expand='lg' fixed='top' className='user-color'>
//             <MDBContainer fluid>
//                 <Link className="navbar-brand img-fluid user-height" to="/"><img src="./assets/login.png" alt="" />
//                 </Link>
//                 <nav aria-label='breadcrumb'>
//                     <MDBBreadcrumb>
//                     {
//                                 localStorage.getItem('jwt_token') ?
//                                     <>
//                         <MDBBreadcrumbItem>
                            
//               <a href='/products' className='user-navcolor hov'>Services</a>
//             </MDBBreadcrumbItem>
//             <MDBBreadcrumbItem>
//               <a href='/contactus' className='user-navcolor hov'>Contact Us</a>
//             </MDBBreadcrumbItem>
//             <MDBBreadcrumbItem active aria-current='page'>
//               <a href='/aboutus' className='user-navcolor hov'>About Us</a>
//               </MDBBreadcrumbItem>
//               </> :
//                                     <>
//                                         <li class="nav-item">
//                                             <Link class="nav-link user-navcolor hov" to="/registration">SignUp</Link>
//                                         </li>

//                                         <li class="nav-item">
//                                             <Link class="nav-link user-navcolor hov" to="/">Login</Link>
//                                         </li>
//                                     </>
//                             }
           
//                     </MDBBreadcrumb>
//                 </nav>
//                 {localStorage.getItem('jwt_token') ?
//                             <div class="dropdown">
//                                 <button class="btn dropdown-toggle user-login-color" id="user-details-on-header" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Welcome: {username.firstname} {username.lastname}
//                                 </button>
//                                 <ul class="dropdown-menu">
//                                     <li><a class="dropdown-item user-logout" href="/" onClick={logout}>Logout</a></li>
//                                 </ul>
//                             </div>
//                             : null
//                         }
//             </MDBContainer>

//         </MDBNavbar>
//     );
// }
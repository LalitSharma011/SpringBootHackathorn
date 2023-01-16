// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
// import './Header.css'

// export default function Header() {

//     const username = JSON.parse(localStorage.getItem('userName'));
//     const navigate = useNavigate();

//     function logout() {
//         // localStorage.removeItem('jwt_token');
//         // localStorage.clear();    // it will clear all tokens
//         localStorage.removeItem('jwt_token');
//         navigate("/registraion")
//     }

//     return (
//         <div>
//             <nav class="navbar navbar-expand-lg user-navbar navbar-dark fixed-top">
//                 <div class="container-fluid usermenucolor">
//                     <Link class="navbar-brand img-fluid" to="/"><img src="./assets/login.png" alt="" />
//                     </Link>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//                         aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse user-navbar-navbtn" id="navbarSupportedContent">

//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             {
//                                 localStorage.getItem('jwt_token') ?
//                                     <>

//                                         <li class="nav-item">
//                                             <Link class="nav-link active" aria-current="page" to="/products">Services</Link>
//                                         </li>

//                                         <li class="nav-item">
//                                             <Link class="nav-link active" to="/contactus">Contact Us</Link>
//                                         </li>
//                                         <li class="nav-item">
//                                             <Link class="nav-link active" to="/aboutus">About Us</Link>
//                                         </li>
//                                     </>
//                                     :
//                                     <>
//                                         <li class="nav-item">
//                                             <Link class="nav-link active" to="/registration">SignUp</Link>
//                                         </li>

//                                         <li class="nav-item">
//                                             <Link class="nav-link active" to="/">Login</Link>
//                                         </li>

//                                     </>
//                             }
//                         </ul>
//                         {localStorage.getItem('jwt_token') ?
//                             <div class="dropdown">
//                                 <button class="btn dropdown-toggle" id="user-details-on-header" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Welcome: {username.firstname} {username.lastname}
//                                 </button>
//                                 <ul class="dropdown-menu">
//                                     <li><a class="dropdown-item user-logout" href="/" onClick={logout}>Logout</a></li>
//                                 </ul>
//                             </div>
//                             : null
//                         }
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

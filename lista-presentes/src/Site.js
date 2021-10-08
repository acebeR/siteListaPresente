import React from 'react'
import {Link} from 'react-router-dom'
import {Route, Redirect} from 'react-router-dom'
import Cadastro from './cadastro/Cadastro'

const Site = props=> {
  return (
      
        <div>
            {/* ======= Mobile nav toggle button ======= */}
            {/* <button type='button' className='mobile-nav-toggle d-xl-none'><i className='bi bi-list mobile-nav-toggle'></i></button> */}
            <i className='bi bi-list mobile-nav-toggle d-xl-none'></i>
            {/* ======= Header ======= */}
            <header id='header' className='d-flex flex-column justify-content-center'>

            <nav id='navbar' className='navbar nav-menu'>
                <ul>
                    <li><a href='#hero' className='nav-link scrollto active'><i className='bx bx-home'></i> <span>Home</span></a></li>
                    <li><a href='#login' className='nav-link scrollto'><i className='bx bx-user'></i> <span>Login</span></a></li>
                    <li><a href='#casal' className='nav-link scrollto'><i className='bx bx-search'></i> <span>Casal</span></a></li>
                    <li><a href='#portfolio' className='nav-link scrollto'><i className='bx bx-book-content'></i> <span>Portfolio</span></a></li>
                    <li><a href='#services' className='nav-link scrollto'><i className='bx bx-server'></i> <span>Services</span></a></li>
                    <li><a href='#contact' className='nav-link scrollto'><i className='bx bx-envelope'></i> <span>Contact</span></a></li>
                </ul>
            </nav>{/* .nav-menu */}

            </header>{/* End Header */}

            {/* ======= Hero Section ======= */}
            <section id='hero' className='d-flex flex-column justify-content-center'>
                <div className='container'>
                    <h1 Style='color: white;'>Monte sua Lista de Casamento</h1>
                    <p Style='color: white;'>Cadastre-se e monte uma lista!<span className='typed' data-typed-items='Designer, Developer, Freelancer, Photographer'></span></p>
                </div>
            </section>{/* End Hero */}
 
            <div id='preloader'></div>
            <a href='#' className='back-to-top d-flex align-items-center justify-content-center'><i className='bi bi-arrow-up-short'></i></a>

            {/* Vendor JS Files */}
            <script src='assets/vendor/aos/aos.js'></script>
            <script src='assets/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>
            <script src='assets/vendor/glightbox/js/glightbox.min.js'></script>
            <script src='assets/vendor/isotope-layout/isotope.pkgd.min.js'></script>
            <script src='assets/vendor/php-email-form/validate.js'></script>
            <script src='assets/vendor/purecounter/purecounter.js'></script>
            <script src='assets/vendor/swiper/swiper-bundle.min.js'></script>
            <script src='assets/vendor/typed.js/typed.min.js'></script>
            <script src='assets/vendor/waypoints/noframework.waypoints.js'></script>

            {/* Template Main JS File */}
            <script src='assets/js/main.js'></script>
        </div>
  );
}

export default Site;
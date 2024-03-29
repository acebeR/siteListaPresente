import React, { Component } from 'react';

class Footer extends Component {

    constructor(props){
        super(props)

        this.state = {
            footer:{

            }
        }

        //construtor
        // config.syncState('cadastro',{

        //     context: this,
        //     state: 'portfolio',
        //     asArray: false
        // })
            
    }

    render (){
      return (
        <div>
            {/* ======= Footer ======= */}
            <footer id='footer'>
                <div className='container'>
                    <h3>Site Feito por: Rebeca Divina</h3>
                    <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                    <div className='social-links'>
                    <a href='#' className='twitter'><i className='bx bxl-twitter'></i></a>
                    <a href='#' className='facebook'><i className='bx bxl-facebook'></i></a>
                    <a href='#' className='instagram'><i className='bx bxl-instagram'></i></a>
                    <a href='#' className='google-plus'><i className='bx bxl-skype'></i></a>
                    <a href='#' className='linkedin'><i className='bx bxl-linkedin'></i></a>
                    </div>
                    <div className='copyright'>
                    &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
                    </div>
                    <div className='credits'>
                    {/* All the links in the footer should remain intact. */}
                    {/* You can delete the links only if you purchased the pro version. */}
                    {/* Licensing information: [license-url] */}
                    {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ */}
                    Designed by <a href='https://bootstrapmade.com/'>BootstrapMade</a>
                    </div>
                </div>
            </footer>{/* End Footer */}
        </div>
        )
    }
}

export default Footer;
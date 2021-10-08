import React, { Component } from 'react';

class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            login:{

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
            <section id='login' className='login'>
                <div className='container'>

                    <div className='section-title'>
                        <h2>Login</h2>
                        <p>Cadastre-se para fazer para poder construir sua lista de presentes!</p>
                    </div>
                    <div class="row d-flex flex-row justify-content-center mt-5">
                        <div class="col-lg-5">
                            <div class="card">
                                <div class="card-body">
                                    <form method="POST" action="">
                                    <div class="form-group">
                                        <input type="text" name="username" class="form-control" placeholder="username"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" name="password" class="form-control" placeholder="password"/>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn btn-primary btn-lg btn-block">
                                            login
                                        </button>
                                    </div>
                                    <a href=""> Perdi minha Senha</a><br/>
                                    {/* <Link to="/cadastro">Não tenho cadastro</Link> */}
                                    {/* <button type="button" className="btn btn-primary" onClick={() =>this.showCadastro(this.varCadastro)}>Não tenho cadastro</button> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>{/* End About Section */}
        </div>
        )
    }
}

export default Login;
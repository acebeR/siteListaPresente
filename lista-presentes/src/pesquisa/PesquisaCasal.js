import React, { Component } from 'react';

class PesquisaCasal extends Component {

    constructor(props){
        super(props)

        this.state = {
            pesquisaCasal:{

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
            {/* ======= Resume Section ======= */}
            <section id='casal' className='casal'>
            <div className='container'>

            <div className='section-title'>
                <h2>Casal de Noivos</h2>
                <p>Pesquise pelo nome do noivo e da noiva para que, você convidado, presenteie os noivos!</p>
                </div>
                    <div class="row d-flex flex-row justify-content-center mt-5">
                        <div class="col-lg-5">
                            <div class="card">
                                <div class="card-body">
                                    <form method="POST" action="">
                                    <div class="form-group">
                                        <input type="text" name="noiva" class="form-control" placeholder="Noiva"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" name="noivo" class="form-control" placeholder="Noivo"/>
                                    </div>
                                    <div class="form-group">
                                        <button class="btn btn-primary btn-lg btn-block">
                                            Pesquisar
                                        </button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End Resume Section */}
        </div>
        )
    }
}

export default PesquisaCasal;
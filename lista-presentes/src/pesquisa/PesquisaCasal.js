import React, { Component } from 'react';
import {PesquisaService} from './PesquisaService.js';

class PesquisaCasal extends Component {

    constructor(props){
        super(props)
        this.state = {noiva: '',noivo:''};
        this.casais = [];
        this.PesquisaService = new PesquisaService();
        // this.pesquisarCasais = this.pesquisarCasais.bind(this);
    }

    pesquisarCasais(noiva,noivo){
        console.log("estoy aqui");
        console.log(noiva,noivo);

        this.PesquisaService.getCasais().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.casais.push(doc.data());
            });
            console.log("-----------DENTRO-------------");
            console.log(this.casais);
        })
        .catch((error) => {
            console.log("Error getCasais: ", error);
        });

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
                    <div className="row d-flex flex-row justify-content-center mt-5">
                        <div className="col-lg-5">
                            <div className="card">
                                <div className="card-body">
                                   {/* <form onSubmit={this.pesquisarCasais}> */}
                                        <div className="form-group">
                                        <input type="text" name="noiva" className="form-control" value={this.state.noiva} onChange={ e => this.setState({noiva: e.target.value}) } placeholder="Noiva"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="noivo" className="form-control" value={this.state.noivo} onChange={ e => this.setState({noivo: e.target.value}) } placeholder="Noivo"/>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-primary btn-lg btn-block" onClick={() => this.pesquisarCasais(this.state.noiva,this.state.noivo)}>
                                                Pesquisar
                                            </button>
                                        </div>
                                    {/* </form> */}
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
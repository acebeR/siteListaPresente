import React, { Component } from 'react';
import {PesquisaService} from './PesquisaService.js';
import {Route, Redirect} from 'react-router-dom'
import ListaCasal from './ListaCasal';

class PesquisaCasal extends Component {

    constructor(props){
        super(props)
        this.state = {noiva: '',noivo:'',casalPesquisa : {id:'',Mulher:'',Homem:''},showLista:false};
        this.casais = [];
        this.PesquisaService = new PesquisaService();
    }

    pesquisarCasais(noiva,noivo){
        this.PesquisaService.getCasais().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var casal = doc.data();
                if(casal.Mulher === noiva && casal.Homem === noivo){
                    this.setState({casalPesquisa:{id:casal.id,Mulher:casal.Mulher,Homem:casal.Homem}});
                    this.setState({showLista:true});
                }
            });
        })
        .catch((error) => {
            console.log("Error getCasais: ", error);
        });

    }

    teste(){
        console.log(this.casalPesquisa);
        console.log(this.state.casalPesquisa);
    }

    // pesquisarCasais(noiva,noivo){
    //     console.log("estoy aqui");
    //     console.log(noiva,noivo);

    //     this.PesquisaService.getCasais().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             this.casais.push(doc.data());
    //         });
    //         console.log("-----------DENTRO-------------");
    //         console.log(this.casais);
    //     })
    //     .catch((error) => {
    //         console.log("Error getCasais: ", error);
    //     });

    // }


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
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {this.state.showLista ? <ListaCasal/> : null} */}
                    {this.state.showLista ? <Route pathname={`${this.state.casalPesquisa}/listaCasal`} component = {ListaCasal}/> : null}
                    
                </div>
                    
                </section>{/* End Resume Section */}
            </div>
        )
    }
}

export default PesquisaCasal;
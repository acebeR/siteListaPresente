import React, { Component } from 'react';

class Cadastro extends Component {

    constructor(props){
        super(props)

        this.state = {
            portfolio:{

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
            <div className='container'>
                <form className="form-horizontal">
                    <fieldset>
                        <div className="row d-flex flex-row justify-content-center mt-5">
                            <div className='section-title'>
                                <h2>Cadastro do Casal</h2>
                            </div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <div className="col-md-11 control-label">
                                            <p className="help-block"><h11>*</h11> Campo Obrigatório </p>
                                    </div>
                                </div>

                                {/* Esposo*/}
                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="Nome">Nome Esposo<h11>*</h11></label>  
                                    <div className="col-md-8">
                                        <input id="Nome" name="Nome" placeholder="" className="form-control input-md" required="" type="text"/>
                                    </div>
                                </div>

                                {/* Esposa*/}
                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="Nome">Nome Esposa<h11>*</h11></label>  
                                    <div className="col-md-8">
                                        <input id="Nome" name="Nome" placeholder="" className="form-control input-md" required="" type="text"/>
                                    </div>
                                </div>

                                {/* Text input*/}
                                <div className="form-group">
                                    <label className="col-md-3 control-label" for="Nome">CPF (apena um)<h11>*</h11></label>  
                                    <div className="col-md-2">
                                        <input id="cpf" name="cpf" placeholder="Apenas números" className="form-control input-md" required="" type="text" maxlength="11" pattern="[0-9]+$"/>
                                    </div>
                                    <label className="col-md-3 control-label" for="Nome">Data do Casamento<h11>*</h11></label>  
                                    <div className="col-md-2">
                                        <input id="dtnasc" name="dtnasc" placeholder="DD/MM/AAAA" className="form-control input-md" required="" type="text" maxlength="10" OnKeyPress="formatar('##/##/####', this)" onBlur="showhide()"/>
                                    </div>
                                </div>

                                {/* Prepended text*/}
                                <div className="form-group">
                                <label className="col-md-2 control-label" for="prependedtext">Telefone <h11>*</h11></label>
                                <div className="col-md-2">
                                    <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                    <input id="prependedtext" name="prependedtext" className="form-control" placeholder="XX XXXXX-XXXX" required="" type="text" maxlength="13" pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$"
                                    OnKeyPress="formatar('## #####-####', this)"/>
                                    </div>
                                </div>
                        
                                <label className="col-md-1 control-label" for="prependedtext">Telefone</label>
                                <div className="col-md-2">
                                <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                <input id="prependedtext" name="prependedtext" className="form-control" placeholder="XX XXXXX-XXXX" type="text" maxlength="13"  pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$"
                                OnKeyPress="formatar('## #####-####', this)"/>
                                </div>
                                </div>
                                </div> 

                                {/* Prepended text*/}
                                <div className="form-group">
                                <label className="col-md-2 control-label" for="prependedtext">Email <h11>*</h11></label>
                                <div className="col-md-5">
                                    <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                    <input id="prependedtext" name="prependedtext" className="form-control" placeholder="email@email.com" required="" type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                    </div>
                                </div>
                                </div>


                                {/* Search input*/}
                                <div className="form-group">
                                <label className="col-md-2 control-label" for="CEP">CEP <h11>*</h11></label>
                                <div className="col-md-2">
                                    <input id="cep" name="cep" placeholder="Apenas números" className="form-control input-md" required="" value="" type="search" maxlength="8" pattern="[0-9]+$"/>
                                </div>
                                <div className="col-md-2">
                                    <button type="button" className="btn btn-primary" onclick="pesquisacep(cep.value)">Pesquisar</button>
                                    </div>
                                </div>

                                {/* Prepended text*/}
                                <div className="form-group">
                                <label className="col-md-2 control-label" for="prependedtext">Endereço</label>
                                <div className="col-md-4">
                                    <div className="input-group">
                                    <span className="input-group-addon">Rua</span>
                                    <input id="rua" name="rua" className="form-control" placeholder="" required="" readonly="readonly" type="text"/>
                                    </div>
                                    
                                </div>
                                <div className="col-md-2">
                                <div className="input-group">
                                <span className="input-group-addon">Nº <h11>*</h11></span>
                                <input id="numero" name="numero" className="form-control" placeholder="" required=""  type="text"/>
                                </div>
                                
                                </div>
                        
                                <div className="col-md-3">
                                    <div className="input-group">
                                    <span className="input-group-addon">Bairro</span>
                                    <input id="bairro" name="bairro" className="form-control" placeholder="" required="" readonly="readonly" type="text"/>
                                    </div>
                                    
                                </div>
                                </div>

                                <div className="form-group">
                                <label className="col-md-2 control-label" for="prependedtext"></label>
                                <div className="col-md-4">
                                    <div className="input-group">
                                    <span className="input-group-addon">Cidade</span>
                                    <input id="cidade" name="cidade" className="form-control" placeholder="" required=""  readonly="readonly" type="text"/>
                                    </div>
                                    
                                </div>
                            
                                <div className="col-md-2">
                                    <div className="input-group">
                                    <span className="input-group-addon">Estado</span>
                                    <input id="estado" name="estado" className="form-control" placeholder="" required=""  readonly="readonly" type="text"/>
                                    </div>
                                    
                                </div>
                                </div>
                            
                        </div>
                        

                        {/* Button (Double) */}
                        <div className="form-group">
                        <label className="col-md-2 control-label" for="Cadastrar"></label>
                        <div className="col-md-8">
                            <button id="Cadastrar" name="Cadastrar" className="btn btn-success" type="Submit">Cadastrar</button>
                            <button id="Cancelar" name="Cancelar" className="btn btn-danger" type="Reset">Cancelar</button>
                        </div>
                        </div>

                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Cadastro;
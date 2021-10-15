import React, { Component } from 'react';

class ListaCasal extends Component {

    constructor(props){
        super(props)
        
    }

    render (){
      return (
        <div>
           <div  className='row d-flex flex-row justify-content-center mt-5'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Noivo</th>
                        <th scope="col">Noiva</th>
                        <th scope="col">Lista</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        )
    }
}

export default ListaCasal;
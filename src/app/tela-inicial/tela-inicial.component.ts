import { TelaInicialService } from './tela-inicial.service';
import { Component, OnInit } from '@angular/core';
import { Casal } from './shared/casal';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})

export class TelaInicialComponent implements OnInit {
  noivo: string = '';
  noiva: string  = '';
  inventory = [];

  constructor(private telaInicialService: TelaInicialService,private router: Router) {
    
  }

  ngOnInit(): void {
    // this.telaInicialService.getAll().forEach( c => { 
    //   c.forEach( d => {
    //     var coisa = d;
    //   this.inventory.push(coisa);
    // })
    // });
    
  }


  public butaoPesquisar(){
    // let result = this.inventory.find( ({ homem }) => homem === this.noivo );
    // if(result != undefined){
    //   if(result.mulher === this.noiva){
    //     console.log("chamar a proxima página");
    //   }
    // }
  }

  public btnPgLogin(){
    console.log('aqui');
    this.router.navigate(['/login']);
  }
}

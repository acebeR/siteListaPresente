import { RouterTestingModule } from '@angular/router/testing';
import { TelaInicialService } from './tela-inicial.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Casal } from './shared/casal';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})

export class TelaInicialComponent implements OnInit {
  noivo: string = '';
  noiva: string  = '';
  inventory = [];
  ListaNoivosFiltro = new Array();

  constructor(private telaInicialService: TelaInicialService,private router: Router) {
    
  }

  ngOnInit(): void {

    
  }

  buscaPalavraStr = function(texto: String, palavra : string) {
    return texto.indexOf(palavra);
  }

  public butaoPesquisar(){
    this.ListaNoivosFiltro = new Array();
    this.telaInicialService.getAll().forEach( c => { 
      c.forEach( d  => {
          var obj = new Casal();
          obj = d.data as Casal;
          obj.chave = d.key as string;
          if(this.buscaPalavraStr(obj.homem , this.noivo) == 0 && this.buscaPalavraStr(obj.mulher , this.noiva) == 0){ 
            this.ListaNoivosFiltro.push(obj);
          }
        })
      this.router.navigate(['/convidadoCasal'], {queryParams: { "chave":  this.ListaNoivosFiltro[0].chave,
      "homem":  this.ListaNoivosFiltro[0].homem,
      "mulher":  this.ListaNoivosFiltro[0].mulher }
      } ); 
    });
     
  }

  public btnPgLogin(){
    this.router.navigate(['/login/']);
  }
}

import { Presente } from './../shared/presente';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PresenteDataService } from '../shared/presente-data.service';
import { PresenteService } from '../shared/presente.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-presente',
  templateUrl: './lista-presente-convidado.html',
  styleUrls: ['./lista-presente-convidado.component.css']
})
export class ListaPresenteConvidado implements OnInit {
  imagem = "";
  presentes: Observable<any>;
  listaFiltrada: Presente[] = [];
  listaCasal: any[];
  quantidade = 0;

  constructor(private presenteService: PresenteService, 
    private presenteDataService: PresenteDataService,private router: Router,
    private retaAcao: ActivatedRoute) { 
   this.presentes = new Observable<any>();
   this.listaCasal = [];
  }

  ngOnInit() {
    this.filtrarLista();
  }

  filtrarLista(){
    this.listaFiltrada = [];
    let params: any = this.retaAcao.snapshot.params;
    this.presentes = this.presenteService.getAll();
    this.presenteService.getAll().forEach( c => { 
      c.forEach( d => {
        var obj = new Presente();
        obj = d.data as Presente;
        if(obj !== undefined && obj !== null){
          if(obj.chaveCasal ===  params.id){
            obj.key = d.key || '';
            this.listaFiltrada.push(obj); 
            
          }
        }
      })
      console.log(this.listaFiltrada);
    });
    
  }

  delete(key:string){
    this.listaFiltrada = [];
    this.presenteService.delete(key);
  }

  edit(presente:  Presente, key: string){
    this.listaFiltrada = [];
    this.presenteDataService.changePresente(presente, key);
  }

  menosmais(simbulo: String, maioValor: any){
    var maior = maioValor;
    var menor = 0;
    var quantidade = this.quantidade;

    if(quantidade > menor){
      if(simbulo == '-'){
        quantidade = quantidade - 1;
      }
    }

    if(simbulo == '+' && quantidade < maior){
      quantidade = quantidade + 1;
    }
    this.quantidade = quantidade;
  }
}

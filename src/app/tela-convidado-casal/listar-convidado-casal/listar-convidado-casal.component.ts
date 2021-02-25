import { Component, Input, OnInit } from '@angular/core';
import { Params,Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { catchError, finalize } from 'rxjs/operators';
import { Casal } from '../../tela-inicial/shared/casal';


@Component({
  selector: 'app-listar-convidado-casal',
  templateUrl: './listar-convidado-casal.component.html',
  styleUrls: ['./listar-convidado-casal.component.css']
})
export class ListaConvidadoCasal implements OnInit {
  homem = [];
  mulher = [];
  chave = [];
  constructor(private storage: AngularFireStorage, private route: ActivatedRoute, private route2: Router) { 
        
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.homem = params["homem"];
        this.mulher = params["mulher"];
        this.chave = params["chave"];
    });
    
  }

  encaminhaOutraPg(){
    this.route2.navigate(['/listapresente',this.chave]);
  }

}

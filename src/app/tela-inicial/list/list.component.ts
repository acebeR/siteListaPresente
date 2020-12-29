import { Casal } from './../shared/casal';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CasalDataService } from '../shared/casal-data.service';
import { CasalService } from '../shared/casal.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  casais: Observable<any>;
  constructor(private casalService: CasalService, private casalDataService: CasalDataService) { 
   this.casais = new Observable<any>();
  }

  ngOnInit() {
    this.casais = this.casalService.getAll();
  }

  delete(key:string){
    this.casalService.delete(key);
  }

  edit(casal: typeof Casal, key: string){
    this.casalDataService.changeCasal(casal,key);
  }
}

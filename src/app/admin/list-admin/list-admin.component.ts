import { Component, OnInit } from '@angular/core';
import { Casal } from '../../tela-inicial/shared/casal';
import { Observable } from 'rxjs';
import { CasalDataService } from '../../tela-inicial/shared/casal-data.service';
import { CasalService } from '../../tela-inicial/shared/casal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {
  casais: Observable<any>;
  constructor(private casalService: CasalService, private casalDataService: CasalDataService,private router: Router) { 
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

  btnLista(chaveCasal: string){
    this.router.navigate(['/presente',chaveCasal]);
  }
}

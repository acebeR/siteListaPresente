import { Component, OnInit } from '@angular/core';
import { CasalDataService } from '../../tela-inicial/shared/casal-data.service';
import { CasalService } from '../../tela-inicial/shared/casal.service';
import { Casal } from '../../tela-inicial/shared/casal';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  casal: Casal
  key: string = ''
  constructor(private casalService: CasalService, private casalDataService: CasalDataService) {this.casal = new Casal()}

  ngOnInit(){
    
    this.casalDataService.currentCasal.subscribe(data => {
      this.casal = new Casal();
      if (data.casal && data.key) {
        this.key = data.key;
      }
    })
  }

   onSubmit(){
    if(this.key){
      this.casalService.update(this.casal,this.key);
    }else{
      this.casalService.insert(this.casal);
    }
    this.casal = new Casal();
  }

}

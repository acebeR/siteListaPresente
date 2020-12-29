import { CasalDataService } from '../shared/casal-data.service';
import { CasalService } from '../shared/casal.service';
import { Component, OnInit } from '@angular/core';
import { Casal } from '../shared/casal';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditPresenteComponent implements OnInit {
  casal: Casal
  key: string = ''
  constructor(private casalService: CasalService, private casalDataService: CasalDataService) {this.casal = new Casal()}

  ngOnInit(){
    
    this.casalDataService.currentCasal.subscribe(data => {
      this.casal = new Casal();
      if (data.casal && data.key) {
        console.log(data.casal);
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

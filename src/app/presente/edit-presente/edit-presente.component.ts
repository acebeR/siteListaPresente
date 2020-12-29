import { PresenteDataService } from '../shared/presente-data.service';
import { PresenteService } from '../shared/presente.service';
import { Component, OnInit } from '@angular/core';
import { Presente } from '../shared/presente';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";

@Component({
  selector: 'app-edit-presente',
  templateUrl: './edit-presente.component.html',
  styleUrls: ['./edit-presente.component.css']
})
export class EditPresenteComponent implements OnInit {

  presente: Presente
  key: string = ''
  chaveCasal: String;
  image: string = '';
  downloadURL: Observable<string>;
  selectedFile: File;
  fb: String = '';
  constructor(private storage: AngularFireStorage,private presenteService: PresenteService, private presenteDataService: PresenteDataService,private route: Router, 
    private retaAcao: ActivatedRoute) {
    this.presente = new Presente();
    this.chaveCasal = '';
    this.downloadURL = new Observable<string>();
    this.selectedFile = new File([],'');
    // const storageRef = firebase.storage().ref().child('C:/fakepath/18ea84a78037b25df48a6a78885956c6.jpg');
    // storageRef.getDownloadURL().then(url => this.image = url);
   
  }

  ngOnInit(){
    this.presenteDataService.currentPresente.subscribe(data => {
      this.presente = new Presente();
      if (data.presente && data.key) {
        this.key = data.key;
      }
    })
  }
  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
    }
  
  onSubmit(){
    let params: any = this.retaAcao.snapshot.params;
    this.presente.chaveCasal =  params.id;
    if(this.key){
      this.presenteService.update(this.presente,this.key);
    }else{
      this.presenteService.insert(this.presente);
    }
    this.presente = new Presente();
    window.location.reload();
  }

  
}

import { Login } from 'src/app/login/login';
import { LoginDataService } from '../login-data.service';
import { LoginService } from '../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-login',
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class CadastroPresenteComponent implements OnInit {

  login: Login
  key: string = ''
  chaveCasal: String;
  image: string = '';
  downloadURL: Observable<string>;
  selectedFile: File;
  fb: String = '';
  constructor(private storage: AngularFireStorage,private loginService: LoginService, private loginDataService: LoginDataService,private route: Router, 
    private retaAcao: ActivatedRoute) {
    this.login = new Login();
    this.chaveCasal = '';
    this.downloadURL = new Observable<string>();
    this.selectedFile = new File([],'');
  }

  ngOnInit(){
    this.loginDataService.currentLogin.subscribe(data => {
      this.login = new Login();
      if (data.login && data.key) {
        this.key = data.key;
      }
    })
  }
  onFileSelected(event: Event) {
    if(event !== null){
      var n = Date.now();
      const file = event.target!;
      const filePath = `/${n}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(`/${n}`, file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                this.fb = url;
              }
            });
          })
        )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
    }
  }
  
  onSubmit(){
    let params: any = this.retaAcao.snapshot.params;
    // this.login.chave =  params.id;
    // if(this.key){
    //   this.loginService.update(this.login,this.key);
    // }else{
      this.loginService.insert(this.login);
    // }
    this.login = new Login();
    window.location.reload();
  }

  
}

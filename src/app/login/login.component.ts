import { Login } from 'src/app/login/login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login :Login;
  podeEntrar = false;
  naoPodeEntrar = false;
  mensagem = "";
  cssMenssagem = "";
  constructor( private router: Router,private db: AngularFireDatabase) { this.login = new Login()}
  
  ngOnInit(): void {
    window.document.getElementById("email");
  }


  insert(login: Login) {
    this.db.list('login').push(login)
      .then((result: any) => {
        console.log(result.key);
      });
  }
  update(login: Login, key: string) {
    this.db.list('login').update(key, login)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    
    return this.db.list('login')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, data: c.payload.val() }))
        })
      );

  }

  verificaLogin(){
    this.getAll().forEach( c => { 
      c.forEach( d =>{
        var obj = d.data as Login;
        if(this.login.email === obj.email && this.login.senha === obj.senha){
          this.podeEntrar =  true;
          this.mensagem = "Login Sucesso!";
          this.router.navigate(['/admin']);
          this.cssMenssagem = "alert-success";
        }else{
          this.naoPodeEntrar =  true;
          this.mensagem = "Email ou Senha invalida!";
          this.cssMenssagem = "alert-warning";
        }
      })
      
    });
  }

  delete(key: string) {
    this.db.object(`login/${key}`).remove();
  }

}

import { Login } from 'src/app/login/login';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private db: AngularFireDatabase) { }


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

  getBuscaNoivo() {
    var lista = this.getAll();

  }

  delete(key: string) {
    this.db.object(`login/${key}`).remove();
  }

}

import { Casal } from './casal';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CasalService {

  constructor(private db: AngularFireDatabase) { }


  insert(casal: Casal) {
    this.db.list('casal').push(casal)
      .then((result: any) => {
        console.log(result.key);
      });
  }
  update(casal: Casal, key: string) {
    this.db.list('casal').update(key, casal)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    
    return this.db.list('casal')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, data: c.payload.val() }))
        })
      );

  }

  getBuscaNoivo() {
    var lista = this.getAll();
    console.log(lista);

  }

  delete(key: string) {
    this.db.object(`casal/${key}`).remove();
  }

}

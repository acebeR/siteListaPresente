import { Presente } from './presente';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PresenteService {

  constructor(private db: AngularFireDatabase) { }


  insert(presente: Presente) {
    this.db.list('presente').push(presente)
      .then((result: any) => {
        console.log(result.key);
      });
  }
  update(presente: Presente, key: string) {
    this.db.list('presente').update(key, presente)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    
    return this.db.list('presente')
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
    this.db.object(`presente/${key}`).remove();
  }

}

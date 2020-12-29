
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
  })
  export class TelaInicialService {
  
    constructor(private db: AngularFireDatabase) { }
  
    getAll() {
      
      let retorno =  this.db.list('casal')
        .snapshotChanges()
        .pipe(
          map(changes => {
             return  changes.map(c => ({ key: c.payload.key, data: c.payload.val() }))
          })
        );
      return retorno;
    }

  

  
  }
  
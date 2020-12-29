import { Casal } from './casal';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasalDataService {
  private casalSource = new BehaviorSubject({ casal: Casal, key: '' });
  currentCasal = this.casalSource.asObservable();

  constructor() { }

  changeCasal(casal: typeof Casal, key: string) {
    this.casalSource.next({ casal: casal, key: key });
  }
}

import { Injectable } from '@angular/core';
import { Presente } from './presente';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresenteDataService {
  private presenteSource = new BehaviorSubject({ presente: Presente, key: '' });
  currentPresente = this.presenteSource.asObservable();

  constructor() { }

  changePresente(presente:  Presente, key: string) {
    this.presenteSource.next({presente: Presente, key: key });
  }
}

import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private return = new Subject<boolean>();
  return$ = this.return.asObservable();
  constructor() { }

  next(checked: any) {
    this.return.next(checked);
  }
}

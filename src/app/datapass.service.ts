import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { empdetails } from './Employee/empdetails';

@Injectable({
  providedIn: 'root'
})
export class DatapassService {

  
  public confirmDeletion: Subject<boolean> = new Subject();
  public confirmAdd : Subject<empdetails> = new Subject();

  constructor() { }
}

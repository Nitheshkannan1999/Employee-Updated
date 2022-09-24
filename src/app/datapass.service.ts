import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { empdetails } from './Employee/empdetails';

@Injectable({
  providedIn: 'root'
})
export class DatapassService {

  
  public confirmDeletion: Subject<boolean> = new Subject();
  public confirmAdd : Subject<empdetails> = new Subject();
  public loginFlag : Subject<boolean> = new Subject();

  constructor() { }
}

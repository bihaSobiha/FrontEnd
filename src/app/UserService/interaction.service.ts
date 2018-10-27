import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }

  private loginUserDataSource = new Subject<any>();
  private isLogined = new Subject<boolean>();

  loginUserDataSource$ = this.loginUserDataSource.asObservable();
  isLogined$ =this.isLogined.asObservable();

  sendLoginedData(data:any){
    this.loginUserDataSource.next(data);
  }

  sendLoginStatus(status:boolean){
    this.isLogined.next(status);
  }
}

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  user: EventEmitter<any> = new EventEmitter();
  constructor() { }

  
}

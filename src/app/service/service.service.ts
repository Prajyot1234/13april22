import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  
  getAllUser() : User[]{
    return  [
        {name : 'John', email : 'john@gmail.com'},
        {name : 'sanaya', email : 'snaaya@gmail.com'},
        {name : 'johar', email : 'johar@gmail.com'},
        {name : 'abhi', email : 'abhi@gmail.com'},
        {name : 'burbure', email : 'burbure@gmail.com'}
    ];
  }
}

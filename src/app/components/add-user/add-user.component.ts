import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  newName: string = '';
  newEmail: string = '';

  @Output()
  addUser: EventEmitter<User> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  saveUser(){
    const newUser = {name: this.newName, email: this.newEmail}
    this.addUser.emit(newUser);
  }  

}

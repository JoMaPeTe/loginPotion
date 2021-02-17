import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  email: string;
  password: string;

  constructor(public userService: UsersService) { }

  login() {
    const user = {email: this.email, password: this.password};
    // Create observer object
// const myObserver = {
//   next: data => console.log('Observer got a next value: ' + data),
//   error: err => console.error('Observer got an error: ' + err),
//   complete: () => console.log('Observer got a complete notification'),
// };

    this.userService.login(user).subscribe(  data =>{ console.log('Observer got a next value: ' + data)})
  }

}

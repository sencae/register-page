import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../User';
import {UserService} from '../User.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  private users: User[];
  private user: User;
  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
  add(username: string, pswd: string, fName: string, lName: string): void {
    this.user.username = username;
    this.user.lastName = lName;
    this.user.firstName = fName;
    this.user.password = pswd;
    this.userService.addUser(this.user).subscribe(user => this.users.push(user));
    this.getUsers();
    this.router.navigate(['/stub']);
  }
}

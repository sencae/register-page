import {Component, Injectable, OnInit} from '@angular/core';
import {User} from '../User';
import {UserService} from '../User.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class UserPageComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.getUser();
  }
  getUser(): void {
    const id = 1;
    this.userService.getUser(id)
      .subscribe(hero => this.user = hero);
}


}

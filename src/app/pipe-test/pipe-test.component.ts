import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../user-interface';
import { Laptop } from '../laptop';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  dateToday: string;
  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.dateToday = new Date().toDateString();
    let laptop: Laptop = new Laptop();
    console.log(laptop);
    console.log(laptop['stickers']);
  }

  addUser() {
    this.userService.addUser({
      id: this.users.length + 2,
      name: 'Joseph Climber',
      email: 'joseph@climber.com'
    })
  }

}
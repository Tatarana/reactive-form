import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../user-interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dateToday: Date;
  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.dateToday = new Date();
  }

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { IUser } from '../user-interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: IUser;

  constructor( private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.user = this.userService.getUserById(+params['id']);
    });

  }

}
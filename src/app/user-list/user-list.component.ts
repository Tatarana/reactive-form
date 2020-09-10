import { Component, OnInit } from '@angular/core';
import { IUser } from '../user-interface';
import { UserService } from '../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HookLogger, ReadOnly } from '../decorators/class.decorator';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
//@HookLogger(['ngOnInit'])
export class UserListComponent implements OnInit {

  @ReadOnly("Readonly string! You Shall Not Pass!") readonly: string;
  users: IUser[];

  constructor( private userService: UserService) { }
  //constructor (private http: HttpClient) {}

  ngOnInit() {
    console.log("banana");
    //this.users = this.userService.getUsers();
    this.userService.getUsersViaREST().subscribe(
      data => {
        console.log("ngOnInit");
        this.users = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
    console.log("maçã");
    console.log(this.readonly);
    this.readonly = "Mudando o readonly";
    console.log(this.readonly);
 }

  //  ngOnInit(): void {
  //  this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
  //    console.log(data);
  //  });
  //}

}
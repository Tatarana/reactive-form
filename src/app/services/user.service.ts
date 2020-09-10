import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { IUser } from '../user-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  private _rootUrl: string = 'https://jsonplaceholder.typicode.com/users';

  private _users: IUser[] = [
    { id: 1, name: 'Zé Ruela', email: 'zeruela@gmail.com' },
    { id: 2, name: 'Dona Florinda', email: 'florinda@gmail.com' }
  ]

  constructor(private http: HttpClient) { }

  addUser(user: IUser){
    this._users.push(user);
  }

  getUsers(): IUser[] {
    return this._users;
  }

  getUsersViaREST(): Observable<IUser[]> {
    console.log("getUsersViaREST");
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get<IUser[]>(this._rootUrl, {headers: headers})
    //.retry(3)
    //.catch(err => {
    //  console.log('Erro: ', err);
    //  return err;
    //})
      //.map(users => {
       // return users.map( user => {
         // return{
           // id: user.id,
            //name: user.name,
            //email: user.email
          //}
        //})
      //});
  }

  getUserById(id: number): IUser {
    return this._users.filter(user => user.id === id)[0];
  }

}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserListComponent } from '../user-list/user-list.component';
import { BuiltInStrDirComponent } from '../built-in-str-dir/built-in-str-dir.component';
import { BuiltInAttrDirComponent } from '../built-in-attr-dir/built-in-attr-dir.component';
import { DirectiveHostComponent } from '../directive-host/directive-host.component';
import { PipeTestComponent } from '../pipe-test/pipe-test.component';
import { NewUserReactiveComponent } from '../new-user-reactive/new-user-reactive.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'userDetail', component: UserDetailComponent },
  { path: 'str-dir', component: BuiltInStrDirComponent },
  { path: 'attr-dir', component: BuiltInAttrDirComponent },
  { path: 'directives', component: DirectiveHostComponent },
  { path: 'pipe', component: PipeTestComponent },
  { path: 'new-user-reactive', component: NewUserReactiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
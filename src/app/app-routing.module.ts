import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { UsersComponent } from './users/users.component';
import { ModifyuserComponent } from './modifyuser/modifyuser.component';

const routes: Routes = [
  {path: '', component:UsersComponent},
  {path:'users', component:UsersComponent},
  {path:'adduser', component:AdduserComponent},
  {path:'modifyuser', component:ModifyuserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

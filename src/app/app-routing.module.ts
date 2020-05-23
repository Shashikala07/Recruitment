import { NotificationComponent } from './Notifications/notification/notification.component';

import { ExamComponent } from './exam/exam.component';

import { AdminComponent } from './admin/admin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '' , redirectTo: 'navbar',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'mainpage', component: MainpageComponent},
  {path:'admin',component:AdminComponent},
  {path:'notification',component:NotificationComponent},
  {path:'exam',component:ExamComponent},
  {path:'navbar', component:NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

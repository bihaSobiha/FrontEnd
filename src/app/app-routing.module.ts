import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule,Routes} from '@angular/router';

import {TestComponent} from './test/test.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

const routes:Routes = [
  {path:'test',component:TestComponent},
  {path:'home',component:HomeComponent},
  {path:'user',component:LeaveRequestComponent},
  {path:'admin',component:AdminComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

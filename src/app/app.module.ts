import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoleService } from './role.service';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { InteractionService } from './UserService/interaction.service';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    TopbarComponent,
    SidebarComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    LeaveRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    RoleService,
    LoginService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

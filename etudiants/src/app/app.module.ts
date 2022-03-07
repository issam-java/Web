import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentService}  from './services/student.service';
import { AuthService} from './services/auth.service';
import { AuthGuardService} from './services/auth-guard.service';
import {ReactiveFormsModule } from '@angular/forms' ;
import {HttpClientModule} from '@angular/common/http'
import {WebSocketService} from 'src/app/services/web-socket.service';
import { TchatComponent } from './tchat/tchat.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    routedComponents,
    TchatComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],

  providers: [
    StudentService,
    AuthService,
    AuthGuardService,
    WebSocketService,

  ],

  bootstrap: [AppComponent]
})

export class AppModule { }

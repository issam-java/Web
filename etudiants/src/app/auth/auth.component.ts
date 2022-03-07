import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/services/auth.service'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus!:boolean;
  constructor(private authservice:AuthService, private router:Router) { }
  
  
  ngOnInit(): void {
    this.authStatus = this.authservice.isAuth;
  }
  onSignIn(){
      this.authservice.signIn().then(()=>{alert('sign in successful!'); 
      this.authStatus = this.authservice.isAuth;
      this.router.navigate(['students']);})
  }
  onSignOut(){
    this.authservice.signOut();
    this.authStatus =this.authservice.isAuth;
  }


}

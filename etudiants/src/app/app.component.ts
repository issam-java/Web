import { Component,Input,OnInit } from '@angular/core';
import {StudentService} from './services/student.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/Subscription';
import { Subscription } from 'rxjs/Subscription';
import {OnDestroy} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,OnDestroy {
  
  title = 'etudiants';
  isAuth:boolean = false;
  secondes!:number;  
  counterSubscription!:Subscription;
  
  
  constructor(){
  
    setTimeout(
      () => {
      this.isAuth = true;
    },4000);
  }
  
  // rajouter à l'exterieur du constructeur 
  ngOnInit(){
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
      this.secondes = value;
      },
      (error) => {
      console.log('An error occured ! : ' + error);
      },
      () => {
      console.log('Observable complete!');
      }
    
      ); 
          
  }
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
   }
   




}


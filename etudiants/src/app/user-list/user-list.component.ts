import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Subscription} from 'rxjs/Subscription';
import {HttpService} from 'src/app/services/http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users !: User [] ;
  userSubscription !: Subscription ;

  constructor( private http:HttpService) { }

  ngOnInit(): void {
      this.userSubscription = this.http.getUsers().subscribe(
        (users: User[]) => {
        this.users = users;
        }
        );
  } 

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  onSuppress(firstName:string) {
    if(confirm('Etes-vous sûr de la supprimer ?')) {
      this.suppressUser(firstName);
    } else {
      null;
    }
    }
  
  suppressUser(firstName:string) {
    this.http.suppUser(firstName).subscribe((result)=>{
    if(result.status === 200) {
    this.ngOnInit();
    } else {
    alert('le User n\'existe pas !');
    }
    })
    }
   

}

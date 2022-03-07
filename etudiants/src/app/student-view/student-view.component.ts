import { Component, OnInit, OnDestroy } from '@angular/core';
import {StudentService} from 'src/app/services/student.service';
import {Subscription} from'rxjs/Subscription';
@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit,OnDestroy {
  isAuth:boolean = false;
  lastUpdate = new Promise((resolve, reject) => { const date = new Date(); setTimeout(() => {resolve(date);}, 3000);});
  students:any =[];
  studentSubscription!:Subscription;

  constructor(private studentService:StudentService) { }
  
  allAbsent(){
    if(confirm('Etes-vous sûr qu\'ils sont tous absents?')){
      return this.studentService.switchOffAll();
    }else{
      return null;
    }
  }

  allPresent(){
    alert('ils sont tous là!');
    return this.studentService.switchOnAll(); 
  }
  ngOnInit(){
    //this.students = this.studentService.students;
    this.studentSubscription = this.studentService.studentsSubject.subscribe(
    (students: any[]) => {
    this.students = students;
    }
    );
    this.studentService.emitStudentSubject();
    
  }
  ngOnDestroy(){
    this.studentSubscription.unsubscribe();
  }
}

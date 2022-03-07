import { Component,Input, OnInit } from '@angular/core';
import {StudentService} from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  
  @Input()studentName: string = 'henri';
  @Input()studentStatus: string = 'present';
  @Input()index!: number;
  @Input()id!:number;
  
  constructor(private studentService:StudentService) {
   }
   getColor(){
    if(this.studentStatus === 'present'){
      return 'green';
    
    }else{
      return 'red';
    }                                                                                                
  }
   getStatus() {
    return this.studentStatus;
    }
  ngOnInit(): void {
  }
  onSwitch(){
    if(this.studentStatus ==='present'){
      this.studentService.switchOffOne(this.index);
    }else if(this.studentStatus==='absent'){
      this.studentService.switchOnOne(this.index);
    }
  }

}

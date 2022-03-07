import { Component, OnInit } from '@angular/core';
import {StudentService} from '../services/student.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.scss']
})
export class SingleStudentComponent implements OnInit {
  
  name: String = 'etudiant';
  status : String = 'status';
  
  constructor(private studentService: StudentService, private route:ActivatedRoute) { }


  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.studentService.getStudentById(+id).name;
    this.status = this.studentService.getStudentById(+id).status;
  }


}

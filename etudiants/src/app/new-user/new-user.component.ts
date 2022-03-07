import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormArray} from '@angular/forms';
import { Router} from '@angular/router';
import { User } from '../models/user.model';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm !: FormGroup ;

  constructor(private formBuilder: FormBuilder,  
              private router : Router,
              private httpService:HttpService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      diploma: ['', Validators.required],
      options: this.formBuilder.array([])
   });
  }

   onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User( 
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['diploma'],
      formValue['options'] ? formValue['options'] : []
       );
    
    
    this.httpService.createUser(newUser).subscribe((response)=>{
      if(response && response.firstName === 'ok'){
        alert('User crée');
      } else {
        alert('User Existe !');
      };
     }, (e) => {
     console.log('erreur',e);
     }, ()=>{
      this.router.navigate(['/users']);
     }
     );
     
    }
   
    getOptions(): FormArray {
      return this.userForm.get('options') as FormArray;
     }
    onAddOption() {
      const newOptionControl = this.formBuilder.control(null, Validators.required);
      this.getOptions().push(newOptionControl);
     }
     

}

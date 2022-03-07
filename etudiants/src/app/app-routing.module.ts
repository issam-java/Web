import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Routes} from '@angular/router';
import { AuthComponent} from 'src/app/auth/auth.component';
import {StudentViewComponent} from 'src/app/student-view/student-view.component';
import { SingleStudentComponent} from 'src/app/single-student/single-student.component';
import {FourOhFourComponent} from 'src/app/four-oh-four/four-oh-four.component';
import {AuthGuardService} from 'src/app/services/auth-guard.service';
import {EditStudentComponent} from 'src/app/edit-student/edit-student.component';
import {UserListComponent} from 'src/app/user-list/user-list.component';
import {NewUserComponent } from './new-user/new-user.component';


const appRoutes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'students', canActivate: [AuthGuardService],component: StudentViewComponent },
  { path: 'students/:id',canActivate: [AuthGuardService],component:SingleStudentComponent},
  { path: 'auth', component: AuthComponent },
  { path: 'edit', canActivate: [AuthGuardService], component: EditStudentComponent},
  { path: 'users',canActivate: [AuthGuardService], component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },

  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' },
 ];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


export const routedComponents = [ StudentViewComponent, AuthComponent,FourOhFourComponent,EditStudentComponent,UserListComponent,NewUserComponent];

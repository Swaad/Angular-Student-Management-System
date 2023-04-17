import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {
    path:'student-details',
    component: StudentDetailsComponent,
    children:[
   
    ]
  },
  {
    path:'student-form',
    component: StudentFormComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

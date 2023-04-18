import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentFormUpdateComponent } from './student-form-update/student-form-update.component';

const routes: Routes = [
  {
    path:'student-details',
    component: StudentDetailsComponent,

  },
  {
    path:'student-form',
    component: StudentFormComponent,

  },
  {
    path:'student-update/:id',
    component: StudentFormUpdateComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

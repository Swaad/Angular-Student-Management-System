import { Component, OnInit } from '@angular/core';
import { StudentService } from '../model/student.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-student-form-update',
  templateUrl: './student-form-update.component.html',
  styleUrls: ['./student-form-update.component.css']
})
export class StudentFormUpdateComponent implements OnInit {
  form:FormGroup;
  id: any;
  constructor(private fb: FormBuilder, private service:StudentService, private route: ActivatedRoute,
    private router :Router ){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getStudentData(this.id)
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['',  Validators.required],

    });

  }
  getStudentData(id: string){
    this.service.getStudentInfoById(id).subscribe((res: any)=>{

      console.log(res);

      this.form = this.fb.group({
        id: [res.id, Validators.required],
        name: [res.name,  Validators.required],

      });

    })
  }

 onSubmit(obj: any){
   console.log(obj);

     this.service.updateStudent(obj).subscribe(res=>{
      console.log(res)
      this.router.navigate(['student-details'])
    })


  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/model/student.service';

import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit  {
  constructor(private fb: FormBuilder, private service:StudentService,private router :Router) { }
  form:FormGroup;
  response: any;

  ngOnInit(): void {

  this.form = this.fb.group({
    id: ['', Validators.required],
    name: ['',  Validators.required],

  });
  }
  onSubmit(obj: any){
    console.log(this.form, "test");

    // const jsonBody = JSON.stringify(obj);
    // console.log(jsonBody);
    this.service.saveStudent(obj).subscribe((res:any)=>{
      //console.log(this.form.value, "test");
      this.response = res
      console.log("check",this.response)

    })
    if (this.response == true){

      this.router.navigate(['student-details'])
    }
    else{
      console.log("else")
    }


  }



}

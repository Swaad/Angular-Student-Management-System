import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/model/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit  {
  constructor(private fb: FormBuilder, private service:StudentService) { }
  form:FormGroup;
  
  ngOnInit(): void {
  
  this.form = this.fb.group({
    id: ['', Validators.required],
    name: ['',  Validators.required],
   
  });
  }
  onSubmit(obj: any){
    console.log(this.form, "test");
  
    const jsonBody = JSON.stringify(obj);
    console.log(jsonBody);
    this.service.saveStudent(obj).subscribe((res:any)=>{
      //console.log(this.form.value, "test");
      
    })
    

  }

 

}

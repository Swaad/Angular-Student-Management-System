import { Component, OnInit } from '@angular/core';
import { StudentService } from '../model/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})

export class StudentDetailsComponent implements OnInit{
  studentList:any=[];
  constructor(private service:StudentService){

  }
  ngOnInit(): void {
    this.getStudentsData()
 
  }

  getStudentsData(){
     this.service.getStudentInfo().subscribe(res=>{
      this.studentList = res;
      console.log(this.studentList);
    });
   
    
  }

}

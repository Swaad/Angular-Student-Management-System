import { Component, OnInit } from '@angular/core';
import { StudentService } from '../model/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  studentList: any = [];
  studentData: object;
  constructor(private service: StudentService, private router :Router) {}
  ngOnInit(): void {
    this.getStudentsData();
  }

  getStudentsData() {
    this.service.getStudentInfo().subscribe((res) => {
      this.studentList = res;
      console.log(this.studentList);

    });
  }
  getStudentInfoById(id: any) {
    this.service.getStudentInfoById(id).subscribe((res) => {
      this.studentData = res;
      console.log(this.studentData);

    });
  }

  deleteStudent(id: any) {
    console.log('this is id', id);
    this.service.deleteStudent(id).subscribe((res) => {
      this.getStudentsData();
    });
  }

  updateStudent(id: any){
    console.log('this is id:', id);
    this.router.navigate([`student-update/${id}`])
  }
}

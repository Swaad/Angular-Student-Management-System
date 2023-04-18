import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private myHttp: HttpClient) { }
  BaseUrl = environment.apiUrl;

  listStudent: Student[] = []; // for getting data student list

  studentData: Student = new Student(); // for post data or Insert Data

  saveStudent(body: any){
    return this.myHttp.post<any>(`${this.BaseUrl}/Test/Add-TestInfo`, body).pipe(
      map((response) =>
        response
      ),
      catchError((error) => of({}))
    );
  }
  updateStudent(body: any){
    return this.myHttp.put(`${this.BaseUrl}/Test/update/`,body);
  }
  getStudentInfo(): Observable<Student[]>{
    return this.myHttp.get<Student[]>(`${this.BaseUrl}/Test/get-all-student-info`);
  }
  getStudentInfoById(id: string): Observable<Student[]>{
    return this.myHttp.get<Student[]>(`${this.BaseUrl}/Test/get-all-student-info/${id}`);
  }
  deleteStudent(id:number){
    return this.myHttp.delete(`${this.BaseUrl}/Test/delete/${id}`)
  }

}

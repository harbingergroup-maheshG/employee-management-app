import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://dummy.restapiexample.com/api/v1/';
  private employees: Employee[] = [];

  constructor(private http: HttpClient) { }

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.apiUrl + "create", employee);
  }

  getEmployees(): Observable<any> {
    return this.http.get(this.apiUrl + "employees");
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.http.put(`https://dummy.restapiexample.com/api/v1/update/${id}`, data);
  }
  getEmployeeById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + "employee/" + id);
  }
}

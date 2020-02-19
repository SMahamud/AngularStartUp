import { Injectable } from "@angular/core";
import { Employee } from "./employee";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private Url = "https://localhost:44311/api/Employee";

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.Url}`);
  }

  // getEmployees(): Observable<Employee[]> {
  //   const response1 = this.http.get<Employee>(
  //     `${this.Url}/1f999283-2950-4b22-a7b0-aaae134308ee`
  //   );
  //   const response2 = this.http.get<Employee>(
  //     `${this.Url}/0e3f7003-f080-4c71-9bff-7eeadf533e7d`
  //   );
  //   const response3 = this.http.get<Employee>(
  //     `${this.Url}/1f999283-2950-4b22-a7b0-aaae134308ee`
  //   );
  //   const response4 = this.http.get<Employee>(
  //     `${this.Url}/1f999283-2950-4b22-a7b0-aaae134308ee`
  //   );

  //   return forkJoin([response1, response2, response3, response4]);
  // }

  createEmployee(emp: Employee): Observable<any> {
    return this.http.post(`${this.Url}`, emp);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.Url}/${id}`);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.Url}/${id}`);
  }

  updateEmployee(id: string, emp: Employee): Observable<any> {
    return this.http.put(`${this.Url}/${id}`, emp);
  }
}

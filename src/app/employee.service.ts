import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public employeeList : Employee[] ;


  constructor() {
    var empdata= [
      {id:1,firstName:"mahamud",lastName:"shaik",emailId:"123@gmail.com",active:true},
      {id:2,firstName:"jani",lastName:"shaik",emailId:"456@gmail.com",active:true},
      {id:3,firstName:"anita",lastName:"bagaria",emailId:"789@gmail.com",active:true}
    ];
    debugger;
    if(window.localStorage && (localStorage.getItem("employees") ==null))
    {

localStorage.setItem("employees",JSON.stringify(empdata));

    }
   }

   getEmployeesList(): Employee[] {
     debugger;
    let storage = JSON.parse(localStorage.getItem("employees"));
   return storage as Employee[];
  }

  createEmployee(emp:Employee):boolean{
    let storage = JSON.parse(localStorage.getItem("employees")) as Employee[];
             storage.push(emp);
             
             localStorage.setItem("employees",JSON.stringify(storage));
    return true;
  }

  deleteEmployee(emp:Employee){
    let storage = JSON.parse(localStorage.getItem("employees")) as Employee[];
    let index = storage.findIndex(x =>x.id == emp.id && x.emailId == emp.emailId );
    if(index!= -1){
      storage.splice(index,1);
      localStorage.setItem("employees",JSON.stringify(storage));
    }
   
  }

  getEmployee(id:number): Employee{
    let storage = JSON.parse(localStorage.getItem("employees")) as Employee[];
    return storage.find(x=>x.id==id);
  }

  updateEmployee(id:number,emp:Employee){
    debugger;
    let storage = JSON.parse(localStorage.getItem("employees")) as Employee[];
    let index = storage.findIndex(x =>x.id == id);
    if(index!= -1)
      storage.splice(index,1);
      storage.push(emp);
      localStorage.setItem("employees",JSON.stringify(storage));
  }

}

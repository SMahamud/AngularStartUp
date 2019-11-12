import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employee : Employee ;
submitted :boolean = false;
  constructor(private empService : EmployeeService , private route : Router) { }

  ngOnInit() {
    debugger;
    this.employee = new Employee();
    this.submitted = false;
  }

  save(){
    debugger;
this.employee.id = Math.floor(Math.random() * 1000) + 1;
this.empService.createEmployee(this.employee); 
this.gotoList();

 }
 gotoList(){
   debugger;
   this.route.navigate(['/employees']);
 }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import {EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id:number;
  employee:Employee;
  constructor(private route:Router,private ActRoute:ActivatedRoute,private empService:EmployeeService) { }

  ngOnInit() {
    this.employee= new Employee();
    this.id = this.ActRoute.snapshot.params['id'];
    this.employee = this.empService.getEmployee(this.id);
  }

}

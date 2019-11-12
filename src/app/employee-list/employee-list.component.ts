import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employeearray : Employee[] ;

  constructor( private employeeService : EmployeeService, private route:Router) { }


  ngOnInit() {

   this.employeearray = this.employeeService.getEmployeesList();

}


deleteEmployee(emp:Employee)
{
  debugger;
  this.employeeService.deleteEmployee(emp);
  this.ngOnInit();
}
}
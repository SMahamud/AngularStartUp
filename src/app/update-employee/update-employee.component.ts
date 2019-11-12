import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  public id:number;
  public emp:Employee;
  constructor(private empService:EmployeeService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    debugger;
    this.emp = new Employee();
    this.id = this.route.snapshot.params['id'];
           this.emp = this.empService.getEmployee(this.id);
  }

  updateEmployee(){
    this.empService.updateEmployee(this.id,this.emp);
    this.router.navigate(['/employees']);
  }

}

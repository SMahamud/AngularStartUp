import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { Router } from "@angular/router";
import { shareReplay } from "rxjs/operators";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  public employeearray: Employee[];
  constructor(
    private employeeService: EmployeeService,
    private route: Router
  ) {}

  ngOnInit() {
    this.employeeService
      .getEmployees()
      .subscribe(
        x => (console.log(JSON.stringify(x)), (this.employeearray = x))
      );
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(x => this.ngOnInit());
  }
}

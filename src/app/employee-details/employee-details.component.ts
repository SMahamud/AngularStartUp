import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent implements OnInit {
  id: string;
  employee: Employee;
  z: any;
  constructor(
    private route: Router,
    private ActRoute: ActivatedRoute,
    private empService: EmployeeService
  ) {}

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.ActRoute.snapshot.params["id"];
    this.empService.getEmployee(this.id).subscribe(x => (this.employee = x));
  }
}

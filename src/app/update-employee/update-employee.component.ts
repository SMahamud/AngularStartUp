import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-employee",
  templateUrl: "./update-employee.component.html",
  styleUrls: ["./update-employee.component.css"]
})
export class UpdateEmployeeComponent implements OnInit {
  public id: string;
  public emp: Employee;
  public url: string = "";
  public data: any;
  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.route);
    debugger;
    this.route.params.subscribe(x => (this.id = x["id"]));
    // this.id = this.route.snapshot.params['id'];
    this.emp = new Employee();
    this.empService.getEmployee(this.id).subscribe(x => (this.emp = x));
  }

  updateEmployee() {
    this.empService.updateEmployee(this.id, this.emp).subscribe(x => {
      console.log("update response" + JSON.stringify(x)),
        this.router.navigate(["/employees"]);
    });
  }
}

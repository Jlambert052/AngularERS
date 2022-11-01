import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  pageTitle: string = "Employee Create";
  IsDetail: boolean = false;
  emp: Employee = new Employee();
  constructor(
    private empsvc: EmployeeService,
    private router: Router
  ) { }

    save(): void {
      this.empsvc.create(this.emp).subscribe({
        next: (res) => {
          console.debug("Employee created.");
          this.router.navigateByUrl("/emp/list");
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

  ngOnInit(): void {
  }

}

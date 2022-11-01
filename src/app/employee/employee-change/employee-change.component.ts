import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-change',
  templateUrl: './employee-change.component.html',
  styleUrls: ['./employee-change.component.css']
})
export class EmployeeChangeComponent implements OnInit {

  IsDetail: boolean = false;
  pageTitle: string = "Change Employee";
  emp!: Employee;

  constructor(
    private empsvc: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.empsvc.change(this.emp).subscribe({
      next: (res) => {
        console.debug("Employee successfully changed");
        this.router.navigateByUrl("/emp/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.empsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Employee:", res);
        this.emp = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}

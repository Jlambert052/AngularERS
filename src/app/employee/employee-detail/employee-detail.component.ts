import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

pageTitle: string= "Employee Detail";
IsDetail: boolean = true;
emp!: Employee;

  constructor(
    private empsvc: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  showVerifyButton: boolean = false;
  showVerifyVerifyButton: boolean = false;
  showVerifyVerifyVerifyButton: boolean = false;

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton
  }

  removeRemove(): void {
    this.showVerifyVerifyButton = !this.showVerifyVerifyButton
  }

  removeRemoveRemove(): void {
    this.showVerifyVerifyVerifyButton = !this.showVerifyVerifyVerifyButton
  }



  verifyDelete(): void {
    this.empsvc.remove(this.emp.id).subscribe({
      next: (res) => {
        console.debug("Employee deleted");
        this.router.navigateByUrl("/emp/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.empsvc.get(id).subscribe({
      next: (res) => {
        console.debug("employee:", res);
        this.emp = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}

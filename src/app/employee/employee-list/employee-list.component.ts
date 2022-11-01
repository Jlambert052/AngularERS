import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  pageTitle: string = "Employee List";
  emps: Employee[] = [];

  constructor(
    private empsvc: EmployeeService
  ) { }

  ngOnInit(): void {
    this.empsvc.list().subscribe({
      next: (res) => {
        console.debug("Employees:", res);
        this.emps = res as Employee[];
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}

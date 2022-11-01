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
  searchCriteria: string = "";
  sortColumn: string = "id";
  sortAsc: boolean = true;

  constructor(
    private empsvc: EmployeeService
  ) { }

  sortBy(column: string): void {
    console.debug(`sortBy(${column})`)
    if(column === this.sortColumn) {
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }

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

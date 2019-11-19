import { Component, OnInit, Input } from '@angular/core';
import { Employee } from "../employee.model";
import { EmployeeService } from "../employee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

  private employees: Employee[] = null;
  private showNoResultsMessage: boolean = false;

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  getAllEmployees() {
    this.employeeService.findAll().then(
      employees => {
        this.showNoResultsMessage = false;
        this.employees = employees;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployeeById(employee.id).then(
      employees => {
        this.employees = this.employees.filter(function (emp) {
          return emp.id != employee.id;
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  searchByName() {
    let searchValue = (<HTMLInputElement>document.getElementById('searchBox')).value;
    let matchType = (<HTMLInputElement>document.querySelector("input[name='matchType']:checked")).value;
    this.employeeService.searchByName(searchValue, matchType).then(
      employees => {
        if (employees.length > 0) {
          this.showNoResultsMessage = false;
          this.employees = employees;
        } else {
          this.showNoResultsMessage = true;
          this.employees = null;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  openSearch() {
    let searchValue = (<HTMLInputElement>document.getElementById('searchBox')).value;
    let matchType = (<HTMLInputElement>document.querySelector("input[name='matchType']:checked")).value;
    this.employeeService.openSearch(searchValue, matchType).then(
      employees => {
        if (employees.length > 0) {
          this.showNoResultsMessage = false;
          this.employees = employees;
        } else {
          this.showNoResultsMessage = true;
          this.employees = null;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  clearAllEmployees() {
    this.showNoResultsMessage = false;
    this.employees = null;
    (<HTMLInputElement> document.getElementById('searchBox')).value = '';
  }
}
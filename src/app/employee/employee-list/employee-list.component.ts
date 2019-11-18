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

  private employees: Employee[];

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.findAll().then(
      employees => {
        this.employees = employees;
      },
      err => {
        console.log(err);
      }
    );
  }

  createEmployee() {
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let funFact = (<HTMLInputElement>document.getElementById('funFact')).value;
    let employee = new Employee(name, funFact);
    this.employeeService.createEmployee(employee).then(
      employees => {
        this.employees.push(employees);
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
}
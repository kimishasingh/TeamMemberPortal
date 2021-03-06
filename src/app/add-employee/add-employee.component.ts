import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee.model';
import { EmployeeService } from '../employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [EmployeeService]
})
export class AddEmployeeComponent implements OnInit {

  showAlert : boolean = false;

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  createEmployee() {
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let funFact = (<HTMLInputElement>document.getElementById('funFact')).value;
    let photo = (<HTMLInputElement>document.getElementById('photo')).value;
    let employee = new Employee(name, funFact, photo);
    this.employeeService.createEmployee(employee).then(
      employees => {
        (<HTMLInputElement>document.getElementById('name')).value = '';
        (<HTMLInputElement>document.getElementById('funFact')).value = '';
        (<HTMLInputElement>document.getElementById('photo')).value = '';
        this.showAlert = true;
      },
      err => {
        console.log(err);
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { Employee } from "./employee.model";
import { Http } from "@angular/http";
import { Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {
  
  private apiUrl = '/api/members';
  
  constructor(private http: Http) {
  }

  findAll(): Promise<Array<Employee>> {
    return this.http.get(this.apiUrl+"/getAll")
      .toPromise()
      .then(response => response.json() as Employee[])
      .catch(this.handleError);
  }

  createEmployee(employee: Employee): Promise<any> {
    let empHeaders = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl + '/save', JSON.stringify(employee), { headers: empHeaders })
      .toPromise()
      .then(response => response.json() as Employee)
      .catch(this.handleError);
  }

  deleteEmployeeById(id: string): Promise<any> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete(url)
      .toPromise()
      .catch(this.handleError);
  }

  searchByName(searchValue: string): Promise<Array<Employee>> {
    return this.http.get(this.apiUrl+"/search/name/"+searchValue)
      .toPromise()
      .then(response => response.json() as Employee[])
      .catch(this.handleError);
  }

  openSearch(searchValue: string): Promise<Array<Employee>> {
    return this.http.get(this.apiUrl+"/search/any/"+searchValue)
      .toPromise()
      .then(response => response.json() as Employee[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
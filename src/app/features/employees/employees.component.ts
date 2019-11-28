import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EmployeeDataService } from 'src/app/features/employees/employee-data.service';
import { Employee } from 'src/app/core/models/employee.model';
import { RouteStateService } from 'src/app/core/services/route-state.service';

@Component({
  selector: 'app-employees',
  templateUrl: 'employees.component.html',
  styleUrls: ['employees.component.css']
})
export class EmployeesComponent implements OnInit {
  columns: any[];

  employees: Employee[];

  pageSize: number;

  constructor(
    private routeStateService: RouteStateService,
    private employeeService: EmployeeDataService) { }

  ngOnInit() {

    this.pageSize = 10;

    this.columns = [
      { field: 'Name', header: 'Name' },
      { field: 'Department', header: 'Department' },
      { field: 'Address', header: 'Address' },
      { field: 'Age', header: 'Age' }
    ];

    this.employees = this.employeeService.getEmployeeList();
  }

  goToDepartmentDetails(department: number) {
    this.routeStateService.add("Department details", "/main/departments/department-detail", department, false);
  }
}

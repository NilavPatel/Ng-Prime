import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoaderService } from '../core/services/loader.service';
import { RouteStateService } from '../core/services/route-state.service';
import { EmployeeDataService } from './employee-data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, AfterViewInit {
  columns: any[];

  employees: any[];

  pageSize: number;

  constructor(private loaderService: LoaderService,
    private routeStateService: RouteStateService,
    private employeeService: EmployeeDataService) { }

  ngOnInit() {
    this.loaderService.display(true);

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
    this.routeStateService.add("Department details", "/home/departments/department-detail", department, false);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.display(false);
    }, 1000);
  }

}

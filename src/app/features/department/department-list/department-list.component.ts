import { Component, OnInit } from '@angular/core';
import { DepartmentDataService } from 'src/app/features/department/department-data.service';
import { Router } from '@angular/router';
import { RouteStateService } from 'src/app//core/services/route-state.service';

@Component({
  selector: 'app-department-list',
  templateUrl: 'department-list.component.html',
  styleUrls: ['department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  columns: any[];

  departments: any[];

  constructor(private departmentService: DepartmentDataService, private routeStateService: RouteStateService, private router: Router) {
    this.columns = [
      { field: 'Name', header: 'Name' },
      { field: 'Description', header: 'Description' }];
  }

  ngOnInit() {
    this.departments = this.departmentService.getAllDepartments();
  }

  goToDepartmentDetails(department: number) {
    this.routeStateService.add("Department details", "/main/departments/department-detail", department, false);
  }

}

import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { ViewData } from '../../models/viewData.model';
import { ViewDataService } from '../../services/viewData.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  columns: any[];

  departments: any[];

  constructor(private departmentService: DepartmentService, private viewDataService: ViewDataService, private router: Router) {
    this.columns = [
      { field: 'Name', header: 'Name' },
      { field: 'Description', header: 'Description' }];
  }

  ngOnInit() {
    this.departments = this.departmentService.getAllDepartments();
  }

  goToDepartmentDetails(department: number) {
    var viewData = new ViewData();
    viewData.data = department;
    viewData.nextView = "/home/departments/department-detail";
    viewData.prevView = "/home/departments/department-list";

    this.viewDataService.setViewData(viewData);

    this.router.navigate(['/home/departments/department-detail'], { queryParams: { isRedirected: true } });
  }

}

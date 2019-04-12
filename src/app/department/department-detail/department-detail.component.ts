import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../../core/models/department.model';
import { RouteStateService } from '../../core/services/route-state.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  department: Department;

  constructor(
    private departmentService: DepartmentService,
    private routeStateService: RouteStateService) { }

  ngOnInit() {
    var routeState = this.routeStateService.getCurrent();
    this.department = this.departmentService.getDepartmentById(routeState.data);
  }

  back() {
    this.routeStateService.loadPrevious();
  }
}

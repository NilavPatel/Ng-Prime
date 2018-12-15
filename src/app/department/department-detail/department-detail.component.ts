import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentService } from '../department.service';
import { Department } from 'src/app/models/department.model';
import { ViewDataService } from '../../services/viewData.service';
import { ViewData } from 'src/app/models/viewData.model';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  department: Department;

  viewData: ViewData;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService,
    private viewDataService: ViewDataService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if (params.isRedirected && params.isRedirected == "true") {
          this.viewData = this.viewDataService.getViewData();
          this.department = this.departmentService.getDepartmentById(this.viewData.data);
        }
      });
  }

  back() {
    this.router.navigate([this.viewData.prevView]);
  }
}

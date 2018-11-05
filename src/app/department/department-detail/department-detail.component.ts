import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentService } from '../department.service';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  department: Department;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.department = this.departmentService.getDepartmentById(parseInt(params.Id));
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentService } from '../department.service';
import { Department } from 'src/app/models/department.model';
import { ViewDataService } from '../../services/viewData.service';

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
    private departmentService: DepartmentService,
    private viewDataService: ViewDataService) { }

  ngOnInit() {    
    this.route.queryParams
      .subscribe(params => {
        if(params.Id){
          this.department = this.departmentService.getDepartmentById(parseInt(params.Id));
        }
        if(params.getViewData && params.getViewData == "true"){
          var viewData = this.viewDataService.getViewData();
          if(viewData.prevView =="employees"){
            this.department = this.departmentService.getDepartmentByName(viewData.data);
          }
        }
      });
  }
}

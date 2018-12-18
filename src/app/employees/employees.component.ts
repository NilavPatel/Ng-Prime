import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewDataService } from '../services/viewData.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ViewData } from '../models/viewData.model';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, AfterViewInit {
  columns: any[];

  employees: any[];

  constructor(private viewDataService: ViewDataService, private router: Router, private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.display(true);

    this.columns = [
      { field: 'Name', header: 'Name' },
      { field: 'Department', header: 'Department' },
      { field: 'Address', header: 'Address' },
      { field: 'Age', header: 'Age' }
    ];

    this.employees = [
      { Name: 'Nilav', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: '26' },
      { Name: 'Nilav1', Department: '.net', DepartmentId: 1, Address: 'Surat, Gujarat', Age: '25' },
      { Name: 'Nilav2', Department: 'PHP', DepartmentId: 4, Address: 'Ahmedabad, Gujarat', Age: '25' },
      { Name: 'Nilav3', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: '30' },
      { Name: 'Nilav4', Department: 'HR', DepartmentId: 2, Address: 'Baroda, Gujarat', Age: '25' },
      { Name: 'Nilav5', Department: 'HR', DepartmentId: 2, Address: 'Ahmedabad, Gujarat', Age: '28' },
      { Name: 'Nilav6', Department: 'Admin', DepartmentId: 3, Address: 'Ahmedabad, Gujarat', Age: '26' },
      { Name: 'Nilav7', Department: '.net', DepartmentId: 1, Address: 'Surat, Gujarat', Age: '25' },
      { Name: 'Nilav8', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: '27' },
      { Name: 'Nilav9', Department: 'Admin', DepartmentId: 3, Address: 'Baroda, Gujarat', Age: '25' },
      { Name: 'Nilav10', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: '35' }
    ];
  }

  goToDepartmentDetails(department: number) {
    var viewData = new ViewData();
    viewData.data = department;
    viewData.nextView = "/home/departments/department-detail";
    viewData.prevView = "/home/employees";

    this.viewDataService.setViewData(viewData);

    this.router.navigate(['/home/departments/department-detail'], { queryParams: { isRedirected: true } });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.display(false);
    }, 3000);
  }

}

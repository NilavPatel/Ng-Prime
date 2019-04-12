import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoaderService } from '../core/services/loader.service';
import { RouteStateService } from '../core/services/route-state.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, AfterViewInit {
  columns: any[];

  employees: any[];

  pageSize: number;

  constructor(private loaderService: LoaderService, private routeStateService: RouteStateService) { }

  ngOnInit() {
    this.loaderService.display(true);

    this.pageSize = 10;

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
      { Name: 'Nilav10', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: '35' },
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
      { Name: 'Nilav10', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: '35' },
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
      { Name: 'Nilav10', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: '35' },
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
      { Name: 'Nilav10', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: '35' },
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
    this.routeStateService.add("Department details","/home/departments/department-detail", department, false);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.display(false);
    }, 1000);
  }

}

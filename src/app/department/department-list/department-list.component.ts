import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  columns: any[];

  departments: any[];

  constructor() {
    this.columns = [
      { field: 'Name', header: 'Name' },
      { field: 'Description', header: 'Description' }];
  }

  ngOnInit() {
    this.departments = [
    { Id: 1, Name: ".Net", Description: ".Net" },
    { Id: 2, Name: "HR", Description: "HR" },
    { Id: 3, Name: "PHP", Description: "PHP" }];
  }

}

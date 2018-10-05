import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  columns: any[];

  employees: any[];

  constructor() { }

  ngOnInit() {
    this.columns = [
      { field: 'Name', header: 'Name' },
      { field: 'Department', header: 'Department' },
      { field: 'Address', header: 'Address' },
      { field: 'Age', header: 'Age' }
  ];

  this.employees = [
    { Name: 'Nilav', Department: '.net', Address: 'Ahmedabad, Gujarat', Age: '26' },
    { Name: 'Nilav1', Department: '.net', Address: 'Surat, Gujarat', Age: '25' },
    { Name: 'Nilav2', Department: 'PHP', Address: 'Ahmedabad, Gujarat', Age: '25' },
    { Name: 'Nilav3', Department: '.net', Address: 'Ahmedabad, Gujarat', Age: '30' },
    { Name: 'Nilav4', Department: 'HR', Address: 'Baroda, Gujarat', Age: '25' },
    { Name: 'Nilav5', Department: 'HR', Address: 'Ahmedabad, Gujarat', Age: '28' },
    { Name: 'Nilav6', Department: 'Admin', Address: 'Ahmedabad, Gujarat', Age: '26' },
    { Name: 'Nilav7', Department: '.net', Address: 'Surat, Gujarat', Age: '25' },
    { Name: 'Nilav8', Department: '.net', Address: 'Ahmedabad, Gujarat', Age: '27' },
    { Name: 'Nilav9', Department: 'Admin', Address: 'Baroda, Gujarat', Age: '25' },
    { Name: 'Nilav10', Department: '.net', Address: 'Ahmedabad, Gujarat', Age: '35' }
  ];
  }

}

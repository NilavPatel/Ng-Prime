import { Injectable } from '@angular/core';
import { Employee } from 'src/app/core/models/employee.model';

@Injectable({
    providedIn: 'root',
})
/**
 * employee service
 */
export class EmployeeDataService {
    getEmployeeList(): Employee[] {
        return [
            { Id: 1, Name: 'Nilav', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 26 },
            { Id: 2, Name: 'Nilav1', Department: '.net', DepartmentId: 1, Address: 'Surat, Gujarat', Age: 25 },
            { Id: 3, Name: 'Nilav2', Department: 'PHP', DepartmentId: 4, Address: 'Ahmedabad, Gujarat', Age: 25 },
            { Id: 4, Name: 'Nilav3', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 30 },
            { Id: 5, Name: 'Nilav4', Department: 'HR', DepartmentId: 2, Address: 'Baroda, Gujarat', Age: 25 },
            { Id: 6, Name: 'Nilav5', Department: 'HR', DepartmentId: 2, Address: 'Ahmedabad, Gujarat', Age: 28 },
            { Id: 7, Name: 'Nilav6', Department: 'Admin', DepartmentId: 3, Address: 'Ahmedabad, Gujarat', Age: 26 },
            { Id: 8, Name: 'Nilav7', Department: '.net', DepartmentId: 1, Address: 'Surat, Gujarat', Age: 25 },
            { Id: 9, Name: 'Nilav8', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 27 },
            { Id: 10, Name: 'Nilav9', Department: 'Admin', DepartmentId: 3, Address: 'Baroda, Gujarat', Age: 25 },
            { Id: 11, Name: 'Nilav10', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 35 },
            { Id: 12, Name: 'Nilav', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 26 },
            { Id: 13, Name: 'Nilav1', Department: '.net', DepartmentId: 1, Address: 'Surat, Gujarat', Age: 25 },
            { Id: 14, Name: 'Nilav2', Department: 'PHP', DepartmentId: 4, Address: 'Ahmedabad, Gujarat', Age: 25 },
            { Id: 15, Name: 'Nilav3', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 30 },
            { Id: 16, Name: 'Nilav4', Department: 'HR', DepartmentId: 2, Address: 'Baroda, Gujarat', Age: 25 },
            { Id: 17, Name: 'Nilav5', Department: 'HR', DepartmentId: 2, Address: 'Ahmedabad, Gujarat', Age: 28 },
            { Id: 18, Name: 'Nilav6', Department: 'Admin', DepartmentId: 3, Address: 'Ahmedabad, Gujarat', Age: 26 },
            { Id: 19, Name: 'Nilav7', Department: '.net', DepartmentId: 1, Address: 'Surat, Gujarat', Age: 25 },
            { Id: 20, Name: 'Nilav8', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 27 },
            { Id: 21, Name: 'Nilav9', Department: 'Admin', DepartmentId: 3, Address: 'Baroda, Gujarat', Age: 25 },
            { Id: 22, Name: 'Nilav10', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 35 },
            { Id: 23, Name: 'Nilav', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 26 },
            { Id: 24, Name: 'Nilav1', Department: '.net', DepartmentId: 1, Address: 'Surat, Gujarat', Age: 25 },
            { Id: 25, Name: 'Nilav2', Department: 'PHP', DepartmentId: 4, Address: 'Ahmedabad, Gujarat', Age: 25 },
            { Id: 26, Name: 'Nilav3', Department: '.net', DepartmentId: 1, Address: 'Ahmedabad, Gujarat', Age: 30 },
            { Id: 27, Name: 'Nilav4', Department: 'HR', DepartmentId: 2, Address: 'Baroda, Gujarat', Age: 25 },
            { Id: 28, Name: 'Nilav5', Department: 'HR', DepartmentId: 2, Address: 'Ahmedabad, Gujarat', Age: 28 },
            { Id: 29, Name: 'Nilav6', Department: 'Admin', DepartmentId: 3, Address: 'Ahmedabad, Gujarat', Age: 26 },
            { Id: 30, Name: 'Nilav7', Department: '.net', DepartmentId: 1, Address: 'Surat, Gujarat', Age: 25 }
        ];
    }
}
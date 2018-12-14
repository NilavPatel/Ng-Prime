import { Injectable } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Injectable({
    providedIn: 'root',
})
export class DepartmentService {

    departments: any[];

    constructor() {
        this.departments = [
            { Id: 1, Name: ".net", Description: ".Net" },
            { Id: 2, Name: "HR", Description: "HR" },
            { Id: 3, Name: "Admin", Description: "Admin" },
            { Id: 4, Name: "PHP", Description: "PHP" }];
    }

    getAllDepartments() {
        return this.departments;
    }

    getDepartmentById(id: number) {
        var data;
        this.departments.forEach(element => {
            if (element.Id === id) {
                data = element;
            }
        });
        return data;
    }

    getDepartmentByName(name: string) {        
        var data;
        this.departments.forEach(element => {
            if (element.Name === name) {
                data = element;
            }
        });
        return data;
    }
}
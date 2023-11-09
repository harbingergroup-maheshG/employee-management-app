import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee.model';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
  employees: any[] = [];
  isEditingEnabled: boolean = false;

  page: number = 1; // Initialize the current page
  itemsPerPage: number = 15; // Initialize the number of items per page


  constructor(private employeeService: EmployeeService) { }

  get displayedEmployees(): any[] {
    const startIndex = (this.page - 1) * this.itemsPerPage;
    return this.employees.slice(startIndex, startIndex + this.itemsPerPage);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (res) => {
        alert('Employee deleted!')
        this.ngOnInit();
      },
      error: console.log,
    });
  }

  isEditingEmployee(id: number): boolean {
    return this.isEditingEnabled;
  }

  updateEmployee(employee: Employee) {
    this.employeeService.updateEmployee(employee.id, employee);
    this.isEditingEnabled = false;
    alert('Employee Updated!')
  }

  toggleEditing(id: number) {
    return this.isEditingEnabled = true;
  }


  onPageChange(pageNumber: number) {
    // Ensure the page number is within valid bounds
    if (pageNumber >= 1 && pageNumber <= Math.ceil(this.employees.length / this.itemsPerPage)) {
      this.page = pageNumber;
    }
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data: any) => {
      this.employees = data.data; // Assuming the employee data is stored in the "data" property
    });
  }
}

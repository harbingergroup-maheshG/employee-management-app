// import { Component } from '@angular/core';
// import { EmployeeService } from '../service/employee.service';

// @Component({
//   selector: 'app-add-employee',
//   templateUrl: './add-employee.component.html',
//   styleUrls: ['./add-employee.component.css']
// })
// export class AddEmployeeComponent {
//   employeeName: string = '';

//   constructor(private employeeService: EmployeeService) { }

//   addEmployee() {
//     if (this.employeeName) {
//       this.employeeService.addEmployee(this.employeeName);
//       this.employeeName = ''; // Clear the input field after adding an employee
//     }
//   }
// }

import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent {
  employeeForm: FormGroup;

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      salary: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      age: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(18), Validators.max(100)]],
    });
  }

  addEmployee() {
    if (this.employeeForm.valid) {
      const id = this.employeeForm.get('id')?.value as number;
      const name = this.employeeForm.get('name')?.value as string;
      const salary = this.employeeForm.get('salary')?.value as number;
      const age = this.employeeForm.get('age')?.value as number;

      // Create an employee object with the form values
      let newEmployee: Employee = {
        id: id,
        name: name,
        salary: salary,
        age: age
      };

      this.employeeService.addEmployee(newEmployee);
      alert('Employee Added Successfully!')
      this.employeeForm.reset(); // Clear the form
    }
  }
}



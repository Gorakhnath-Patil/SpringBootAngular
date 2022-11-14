import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerInfo } from 'src/model/CustomerInfo';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  updateForm: FormGroup;
  customer: CustomerInfo;
  msg: string;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomerInfo(localStorage.getItem('token')).subscribe({
      next: (data) => {
        this.customer = data;
        this.updateForm = new FormGroup({
          firstName: new FormControl(this.customer.firstName),
          lastName: new FormControl(this.customer.lastName),
          email: new FormControl(this.customer.email),
          salary: new FormControl(this.customer.salary),
          contactNo: new FormControl(this.customer.contactNo),
          age: new FormControl(this.customer.age),
          dob: new FormControl(this.customer.dob),
          address: new FormControl(this.customer.address),
          panNo: new FormControl(this.customer.panNo)
        });
      }
    });

    this.updateForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      contactNo: new FormControl(''),
      age: new FormControl(''),
      salary: new FormControl(''),
      dob: new FormControl(''),
      address: new FormControl(''),
      panNo: new FormControl('')
    });
  }
  onSubmit() {

    let obj = {

      firstName: this.updateForm.value.firstName,
      lastName: this.updateForm.value.lastName,
      dob: this.updateForm.value.dob,
      salary: this.updateForm.value.salary,
      contactNo: this.updateForm.value.contactNo,
      age: this.updateForm.value.age,
      email: this.updateForm.value.email,
      panNo: this.updateForm.value.panNo,
      address: this.updateForm.value.address,

    };

    this.customerService.updateCustomer(localStorage.getItem('token'), obj).subscribe({

      next: (data) => {

        this.msg = data.msg;

      },

      error: (error) => {

        this.msg = 'Could not process operation, please Try again';

      }

    });

  }
}


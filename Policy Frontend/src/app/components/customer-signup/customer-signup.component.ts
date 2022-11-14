import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomerSignupService } from 'src/app/services/customer-signup.service';
import { CustomerInfo } from 'src/model/CustomerInfo';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {

  customerLoginForm: FormGroup;
  msg: string;
  constructor(private customerSignup: CustomerSignupService) { }
  ngOnInit(): void {
    this.customerLoginForm = new FormGroup({
      firstName : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      lastName : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      dob : new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)]),
      contactNo : new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)]),
      salary : new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)]),
      address : new FormControl('',[Validators.required, Validators.minLength(5)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      panNo : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      employerType : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      employerName : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      password : new FormControl('',[Validators.required, Validators.minLength(4)])
    });
  }
  onFormSubmit(){
    console.log(this.customerLoginForm.value);
    let customerInfo: CustomerInfo ={
      firstName: this.customerLoginForm.value.firstName,
      lastName: this.customerLoginForm.value.lastName,
      dob: this.customerLoginForm.value.dob,
      salary: this.customerLoginForm.value.salary,
      contactNo: this.customerLoginForm.value.contact,
      address: this.customerLoginForm.value.address,
      email: this.customerLoginForm.value.email,
      panNo: this.customerLoginForm.value.panNo,
      employerType: this.customerLoginForm.value.employerType,
      employerName: this.customerLoginForm.value.employerName,
      password:this.customerLoginForm.value.password
    };
    this.customerSignup.signUp(customerInfo).subscribe({
      next: (data)=>{
        //if api is successful, I will be here
        this.msg='SignUp Success!!';
      },
      error: (error)=>{
        //if api has errors, I will be here
        this.msg = 'Could not process operation, please Try again';
      }
    })

}
}

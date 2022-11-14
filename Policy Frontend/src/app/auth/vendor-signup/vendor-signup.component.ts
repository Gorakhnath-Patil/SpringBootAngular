import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VendorSignupService } from 'src/app/auth/service/vendor-signup.service';
import { VendorInfo } from 'src/model/VendorInfo';

@Component({
  selector: 'app-vendor-signup',
  templateUrl: './vendor-signup.component.html',
  styleUrls: ['./vendor-signup.component.css']
})
export class VendorSignupComponent implements OnInit {
  vendorloginForm: FormGroup;
  msg: string;
  constructor(private vendorSignup: VendorSignupService) {}

  ngOnInit(): void {
    this.vendorloginForm = new FormGroup({
      name : new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      contact : new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)]),
      address : new FormControl('',[Validators.required, Validators.minLength(5)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required, Validators.minLength(4)])
    });
  }
  onFormSubmit(){
    console.log(this.vendorloginForm.value);
    let vendorInfo: VendorInfo ={
      name: this.vendorloginForm.value.name,
      contact: this.vendorloginForm.value.contact,
      address: this.vendorloginForm.value.address,
      email: this.vendorloginForm.value.email,
      password:this.vendorloginForm.value.password
    };

    this.vendorSignup.signUp(vendorInfo).subscribe({
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

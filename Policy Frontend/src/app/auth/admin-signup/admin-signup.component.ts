import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminSignupService } from 'src/app/auth/service/admin-signup.service';
import { AdminInfo } from 'src/model/AdminInfo';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  adminloginform: FormGroup;
  msg: string;
  constructor(private adminSignup: AdminSignupService) { }

  ngOnInit(): void {
    this.adminloginform=new FormGroup({
      name:new FormControl('',[Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required, Validators.minLength(4)])
    });
  }

  onFormSubmit(){
    console.log(this.adminloginform.value);
    let adminInfo: AdminInfo ={
      name: this.adminloginform.value.name,
      email: this.adminloginform.value.email,
      password:this.adminloginform.value.password
    };
    this.adminSignup.signUp(adminInfo).subscribe({
      next:(data)=>{
         //if api is successful, I will be here
         this.msg='SignUp Success!!';
        },
        error: (error)=>{
          //if api has errors, I will be here
          this.msg = 'Could not process operation, please Try again';
        }
    });
  }
}

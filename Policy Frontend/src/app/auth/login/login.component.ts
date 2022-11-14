import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfo } from 'src/model/UserInfo';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  msg:string;
  user: UserInfo;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
     password : new FormControl('',[Validators.required, Validators.minLength(4)])
   });
  }

  onFormSubmit(){
      /* Read username/password and generate token */
      let token = window.btoa(this.loginForm.value.email + ':' + this.loginForm.value.password);
      this.loginService.login(token).subscribe({
        next:  (data)=>{
          localStorage.setItem('token',token );
          localStorage.setItem('role', data.role );
          localStorage.setItem('email', data.email );

          switch(data.role){
              case "CUSTOMER":
                this.router.navigateByUrl("/customer");
                break;
              case "VENDOR":
                this.router.navigateByUrl("/vendor");
                break;
              case "ADMIN":
                this.router.navigateByUrl("/admin");
                break;
              default:
                localStorage.clear();
                this.router.navigateByUrl("/login");
                break;
          }
        },
        error: (error)=>{
          if(error.status === 403)
          {
            this.msg = error.error.msg;
          }
          else
            this.msg="Invalid Credentials";
        }
      });
    }

}

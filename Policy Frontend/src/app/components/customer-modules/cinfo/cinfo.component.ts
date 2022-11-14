import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerInfo } from 'src/model/CustomerInfo';

@Component({
  selector: 'app-cinfo',
  templateUrl: './cinfo.component.html',
  styleUrls: ['./cinfo.component.css']
})
export class CinfoComponent implements OnInit {

  @Input("customer")
  customer: CustomerInfo;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    //delete the token from local storage
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}

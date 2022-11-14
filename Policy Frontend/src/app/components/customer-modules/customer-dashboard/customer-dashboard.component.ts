import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerInfo } from 'src/model/CustomerInfo';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  customer: CustomerInfo;
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customerService.getCustomerInfo(localStorage.getItem('token')).subscribe({
      next: (data)=>{
        this.customer = data;
      },
      error:(error)=>{
          localStorage.removeItem('token');
          this.router.navigateByUrl("/login");
      },
      complete:()=>{}
    });
  }

}

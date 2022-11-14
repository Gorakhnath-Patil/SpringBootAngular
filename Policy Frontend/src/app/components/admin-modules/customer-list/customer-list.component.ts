import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerInfo } from 'src/model/CustomerInfo';

@Component({
  selector: 'app-admin-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customer: CustomerInfo[];
  msg: string;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllCustomers(localStorage.getItem('token')).subscribe({
      next:(data)=>{
        this.customer = data;
      }
    });
  }
}

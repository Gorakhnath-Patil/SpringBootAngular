import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Policy } from 'src/model/policy.model';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {
fee:2000;
  policies:Policy[];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllPolicies(localStorage.getItem('token')).subscribe({
      next:(data)=>{
        this.policies = data;
      },
      error:(error)=>{}
    });
   
  }


}

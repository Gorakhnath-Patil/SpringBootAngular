import { Component, OnInit } from '@angular/core';
import { VendorDashboardService } from 'src/app/services/vendor-dashboard.service';

import { PolicyInfo } from 'src/model/PolicyInfo';
import { Policy } from 'src/model/Vendor';
@Component({
  selector: 'app-vpolicy-list',
  templateUrl: './vpolicy-list.component.html',
  styleUrls: ['./vpolicy-list.component.css']
})
export class VpolicyListComponent implements OnInit {
policyInfo:PolicyInfo[];
msg: string;
  constructor(private vpolicylistService: VendorDashboardService) { }

  ngOnInit(): void {
    this.getPolicy();
    this.vpolicylistService.policyInfo$.subscribe({
      next: (data)=>{
        this.getPolicy();
      }
    });

   

  }
  getPolicy() {
    this.vpolicylistService.getPolicy(localStorage.getItem('token')).subscribe({
      next: (data)=>{
        this.policyInfo = data
      },
      error: (error)=>{

      }
    });
  }
}
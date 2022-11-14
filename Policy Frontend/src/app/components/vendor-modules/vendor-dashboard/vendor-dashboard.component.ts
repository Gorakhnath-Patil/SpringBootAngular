import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/services/vendor.service';
import { VendorInfo } from 'src/model/VendorInfo';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  vendor:VendorInfo;
  constructor(private vendorService: VendorService, private router: Router) { }

  ngOnInit(): void {
    this.vendorService.getVendorInfo(localStorage.getItem('token'))
      .subscribe({
        next: (data)=>{
          this.vendor = data;
        },
        error:(error)=>{
           // localStorage.removeItem('token');
            this.router.navigateByUrl("/login");
        },
        complete:()=>{}
      });
  }

}

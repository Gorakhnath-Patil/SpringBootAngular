import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorDashboardService } from 'src/app/services/vendor-dashboard.service';
import { VendorInfo } from 'src/model/VendorInfo';


@Component({
  selector: 'app-v-dashboard',
  templateUrl: './v-dashboard.component.html',
  styleUrls: ['./v-dashboard.component.css']
})
export class VDashboardComponent implements OnInit {
vendor:VendorInfo;
  constructor(private vendorService: VendorDashboardService,
    private router: Router) { }

    ngOnInit(): void {
      this.vendorService.getVendorInfo(localStorage.getItem('token'))
      .subscribe({
        next: (data)=>{
          this.vendor = data;
          console.log(this.vendor);
        },
        error:(error)=>{
            localStorage.removeItem('token');
            this.router.navigateByUrl("/login");
        },
        complete:()=>{}
      });
    }
  
  }
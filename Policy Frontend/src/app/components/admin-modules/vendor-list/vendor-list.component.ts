import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { VendorInfo } from 'src/model/VendorInfo';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendor: VendorInfo[];
  msg: string;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllVendors(localStorage.getItem('token')).subscribe({
      next:(data)=>{
        this.vendor = data;
      }
    });
  }

}

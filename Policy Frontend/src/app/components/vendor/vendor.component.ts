import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { Vendor } from 'src/model/Vendor';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendors: Vendor[]=[];
  constructor(private vendordervice: VendorService) { }

  ngOnInit(): void {
    this.vendordervice.getAllVendors().subscribe(data=>{
      
        this.vendors = data;
    });
  }

}
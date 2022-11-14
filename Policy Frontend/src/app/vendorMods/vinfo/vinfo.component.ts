import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorInfo } from 'src/model/VendorInfo';

@Component({
  selector: 'app-vinfo',
  templateUrl: './vinfo.component.html',
  styleUrls: ['./vinfo.component.css']
})
export class VinfoComponent implements OnInit {
  @Input("vendor")
  vendor : VendorInfo;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    //delete the token from local storage
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
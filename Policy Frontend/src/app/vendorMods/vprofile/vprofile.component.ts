import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VendorDashboardService } from 'src/app/services/vendor-dashboard.service';
import { PolicyInfo } from 'src/model/PolicyInfo';
import { VendorInfo } from 'src/model/VendorInfo';

@Component({
  selector: 'app-vprofile',
  templateUrl: './vprofile.component.html',
  styleUrls: ['./vprofile.component.css']
})
export class VprofileComponent implements OnInit {
  profileForm: FormGroup;
  vendorInfo: VendorInfo;
  constructor(private vservice:VendorDashboardService) { }

  ngOnInit(): void {
    this.vservice.getUser(localStorage.getItem('token'))
    .subscribe({
      next: (data)=>{
        this.vendorInfo = data;
        this.profileForm = new FormGroup({
          name: new FormControl(this.vendorInfo.name),
          username: new FormControl(this.vendorInfo.username),
          address: new FormControl(this.vendorInfo.address),
          contact : new FormControl(this.vendorInfo.contact),
          userType:new FormControl(this.vendorInfo.userType),
        });
      }
    });

    this.profileForm = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      address: new FormControl(''),
      contact : new FormControl(''),
      userType: new FormControl('')
    });
  }

  onSubmit(){
      console.log(this.profileForm.value);
  }
}
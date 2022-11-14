import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VendorService } from 'src/app/services/vendor.service';
import { VendorInfo } from 'src/model/VendorInfo';

@Component({
  selector: 'app-vprofile',
  templateUrl: './vprofile.component.html',
  styleUrls: ['./vprofile.component.css']
})
export class VprofileComponent implements OnInit {

  profileForm: FormGroup;
  vendorInfo: VendorInfo;
  msg :string;
  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
    this.vendorService.getVendorInfo(localStorage.getItem('token'))
    .subscribe({
      next: (data)=>{
        this.vendorInfo = data;
        this.profileForm = new FormGroup({
          name: new FormControl(this.vendorInfo.name),
          username: new FormControl(this.vendorInfo.username),
          address: new FormControl(this.vendorInfo.address),
          contact : new FormControl(this.vendorInfo.contact),
          role: new FormControl(this.vendorInfo.role),
        });
      }
    });

    this.profileForm = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      address: new FormControl(''),
      contact : new FormControl(''),
      role: new FormControl('')
    });
  }
  onSubmit(){

    console.log(this.profileForm.value);

    let obj={

      name: this.profileForm.value.name,

      username: this.profileForm.value.username,

      address: this.profileForm.value.address,

      contact: this.profileForm.value.contact      

    };

    this.vendorService.updateVendor(localStorage.getItem('token'), obj).subscribe({

      next:(data)=>{

        this.msg=data.msg;

      },

      error:(error)=>{

        this.msg = 'Could not process operation, please Try again';

      }

    });

}

}

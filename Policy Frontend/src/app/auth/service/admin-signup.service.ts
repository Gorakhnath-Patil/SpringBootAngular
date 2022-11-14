import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminInfo } from 'src/model/AdminInfo';

@Injectable({
  providedIn: 'root'
})
export class AdminSignupService {
  
  constructor(private http: HttpClient) { }

   public signUp(adminInfo: AdminInfo) : Observable<any> {
    let obj={
      name: adminInfo.name,
      email: adminInfo.email,
      user:{
        username: adminInfo.email,
        password: adminInfo.password
      }
    }
    return this.http.post(environment.serverUrl+ '/admin/add', obj);
  }
}
/*
public signUp(vendorInfo: VendorInfo) : Observable<any>{
    let obj={
      name:vendorInfo.name,
      address:vendorInfo.address,
      contact:vendorInfo.contact,
      email:vendorInfo.email,
      user:{
        username: vendorInfo.email,
        password: vendorInfo.password
        }
           
      
  }
    return this.http.post('http://localhost:3969/vendor/add', obj);
}
*/
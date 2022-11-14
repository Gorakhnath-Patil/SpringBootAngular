import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerInfo } from 'src/model/CustomerInfo';

@Injectable({
  providedIn: 'root'
})
export class CustomerSignupService {

  constructor(private http: HttpClient) { }
  //post(url,object)
  public signUp(customerInfo: CustomerInfo) : Observable<any>{
    let obj={
      firstName:customerInfo.firstName,
      lastName:customerInfo.lastName,
      dob: customerInfo.dob,
      salary:customerInfo.salary,
      address:customerInfo.address,
      contactNo: customerInfo.contactNo,
      email: customerInfo.email,
      panNo: customerInfo.panNo,
      employerType: customerInfo.employerType,
      employerName: customerInfo.employerName,
      user: {
          username: customerInfo.email,
          password: customerInfo.password
      }
  }
    return this.http.post(environment.serverUrl+ '/customer/add',obj);
}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Vendor } from 'src/model/Vendor';
import { VendorInfo } from 'src/model/VendorInfo';
import { environment } from 'src/environments/environment';
import { Policy } from 'src/model/policy.model';
import { CustomerInfo } from 'src/model/CustomerInfo';
@Injectable({
  providedIn: 'root'
})
export class VendorService {
 
  policy$ = new BehaviorSubject<Policy>({});

  constructor(private http: HttpClient) { }

  getAllVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(environment.serverUrl + '/vendor/all');
  }

  getVendorInfo(token: string): Observable<VendorInfo> {
    let header = { 'Authorization': 'Basic ' + token };
    return this.http.get<VendorInfo>(environment.serverUrl + '/vendor/one', { headers: header });
  }

  postPolicy(policy: {
    name: any; category: any; duration: any;
    initialDeposit: any; termPerYear: any; slab1: any; slab2: any; slab3: any; slab4: any;
    rateOfInterest: any;  status: any;
  }, token: string): Observable<any> {
    let header = { 'Authorization': 'Basic ' + token };
    return this.http.post(environment.serverUrl + '/vendor/policy/add', policy, { headers: header });
  }

  getPolicy(token: string): Observable<Policy[]> {
    let header = { 'Authorization': 'Basic ' + token };
    return this.http.get<Policy[]>(environment.serverUrl + '/vendor/policy/all', { headers: header });
  }
  updateVendor(token: string, obj: { name: any; username: any; address: any; contact: any; }) : Observable<any>{

    let header = { 'Authorization': 'Basic ' + token };

    return this.http.put(environment.serverUrl + '/vendor/update', obj, { headers: header });

  }

  getCustomerDetailsByPolicy(id: number) : Observable<CustomerInfo[]>{
    return this.http.get<CustomerInfo[]>(environment.serverUrl + '/vendor/customer/all/'+id);
  }

}
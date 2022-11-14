import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from 'src/model/Customer';
import { CustomerInfo } from 'src/model/CustomerInfo';
import { Policy } from 'src/model/policy.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(environment.serverUrl+ '/customer/all');
  }

  getCustomerInfo(token: string) : Observable<CustomerInfo>{
    let header={'Authorization':'Basic '+token};
    return this.http.get<CustomerInfo>(environment.serverUrl+ '/customer/one' , {headers: header});
  }

  getAllPolicies(token: string) : Observable<Policy[]>{
    let header={'Authorization':'Basic '+token};
    return this.http.get<Policy[]>(environment.serverUrl+ '/customer/cust-policy/all', {headers: header})
  }  
  getPolicyDetails(token: string, id: number) : Observable<Policy>{
    let header={'Authorization':'Basic '+token};
    return this.http.get<Policy>(environment.serverUrl+ '/customer/policy/one/'+id, {headers: header})
  }  
  updateCustomer(token: string, obj: { firstName: any; lastName: any; dob: any; salary: any; contactNo: any; email: any; panNo: any; address: any; }): Observable<any> {

    let header = { 'Authorization': 'Basic ' + token };

    return this.http.put(environment.serverUrl + '/customer/update', obj, { headers: header });

  }
 
}

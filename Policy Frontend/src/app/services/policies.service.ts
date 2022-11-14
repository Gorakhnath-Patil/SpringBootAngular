import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerInfo } from 'src/model/CustomerInfo';
import { Policy } from 'src/model/policy.model';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {
 
  constructor(private http: HttpClient) { }

  fetchPolicy():Observable<any> {
   
    return this.http.get<Policy[]>(environment.serverUrl+'/policy/house' );
  }

  fetchPolicyAuto():Observable<any> {
   
    return this.http.get<Policy[]>(environment.serverUrl+'/policy/auto' );
  }

  fetchPolicyHealth():Observable<any> {
   
    return this.http.get<Policy[]>(environment.serverUrl+'/policy/health' );
  }

  fetchPolicyLife():Observable<any> {
   
    return this.http.get<Policy[]>(environment.serverUrl+'/policy/life' );
  }

  buyPolicy(token: string, pid: number) {
    let header={'Authorization':'Basic '+token};
    let url = environment.serverUrl+"/customer/buy/"+pid;
    return this.http.get<CustomerInfo>(url,{headers: header});
  
  }
  
}
/*buyPolicy(token: string, pid: number) {
    let header={'Authorization':'Basic '+token};
    let url = environment.serverUrl+"/customer/buy/"+pid;
    return this.http.get<CustomerInfo>(url,{headers: header});
  }*/

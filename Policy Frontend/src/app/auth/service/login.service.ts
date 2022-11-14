import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInfo } from 'src/model/UserInfo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(token: string) : Observable<UserInfo>{

    let header={'Authorization':'Basic '+token};
     return this.http.get<UserInfo>(environment.serverUrl+ '/user/login', {headers : header});
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminInfo } from 'src/model/AdminInfo';

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {

  @Input("admin")
  admin:AdminInfo;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  logout(){
    //delete the token from local storage
    //localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}

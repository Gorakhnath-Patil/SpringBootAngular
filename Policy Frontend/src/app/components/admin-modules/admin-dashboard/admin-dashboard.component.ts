import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AdminInfo } from 'src/model/AdminInfo';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  admin: AdminInfo;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getAdminInfo(localStorage.getItem('token')).subscribe({
      next: (data) => {
        this.admin = data;
      },
      error: (error) => {
        localStorage.removeItem('token');
        this.router.navigateByUrl("/login");
      }
    });
  }

}

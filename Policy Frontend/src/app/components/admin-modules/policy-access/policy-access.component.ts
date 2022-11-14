import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AdminInfo } from 'src/model/AdminInfo';
import { Policy } from 'src/model/policy.model';

@Component({
  selector: 'app-policy-access',
  templateUrl: './policy-access.component.html',
  styleUrls: ['./policy-access.component.css']
})
export class PolicyAccessComponent implements OnInit {

  admin: AdminInfo;
  policy:Policy[];
  msg: string;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllPendingPolicies(localStorage.getItem('token'),'PENDING').subscribe({
      next:(data)=>{
        this.policy = data;
      },
      error:(error)=>{}
    });
  }
  onStatusUpdate(id:number, status: string){
    this.adminService.updateStatus(localStorage.getItem('token'),id,status)
      .subscribe({
        next: ()=>{
          this.msg='Status Updated';
          this.policy = this.policy.filter(p=>p.id !== id);
        },
        error: ()=>{
          this.msg='Could not update Status, please try later.';
        }
      });
  }

}

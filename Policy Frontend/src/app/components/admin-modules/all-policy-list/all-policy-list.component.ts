import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/app/services/admin.service';

import { Policy } from 'src/model/policy.model';



@Component({

  selector: 'app-all-policy-list',

  templateUrl: './all-policy-list.component.html',

  styleUrls: ['./all-policy-list.component.css']

})

export class AllPolicyListComponent implements OnInit {



  policy: Policy[];

  msg: string;

  constructor(private adminService: AdminService) { }



  ngOnInit(): void {

    this.getAllPolicies();

    this.adminService.policy$.subscribe({

      next: (data) => {

        this.getAllPolicies();

      }

    });

  }
  getAllPolicies() {

    this.adminService.getAllPolicies(localStorage.getItem('token')).subscribe({

      next: (data) => {

        this.policy = data;

      },

      error: (error) => {

        this.msg = error.error.msg;

      }

    });

  }



  onSelect(status: string) {

    this.adminService.getPolicyListByStatus(localStorage.getItem('token'), status)

      .subscribe({

        next: (data) => {

          this.policy = data;

        },

        error: () => {

          this.msg = 'Could not update Status, please try later.';

        }

      });

  }



  onSelectAll() {

    this.getAllPolicies();

  }

}
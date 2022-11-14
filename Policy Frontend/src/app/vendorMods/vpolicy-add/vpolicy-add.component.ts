import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VendorDashboardService } from 'src/app/services/vendor-dashboard.service';

@Component({
  selector: 'app-vpolicy-add',
  templateUrl: './vpolicy-add.component.html',
  styleUrls: ['./vpolicy-add.component.css']
})
export class VpolicyAddComponent implements OnInit {
  policyForm: FormGroup;
  msg: string;
  constructor(private vservice:VendorDashboardService) { }

  ngOnInit(): void {
    this.policyForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      initialDeposit: new FormControl('', Validators.required),
      userType: new FormControl('', Validators.required),
      termPerYear: new FormControl('', Validators.required),
      termAmount: new FormControl('', Validators.required),
      rateOfInterest: new FormControl('', Validators.required),
      maturityAmount: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }
  onPolicySubmit(){
    let policy={
      name: this.policyForm.value.name,
      category: this.policyForm.value.category,
      startDate: this.policyForm.value.startDate,
      duration: this.policyForm.value.duration,
      initialDeposit: this.policyForm.value.initialDeposit,
      userType: this.policyForm.value.userType,
      termPerYear: this.policyForm.value.termPerYear,
      termAmount: this.policyForm.value.termAmount,
      rateOfInterest: this.policyForm.value.rateOfInterest,
      maturityAmount: this.policyForm.value.maturityAmount,
      status: this.policyForm.value.status
    };

    this.vservice.postPolicy(policy, localStorage.getItem('token'))
    .subscribe({
     next: (data)=>{
       this.msg='Policy Submitted'
       this.vservice.policyInfo$.next(policy);
     },
     error: ()=>{
       this.msg='Application could not be processed'
     }
    });
 }
}
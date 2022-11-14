import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vpolicy-add',
  templateUrl: './vpolicy-add.component.html',
  styleUrls: ['./vpolicy-add.component.css']
})
export class VpolicyAddComponent implements OnInit {

  policyForm: FormGroup;
  msg: string;
  maturityAmount: number;
  temp: 2000;
  constructor(private vservice: VendorService) { }

  ngOnInit(): void {
    this.policyForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      initialDeposit: new FormControl('', Validators.required),
      termPerYear: new FormControl('', Validators.required),
      slab1: new FormControl('', Validators.required),
      slab2: new FormControl('', Validators.required),
      slab3: new FormControl('', Validators.required),
      slab4: new FormControl('', Validators.required),
      rateOfInterest: new FormControl('', Validators.required),
      maturityAmount: new FormControl(''),
      status: new FormControl('PENDING'),
    });
  }
  onPolicySubmit() {
    let policy = {
      name: this.policyForm.value.name,
      category: this.policyForm.value.category,
      duration: this.policyForm.value.duration,
      initialDeposit: this.policyForm.value.initialDeposit,
      termPerYear: this.policyForm.value.termPerYear,
      slab1: this.policyForm.value.slab1,
      slab2: this.policyForm.value.slab2,
      slab3: this.policyForm.value.slab3,
      slab4: this.policyForm.value.slab4,
      rateOfInterest: this.policyForm.value.rateOfInterest,
      status: 'PENDING'
    };

    this.vservice.postPolicy(policy, localStorage.getItem('token'))
      .subscribe({
        next: (data) => {
          this.msg = 'Policy Submitted'
          this.vservice.policy$.next(policy);
        },
        error: () => {
          this.msg = 'Application could not be processed'
        }
      });
  }

}

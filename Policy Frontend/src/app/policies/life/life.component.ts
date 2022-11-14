import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoliciesService } from 'src/app/services/policies.service';
import { CustomerInfo } from 'src/model/CustomerInfo';
import { Policy } from 'src/model/policy.model';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {
  policy:Policy[];
  customer:CustomerInfo;
token :string;

  constructor(private router: Router,private pservice: PoliciesService) { }


  ngOnInit(): void {
    this.pservice.fetchPolicyLife()
    .subscribe({
      next: (data)=>{
        this.policy = data;
      }
    })




  }
  onClick(pid:number){
   
  if(localStorage.getItem('token')){
    
this.pservice.buyPolicy(localStorage.getItem('token'),pid).subscribe({
  next:(data)=>{
    this.customer = data;
  },
  error:(error)=>{}
});
this.router.navigateByUrl("/customer/cpolicylist");
  }else{this.router.navigateByUrl("/login");}
  
  }
}


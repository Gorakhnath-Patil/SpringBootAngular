import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerSignupComponent } from './auth/customer-signup/customer-signup.component';

import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VendorComponent } from './components/vendor-modules/vendor/vendor.component';
import { VendorSignupComponent } from './auth/vendor-signup/vendor-signup.component';

import { AdminSignupComponent } from './auth/admin-signup/admin-signup.component';
import { VendorDashboardComponent } from './components/vendor-modules/vendor-dashboard/vendor-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-modules/customer-dashboard/customer-dashboard.component';
import { CinfoComponent } from './components/customer-modules/cinfo/cinfo.component';
import { CustomerUpdateComponent } from './components/customer-modules/customer-update/customer-update.component';
import { PolicyListComponent } from './components/customer-modules/policy-list/policy-list.component';
import { PolicyAccessComponent } from './components/admin-modules/policy-access/policy-access.component';
import { AdminInfoComponent } from './components/admin-modules/admin-info/admin-info.component';
import { AdminDashboardComponent } from './components/admin-modules/admin-dashboard/admin-dashboard.component';
import { VinfoComponent } from './components/vendor-modules/vinfo/vinfo.component';
import { VpolicyAddComponent } from './components/vendor-modules/vpolicy-add/vpolicy-add.component';
import { VpolicyListComponent } from './components/vendor-modules/vpolicy-list/vpolicy-list.component';
import { VprofileComponent } from './components/vendor-modules/vprofile/vprofile.component';
import { HomeComponent } from './components/home/home.component';
import { HealthComponent } from './policies/health/health.component';
import { LifeComponent } from './policies/life/life.component';
import { VnavbarComponent } from './components/vendor-modules/vnavbar/vnavbar.component';
import { CnavbarComponent } from './components/customer-modules/cnavbar/cnavbar.component';
import { AnavbarComponent } from './components/admin-modules/anavbar/anavbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllPolicyListComponent } from './components/admin-modules/all-policy-list/all-policy-list.component';
import { CustomerListComponent } from './components/admin-modules/customer-list/customer-list.component';
import { VendorListComponent } from './components/admin-modules/vendor-list/vendor-list.component';
import { RevokeUserComponent } from './components/admin-modules/revoke-user/revoke-user.component';
import { ConfirmBuyComponent } from './policies/confirm-buy/confirm-buy.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerSignupComponent,
    LoginComponent,
    NavbarComponent,
    VendorComponent,
    VendorSignupComponent,
    AdminSignupComponent,
    VendorDashboardComponent,
    CustomerDashboardComponent,
    CinfoComponent,
    CustomerUpdateComponent,
    PolicyListComponent,
    PolicyAccessComponent,
    AdminInfoComponent,
    AdminDashboardComponent,
    VinfoComponent,
    VpolicyAddComponent,
    VpolicyListComponent,
    VprofileComponent,
    HomeComponent,
    HealthComponent,
    LifeComponent,
    VnavbarComponent,
    CnavbarComponent,
    AnavbarComponent,
    FooterComponent,
    AllPolicyListComponent,
    CustomerListComponent,
    VendorListComponent,
    RevokeUserComponent,
    ConfirmBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

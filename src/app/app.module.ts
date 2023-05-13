import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './user/view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginRegisterComponent } from './user/login-register/login-register.component';
import { HomeComponent } from './user/home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from "@angular/common/http";
import { VideoComponent } from './video/video/video.component';
import { PNGComponent } from './png/png.component';
import { DepositComponent } from './payment/deposit/deposit.component';
import { WithdrawalComponent } from './payment/withdrawal/withdrawal.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AdminviewpanelComponent } from './admin/adminviewpanel/adminviewpanel.component';
import { AdminmainComponent } from './admin/adminmain/adminmain.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { UsersComponent } from './admin/users/users.component';
import { DeshboardComponent } from './admin/deshboard/deshboard.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import { RefreshComponent } from './refresh/refresh.component';
import { BankdeatilsComponent } from './admin/bankdeatils/bankdeatils.component';
import { UserbankdetailsComponent } from './user/userbankdetails/userbankdetails.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { RoleComponent } from './admin/role/role.component';
import { DepositrequestComponent } from './admin/depositrequest/depositrequest.component';
import { WithdarwalrequestComponent } from './admin/withdarwalrequest/withdarwalrequest.component';
import { OtherpaymentComponent } from './admin/otherpayment/otherpayment.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CountdownModule } from 'ngx-countdown';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SubadminComponent } from './admin/subadmin/subadmin.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ViewComponent,
    LoginRegisterComponent,
    HomeComponent,
    VideoComponent,
    PNGComponent,
    DepositComponent,
    WithdrawalComponent,
    AdminheaderComponent,
    AdminviewpanelComponent,
    AdminmainComponent,
    AdminloginComponent,
    UsersComponent,
    routingComponents,
    DeshboardComponent,
    RefreshComponent,
    BankdeatilsComponent,
    UserbankdetailsComponent,
    RoleComponent,
    DepositrequestComponent,
    WithdarwalrequestComponent,
    OtherpaymentComponent,
    SubadminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatRadioModule,
    MatPaginatorModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    CountdownModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatCheckboxModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatTableModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    {provide: LocationStrategy,useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

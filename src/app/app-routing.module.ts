import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminmainComponent } from './admin/adminmain/adminmain.component';
import { AdminviewpanelComponent } from './admin/adminviewpanel/adminviewpanel.component';
import { AgentsComponent } from './admin/agents/agents.component';
import { BankdeatilsComponent } from './admin/bankdeatils/bankdeatils.component';
import { DepositrequestComponent } from './admin/depositrequest/depositrequest.component';
import { DeshboardComponent } from './admin/deshboard/deshboard.component';
import { OtherpaymentComponent } from './admin/otherpayment/otherpayment.component';
import { RoleComponent } from './admin/role/role.component';
import { SubadminComponent } from './admin/subadmin/subadmin.component';
import { UsersComponent } from './admin/users/users.component';
import { WithdarwalrequestComponent } from './admin/withdarwalrequest/withdarwalrequest.component';
import { AdminGuard } from './gaurd/admin.guard';
import { AgentGuard } from './gaurd/agent.guard';
import { UserGuard } from './gaurd/user.guard';
import { HeaderComponent } from './header/header.component';
import { Main2Component } from './main2/main2.component';
import { PNGComponent } from './png/png.component';
import { RefreshComponent } from './refresh/refresh.component';
import { UserbankdetailsComponent } from './user/userbankdetails/userbankdetails.component';
import { ViewComponent } from './user/view/view.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: ViewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'main', component: Main2Component },
  { path: 'bankdetails', component: UserbankdetailsComponent, canActivate: [UserGuard] },
  {
    path: 'admin', component: AdminviewpanelComponent, children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'login', component: AdminloginComponent },
      {
        path: '', component: AdminmainComponent, canActivate: [AdminGuard], children: [
          { path: '', redirectTo: 'deshboard', pathMatch: 'full' },
          { path: 'deshboard', component: DeshboardComponent, canActivate: [AdminGuard] },
          { path: 'users', component: UsersComponent, canActivate: [AdminGuard] },
          { path: 'depositrequest', component: DepositrequestComponent, canActivate: [AdminGuard] },
          { path: 'role', component: RoleComponent, canActivate: [AdminGuard] },
          { path: 'otherpayment', component: OtherpaymentComponent, canActivate: [AdminGuard] },
          { path: 'withdarwalrequest', component: WithdarwalrequestComponent, canActivate: [AdminGuard] },
          { path: 'agents', component: AgentsComponent, canActivate: [AdminGuard, AgentGuard] },
          { path: 'userbankdetails', component: BankdeatilsComponent, canActivate: [AdminGuard] },
          { path: 'subadmin', component: SubadminComponent, canActivate: [AdminGuard] },
        ]
      },
    ]
  },
  { path: '**', component: PNGComponent },
  { path: 'refresh', component: RefreshComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [AgentsComponent, UsersComponent]

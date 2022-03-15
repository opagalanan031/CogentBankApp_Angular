import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { LogoutComponent } from './component/auth/logout/logout.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { AddBeneficiaryComponent } from './component/layout/add-beneficiary/add-beneficiary.component';
import { CreateAccountComponent } from './component/layout/create-account/create-account.component';
import { ForgotPasswordComponent } from './component/layout/forgot-password/forgot-password.component';
import { HomePageComponent } from './component/layout/home-page/home-page.component';
import { RemoveBeneficiaryComponent } from './component/layout/remove-beneficiary/remove-beneficiary.component';
import { TransferAmountComponent } from './component/layout/transfer-amount/transfer-amount.component';
import { ViewAccountsComponent } from './component/layout/view-accounts/view-accounts.component';
import { ViewDashboardComponent } from './component/layout/view-dashboard/view-dashboard.component';
import { ViewStatementComponent } from './component/layout/view-statement/view-statement.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'authenticate',
    component: LoginComponent,
  },
  {
    path: 'home-page',
    component: HomePageComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'dashboard',
    component: ViewDashboardComponent,
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
  },
  {
    path: 'add-beneficiary',
    component: AddBeneficiaryComponent,
  },
  {
    path: 'remove-beneficiary',
    component: RemoveBeneficiaryComponent,
  },
  {
    path: 'transfer-amount',
    component: TransferAmountComponent,
  },
  {
    path: 'view-accounts',
    component: ViewAccountsComponent,
  },
  {
    path: 'view-statement',
    component: ViewStatementComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}

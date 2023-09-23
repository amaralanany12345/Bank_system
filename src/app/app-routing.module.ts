import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './components/sign/sign.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { TransitionComponent } from './components/transition/transition.component';
import { ShowBalanceComponent } from './components/show-balance/show-balance.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { DeptDepositComponent } from './components/dept-deposit/dept-deposit.component';
import { DeptComponent } from './components/dept/dept.component';
import { DeptDetailsComponent } from './components/dept-details/dept-details.component';

const routes: Routes = [
  {path:'',component:SignComponent},
  {path:'signin',component:SigninComponent},
  {path:'Signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'home/transferMoney',component:TransferComponent},
  {path:'home/transition',component:TransitionComponent},
  {path:'home/showBalance',component:ShowBalanceComponent},
  {path:'home/deposit',component:DepositComponent},
  {path:'home/withdraw',component:WithdrawComponent},
  {path:'home/deptDeposit',component:DeptDepositComponent},
  {path:'home/dept',component:DeptComponent},
  {path:'home/deptDetails',component:DeptDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

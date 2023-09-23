import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './components/sign/sign.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { TransitionComponent } from './components/transition/transition.component';
import { ShowBalanceComponent } from './components/show-balance/show-balance.component';
import { DatePipe } from '@angular/common';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { DeptDepositComponent } from './components/dept-deposit/dept-deposit.component';
import { DeptComponent } from './components/dept/dept.component';
import { DeptDetailsComponent } from './components/dept-details/dept-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    TransferComponent,
    TransitionComponent,
    ShowBalanceComponent,
    DepositComponent,
    WithdrawComponent,
    DeptDepositComponent,
    DeptComponent,
    DeptDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],

  bootstrap: [AppComponent]
})
export class AppModule { }

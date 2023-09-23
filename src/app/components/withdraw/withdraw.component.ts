import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/iuser';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  user:Iuser={} as Iuser
  withdrawFrom!:FormGroup
  acceptProcess:boolean=false
  constructor(private appService:AppService,private formBuilder:FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.user=history.state.data
    this.withdrawFrom=this.formBuilder.group({
      balance:['',Validators.required]
    })
  }

  withdraw(){
    if(this.withdrawFrom.value.balance>this.user.balance){
      this.acceptProcess=true
    }
    else{

    this.user.balance-=+this.withdrawFrom.value.balance
    this.appService.updateBalance(this.user,this.user.id).subscribe(newUser=>{
      this.user=newUser
    })
    this.router.navigateByUrl('/home',{state:{data:this.user}})
  }
}

  
}

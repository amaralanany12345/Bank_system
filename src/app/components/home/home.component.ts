import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dept } from 'src/app/dept';
import { DeptDeposit } from 'src/app/dept-deposit';
import { Iuser } from 'src/app/iuser';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  user:Iuser={} as Iuser
  allUserDept:Dept[]=[]
  isDept:boolean=false
  currentDate=new Date
  newCurentDate=new Date()
  stopTheProccessOfAccount:boolean=false
  constructor(private router:Router,private appService:AppService ){
      
  }
  ngOnInit() {
    this.user=history.state.data
    this.appService.getDept(this.user.acountNumber).subscribe(allDept=>{
      this.allUserDept=allDept
      if(this.allUserDept[this.allUserDept.length-1].deptValue!=0){
        this.isDept=true
      }
    })
  }

  transfer(){
    this.router.navigateByUrl('/home/transferMoney',{state:{data:this.user}})
  }
  goToAllTransition(){
    this.router.navigateByUrl('/home/transition',{state:{data:this.user}})
  }
  showBalance(){
    this.router.navigateByUrl('/home/showBalance',{state:{data:this.user.balance}})
  }
  deposit(){
    this.router.navigateByUrl('/home/deposit',{state:{data:this.user}})
  }
  withdraw(){
    this.router.navigateByUrl('/home/withdraw',{state:{data:this.user}})
  }
  deptDeposit(){
    this.router.navigateByUrl('/home/deptDeposit',{state:{data:this.user,isDept:this.isDept}})
  }
  dept(){
    this.router.navigateByUrl('/home/dept',{state:{data:this.user,isDept:this.isDept}})
  }
  deptDetails(){
    this.router.navigateByUrl('/home/deptDetails',{state:{data:this.user}})
  }

}

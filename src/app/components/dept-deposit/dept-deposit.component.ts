import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dept } from 'src/app/dept';
import { Iuser } from 'src/app/iuser';
import { AppService } from 'src/app/services/app.service';
import { DatePipe } from '@angular/common';
import { DeptDeposit } from 'src/app/dept-deposit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dept-deposit',
  templateUrl: './dept-deposit.component.html',
  styleUrls: ['./dept-deposit.component.css']
})
export class DeptDepositComponent implements OnInit {
  // newDeptDeposit:DeptDeposit={} as DeptDeposit
  newDept:Dept[]=[]
  x:DeptDeposit={} as DeptDeposit
  user:Iuser={} as Iuser
  deptDepositFrom!:FormGroup
  currentDate=new Date
  currentDeptDate = new Date();
  isdept!:boolean
  constructor(private appSerive:AppService,private fromBuilder:FormBuilder,private router:Router){
  }

  ngOnInit(){
    this.user=history.state.data
    this.deptDepositFrom=this.fromBuilder.group({
      deptValue:['']
    })
    this.appSerive.getDept(this.user.acountNumber).subscribe(dept=>{
      this.newDept=dept
    })
  }
  
  deptDeposit(){
      this.newDept[this.newDept.length-1].deptValue-=+this.deptDepositFrom.value.deptValue
      this.currentDeptDate.setFullYear(this.currentDate.getFullYear());
      this.x.deptValue=this.deptDepositFrom.value.deptValue
      this.x.deptDate=this.currentDeptDate
      this.newDept[this.newDept.length-1].deptDepositProcess.push(this.x)
      this.appSerive.updateDept(this.newDept[this.newDept.length-1],this.newDept[this.newDept.length-1].id).subscribe(updatedDept=>{
        this.newDept[this.newDept.length-1]=updatedDept
      })
      this.router.navigateByUrl('/home',{state:{data:this.user}})
    }
}

import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Dept } from 'src/app/dept';
import { Iuser } from 'src/app/iuser';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent {
  newDept:Dept={} as Dept
  user:Iuser={} as Iuser
  deptFrom!:FormGroup
  currentTime:any 
  currentDate=new Date
  nextYearDate = new Date();
  isdept!:boolean
  constructor(private appSerive:AppService,private fromBuilder:FormBuilder,private router:Router){}

  ngOnInit(){
    this.user=history.state.data
    this.newDept.accountNumber=this.user.acountNumber
    this.deptFrom=this.fromBuilder.group({
      deptValue:['']
    })
    this.isdept=history.state.isDept
  }
  
  dept(){
      this.newDept.mainDeptValue=this.deptFrom.value.deptValue
      this.newDept.deptValue=this.deptFrom.value.deptValue
      this.nextYearDate.setFullYear(this.currentDate.getFullYear()+1);
      this.newDept.dueDate=this.nextYearDate
      this.newDept.deptDepositProcess=[]
      this.appSerive.dept(this.newDept).subscribe(newDept=>{
      })
      this.appSerive.updateBalance(this.user,this.user.id).subscribe(newUser=>{
        this.user=newUser
      })
      this.router.navigateByUrl('/home',{state:{data:this.user}})
    }
  }
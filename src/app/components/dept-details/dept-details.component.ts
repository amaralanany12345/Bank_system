import { Component, OnInit } from '@angular/core';
import { Dept } from 'src/app/dept';
import { DeptDeposit } from 'src/app/dept-deposit';
import { Iuser } from 'src/app/iuser';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent implements OnInit {

  constructor(private appService:AppService){}
  user:Iuser={} as Iuser
  dept:Dept[]=[]
  sumofDeptDeposit:number=0
  theDeptValue:number=0
  ngOnInit(): void {
    this.user=history.state.data
    this.appService.getDept(this.user.acountNumber).subscribe(newDept=>{
      this.dept=newDept
      for(let i=0;i<this.dept[this.dept.length-1].deptDepositProcess.length;i++){
        this.sumofDeptDeposit+=this.dept[this.dept.length-1].deptDepositProcess[i].deptValue
      } 
      this.dept[this.dept.length-1].deptDeposit=this.sumofDeptDeposit
    })
  }
}

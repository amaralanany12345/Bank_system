import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iuser } from 'src/app/iuser';
import { AppService } from 'src/app/services/app.service';
import { Transfer } from 'src/app/transfer';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  users:Iuser[]=[]
  user:Iuser= {} as Iuser
  transporter:Iuser={} as Iuser
  transferForm!: FormGroup
  newTransfer:Transfer={} as Transfer
  currentTime=new Date ()

  currentDate=new Date
  currentYearDate = new Date();

  transferAccepted:boolean=false
  userExisted:boolean=false
  constructor(private appService:AppService,private formbuilder: FormBuilder,public datepipe: DatePipe, private router:Router){}
  
  ngOnInit(): void {
    this.transferForm = this.formbuilder.group({
      acountNumber: ['', Validators.required],
      balance: [''],
    })
    this.transporter=history.state.data
    this.newTransfer.payer=this.transporter.acountNumber
  }

  transfer(){
    this.appService.getUser().subscribe(res=>{
      const user=res.find((anyUser:any)=>{
        return anyUser.acountNumber===this.transferForm.value.acountNumber 
      })

      if(user){
        if(this.transferForm.value.balance>this.transporter.balance){
          this.transferAccepted=true
        }
        else{

        this.newTransfer.reciever=user.acountNumber
        this.newTransfer.transferValue=this.transferForm.value.balance
        this.currentYearDate.setFullYear(this.currentDate.getFullYear());

        this.newTransfer.Date=this.currentYearDate
        this.appService.transfer(this.newTransfer).subscribe(transfer=>{

        })
        user.balance+=+this.transferForm.value.balance
        this.transporter.balance-=+this.transferForm.value.balance
        this.appService.updateBalance(user,user.id).subscribe(newUser=>{
        })
        this.appService.updateBalance(this.transporter,this.transporter.id).subscribe(newTransporter=>{
          this.transporter=newTransporter
        })
        this.router.navigateByUrl('/home',{state:{data:this.transporter}})
      }
    }

      else{
        this.userExisted=true
        console.log('no')
      }
    })
  }

}

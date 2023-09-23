import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/iuser';
import { AppService } from 'src/app/services/app.service';
import { Transfer } from 'src/app/transfer';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {
  payer:Iuser={} as Iuser
  allTransition:Transfer[]=[]
  allReciever:Transfer[]=[]
  time:Date={} as Date
    constructor(private appService:AppService){
      
    }

  ngOnInit(){
    this.payer=history.state.data
    this.appService.getAllTransition(this.payer.acountNumber).subscribe(allTransition=>{
      this.allTransition=allTransition
    })
    this.appService.getAllRecieved(this.payer.acountNumber).subscribe(allReciever=>{
      this.allReciever=allReciever
    })
  }

}

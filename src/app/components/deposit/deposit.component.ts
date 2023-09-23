import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/iuser';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  depositForm!:FormGroup
  user:Iuser={} as Iuser
  constructor(private appService:AppService , private formbuilder:FormBuilder,private router:Router){}

  ngOnInit(): void {
    this.depositForm = this.formbuilder.group({
      balance: ['',Validators.required],
    })
    this.user=history.state.data
  }
    deposit(){
      this.user.balance+=+this.depositForm.value.balance
        this.appService.updateBalance(this.user,this.user.id).subscribe(newUser=>{
          this.user=newUser
        })
      this.router.navigateByUrl('/home',{state:{data:this.user}})

    }
}

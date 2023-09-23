import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  users:Iuser[]=[]
  loginForm!: FormGroup
  loggedIn:boolean=false
  constructor(private formbuilder: FormBuilder,private userService:UserService, private router:Router){

  }
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      acountNumber: [''],
      password: ['', Validators.required]
    })
  }
  signin(){
    this.userService.signIn().subscribe(res=>{
    const user=res.find((anyuser:any)=>{
      return anyuser.password===this.loginForm.value.password && anyuser.acountNumber===this.loginForm.value.acountNumber 
    })
      if(user){
        this.router.navigateByUrl('/home',{state:{data:user}})
      }
      else{
        this.loggedIn=true
      }
    })
  }
  goToSignUp(){
    this.router.navigateByUrl('/Signup')
  }

}

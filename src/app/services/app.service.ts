import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from '../iuser';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Transfer } from '../transfer';
import { Dept } from '../dept';
import { DeptDeposit } from '../dept-deposit';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  httpOptions
  constructor(private httpClient:HttpClient,private router:Router) {
    this.httpOptions={
      headers: new HttpHeaders({
        'content-Type':'application/json',
        // Authorization:"my-auth-token"   
      }),
    }
   }

   getUser():Observable<Iuser[]>{
    return this.httpClient.get<Iuser[]>("http://localhost:3000/users")
   }

   updateBalance(user:Iuser,userId:number):Observable<Iuser>{
    return this.httpClient.put<Iuser>(`http://localhost:3000/users/${userId}`,JSON.stringify(user),this.httpOptions).
    pipe(
      retry(2),
      catchError((err:any)=>{
        console.error(err)
        return throwError(()=> new Error('post error'))
      })
    )
   }

   getAllTransition(payer:string):Observable<Transfer[]>{
    return this.httpClient.get<Transfer[]>(`http://localhost:3000/trasnfer?payer=${payer}`)
   }

   getAllRecieved(reciever:string):Observable<Transfer[]>{
    return this.httpClient.get<Transfer[]>(`http://localhost:3000/trasnfer?reciever=${reciever}`)
   }

   transfer(newTransfer:Transfer):Observable<Transfer>{
    return this.httpClient.post<Transfer>(`http://localhost:3000/trasnfer`,JSON.stringify(newTransfer),this.httpOptions)
    .pipe(
      retry(2),
      catchError((err:any)=>{
        console.error(err)
        return throwError(()=> new Error('post error'))
      })
    )
   }

   dept(newDept:Dept):Observable<Dept>{
    return this.httpClient.post<Dept>('http://localhost:3000/deptProcces',JSON.stringify(newDept),this.httpOptions)
    .pipe(
      retry(2),
      catchError((err:any)=>{
        console.error(err)
        return throwError(()=> new Error('post error'))
      })
    )
   }  

   getDept(accountNumber:string):Observable<Dept[]>{
    return this.httpClient.get<Dept[]>(`http://localhost:3000/deptProcces?accountNumber=${accountNumber}`)
   }
   getDeptDeposit(accountNumber:string):Observable<DeptDeposit[]>{
    return this.httpClient.get<DeptDeposit[]>(`http://localhost:3000/deptProcces?accountNumber=${accountNumber}`)
   }

   updateDept(dept:Dept,deptId:number):Observable<Dept>{
    return this.httpClient.patch<Dept>(`http://localhost:3000/deptProcces/${deptId}`,JSON.stringify(dept),this.httpOptions)
    .pipe(
      retry(2),
      catchError((err:any)=>{
        console.error(err)
        return throwError(()=> new Error('post error'))
      })
      )
    }

   deptDeposit(deptDeposit:DeptDeposit):Observable<DeptDeposit>{
    return this.httpClient.post<DeptDeposit>('http://localhost:3000/deptDeposit',JSON.stringify(deptDeposit),this.httpOptions)
    .pipe(
      retry(2),
      catchError((err:any)=>{
        console.error(err)
        return throwError(()=> new Error('post error'))
      })
    )
    }


}

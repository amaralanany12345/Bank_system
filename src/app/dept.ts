import { DeptDeposit } from "./dept-deposit";

export interface Dept {
    accountNumber:string,
    mainDeptValue:number,
    deptDeposit:number,
    deptValue:number,
    dueDate:Date,
    id:number,
    deptDepositProcess:any[]
    

}

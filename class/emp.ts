import { Iemployee } from "../interface/Iemployee";

export class emp{
    empname=" ";
    empid=0;
    designation="";
    salary=0;

    setvalue(emp_name:string,emp_id:number,designation:string,salary:number){
        this.empname=emp_name;
        this.empid=emp_id;
        this.designation=designation;
    }
    print(){
        console.log("employee name:" + this.empname + " designation:" + this.designation);
    }

}
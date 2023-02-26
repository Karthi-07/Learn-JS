export class Person1{
    constructor(fname,lname,age)
    {
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    n()
    {
        var c=this.fname+' '+this.lname+" "+this.age; //inside class we access the value using this keyword
        return c;
    }
   }

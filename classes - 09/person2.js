export class Person2{
    constructor(fname,lname,age)
    {
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }
    n()
    {
        var c=this.fname+' '+this.lname+" "+this.age; 
        return c;
    }
   }
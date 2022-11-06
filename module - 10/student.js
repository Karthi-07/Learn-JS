export class Student{
    constructor(fname,lname,age,gender)
    {
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.gender=gender;
    }
    getfullname()
    {
        var c=(this.gender=='M')?'Mr.':'Ms.';
        var total=''+c+this.fname+' '+this.lname;
        return total;
    }
}
let myDate=function (day, month, year)
{
    //start attribute;
    this.day=day;
    this.month=month;
    this.year=year;
    //end attribute;

    //start method
    this.getDay=function ()
    {
        return this.day;
    };
    this.getMonth=function ()
    {
        return this.month;
    };
    this.getYear=function ()
    {
        return this.year;
    };
    this.setDay=function (newDay)
    {
        this.day=newDay;
    };
    this.setMonth=function (newMonth)
    {
        this.month=newMonth;
    };
    this.setYear=function (newYear)
    {
        this.year=newYear;
    };
    this.setDate=function (day, month, year)
    {
        this.day=day;
        this.month=month;
        this.year=year;
    };
    this.toString=function (day, month, year)
    {
        let date="";
        return date= String(day)+"/"+String(month)+"/"+String(year);
    };
    //end method
};

let input=new myDate(2, 2, 2007);
console.log(input);
let day=input.getDay();
let month=input.getMonth();
let year=input.getYear();
alert(day+"/"+month+"/"+year);

//start set.
input.setDate(3);
input.setMonth(3);
input.setYear(2020);
//end set.
//start get.
day=input.getDay();
month=input.getMonth();
year=input.getYear();
//end get.
alert(day+"/"+month+"/"+year);
//start set.
input.setDate(4,3,2020);
//end set.
//start get.
day=input.getDay();
month=input.getMonth();
year=input.getYear();
//end get.
document.write(input.toString(day, month, year));



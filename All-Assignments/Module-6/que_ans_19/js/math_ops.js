function finalResult(val)
{
    let x=parseInt(document.getElementById("num1").value);
    let y=parseInt(document.getElementById("num2").value);
    
    if(val=="+")
    {
        document.getElementById("res").innerHTML=x+y;
    }
    else if(val=="-")
    {
        document.getElementById("res").innerHTML=x-y;
    }
    else if(val=="*")
    {
        document.getElementById("res").innerHTML=x*y;
    }
    else if(val=="/")
    {
        document.getElementById("res").innerHTML=x/y;
    }
    else if(val=="%")
    {
        document.getElementById("res").innerHTML=x%y;
    }

}

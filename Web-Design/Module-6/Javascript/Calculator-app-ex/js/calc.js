//function for clear result values
function clr()
{
    document.getElementById("result").value="";
}
//function for backspace in result
function bckResult()
{
    let bck=document.getElementById("result").value;
    let slicebck=bck.slice(0,-1);
    document.getElementById("result").value=slicebck;
}
//function for displaying button values
function getValues(val)
{
    document.getElementById("result").value+=val;
}
//function for performing all arithmatic expressions
function finalResult()
{
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value=y;
}
//function for squaring a number
function sqResult()
{
    let x=document.getElementById("result").value;
    let y=Math.pow(x,2);
    document.getElementById("result").value=y;
}
//function for square root of a number
function sqrtResult()
{
    let x=document.getElementById("result").value;
    let y=Math.sqrt(x);
    document.getElementById("result").value=y;
}
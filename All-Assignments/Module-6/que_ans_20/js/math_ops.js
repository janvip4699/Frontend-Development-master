function result(val)
{
    let marks1=parseInt(document.getElementById("marks1").value);
    let marks2=parseInt(document.getElementById("marks2").value);
    let marks3=parseInt(document.getElementById("marks3").value);
    let marks4=parseInt(document.getElementById("marks4").value);
    let marks5=parseInt(document.getElementById("marks5").value);
    let marks6=parseInt(document.getElementById("marks6").value);
    let marks7=parseInt(document.getElementById("marks7").value);


    if(val=="Result")
    {
        
        document.getElementById("res1").innerHTML=marks1+marks2+marks3+marks4+marks5+marks6+marks7;
        let total=marks1+marks2+marks3+marks4+marks5+marks6+marks7;
        let divide=total/350;
        let per=divide*100;
        per=Math.floor(per);
        document.getElementById("res2").innerHTML=per;
    }
}
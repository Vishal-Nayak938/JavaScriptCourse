function Bat()
{
    let num=Math.random()*3;

if(num>=0 && num<=1)
{
    document.querySelector('#H').innerText="foul.";
}
else if(num>1 && num<=2)
{
    document.querySelector('#H').innerText="user has won" ;
}
else if(num>2 && num<=3)
{
    document.querySelector('#H').innerText="computer has won";
}
}

function Ball()
{
    let num=Math.random()*3;
    if(num>=0 && num<=1)
    {
        document.querySelector('#H').innerText="computer choice is Bat .Computer has won."
    }
    else if(num>1 && num<=2)
    {
        document.querySelector('#H').innerText=" computer choice is ball.You Are foul."
    }
else if(num>2 && num<=3)
{
    document.querySelector('#H').innerText="computer choice is stump User Has Won."
}
}


function Stump()
{
    let num=Math.random()*3;
    if(num>=0 && num<=1)
    {
        document.querySelector('#H').innerText=`${document.querySelector('#Input').innerText="vishal"} is playing computer choice is Bat .you have won.  ` 
    }
    else if(num>1 && num<=2)
    {
        document.querySelector('#H').innerText=` ${document.querySelector('#Input').innerText="vishal"}
        is playing.computer choice is ball. computer has won.`
    }
else if(num>2 && num<=3)
{
    document.querySelector('#H').innerText=`${document.querySelector('#Input').innerText="vishal"} is playing computer choice is stump . it is foul.`
}
}


// function GetText()
// {
let a=document.querySelector('#Input').GetText;
    console.log(a);
// }


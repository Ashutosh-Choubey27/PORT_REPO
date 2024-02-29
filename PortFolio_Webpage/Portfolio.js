let btns = document.querySelectorAll('btn');
btns.forEach((b)=>
{
    b.addEventListener('click',function(){
        console.log(b)
    })
})


function downloadBtn()
{
    alert("CV Downloaded")
}


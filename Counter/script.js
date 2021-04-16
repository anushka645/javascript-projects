var count=0;
var value=document.querySelector("#value");
var btns=document.querySelectorAll(".btn");
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        let selectedclass=e.currentTarget.classList;
        if(selectedclass.contains("decrease")){
            count-=1;
        }
        else if(selectedclass.contains("increase")){
            count+=1;
        }
        else{
            count=0;
        }
        value.textContent=count;
        if(count>0){
            value.style.color="green";
        }
        if(count<0){
            value.style.color="maroon";
        }
        if(count===0){
            value.style.color="black";
        }
    })
})

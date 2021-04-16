
let arr=["a","b","c","d","e","f","1","2","3","4","5","6"];
document.body.style.backgroundColor="green";
function change(){
    let color="#";
    let random=Math.floor(Math.random()*(arr.length));
    for(let i=0;i<6;i++){
        let random=Math.floor(Math.random()*(arr.length));
        color+=arr[random];
    }
    document.body.style.backgroundColor=`${color}`;
    document.getElementsByClassName("bgClr")[0].textContent=`Background Color : ${color}`;
    // document.getElementsByClassName("bgClr")[0].style.color=`${color}`;

}
// console.log(color);

document.body.style.textAlign="center";
document.getElementById('cashOut').style.display = "none";
document.getElementById("transaction").style.display = "none";

document.getElementById('add-money').addEventListener('click',function(){
    setDisplayEleById("addMoney","block");
    setDisplayEleById("cashOut","none");
    setDisplayEleById("transaction","none");
})

document.getElementById('cash-out').addEventListener('click',function(){
    setDisplayEleById("addMoney","none");
    setDisplayEleById("transaction","none");
    setDisplayEleById("cashOut","block");
})

document.getElementById("trasc").addEventListener('click',function(){
    setDisplayEleById("addMoney","none");
    setDisplayEleById("cashOut","none");
    setDisplayEleById("transaction","block");
})

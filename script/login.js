document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNum = document.getElementById('accountNum').value;
    const pin = getInputValueById("pin");
    if(accountNum.length === 11){
        if(pin === 1234){
            window.location.href = 'main.html';
        }
        else{
            alert('Enter correct pin');
        }
    }
    else{
        alert('Enter a valid number');
    }
})
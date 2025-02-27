document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNum = document.getElementById('cashout-accountNum').value;
    const amount = getInputValueById("cashout-amount")
    const pin = getInputValueById("cashout-pin");

    const mainBal = getInnerTextValueById("mainBal")
    
    if(accountNum.length === 11){
        if(pin === 1234){
            if(mainBal > amount){

            const sum = mainBal - amount;

            setValueById("mainBal",sum);

             const container = document.getElementById('transaction');
            const trxContainer = document.getElementById('trxContainer');
            const div = document.createElement('div');
            div.innerHTML = `
            <h3 class="px-4 py-1 text-black font-normal text-[20px]">cashout ${amount} tk from ${accountNum} account
            </h3> 
            <p class="text-[10px] px-4">${Date()}</p>
            `;
            const x = trxContainer.appendChild(div);
            container.appendChild(x);

            }

            else{
                alert('insufficient balance');
            }
        }
        else{
            alert('Enter correct pin');
        }
    }
    else{
        alert('Enter a valid number');
    }
})
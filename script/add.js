document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNum = document.getElementById('accountNum').value;
    const amount = getInputValueById("amount");
    const pin = getInputValueById("pin");

    const mainBal = getInnerTextValueById("mainBal")
    console.log(amount,pin,mainBal)

    if(accountNum.length === 11){
        if(pin === 1234){
            const sum = amount + mainBal;
            console.log(sum);
            setValueById("mainBal",sum);

            const container = document.getElementById('transaction');
            const trxContainer = document.getElementById('trxContainer');
            const div = document.createElement('div');
            div.innerHTML = `
            <h3 class="px-4 py-1 text-black font-normal text-[20px]">added ${amount} tk from ${accountNum} account
            </h3> 
            <p class="text-[10px] px-4">${Date()}</p>
            `;
            const x = trxContainer.appendChild(div);
            container.appendChild(x);

        }
        else{
            alert('Enter correct pin');
        }
    }
    else{
        alert('Enter a valid number');
    }
})
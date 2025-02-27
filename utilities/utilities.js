function getInputValueById(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextValueById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setValueById(id,value){
    document.getElementById(id).innerText = value;
}

function setDisplayEleById(id,status){
    document.getElementById(id).style.display = status;
}
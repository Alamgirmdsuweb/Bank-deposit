function doubleIt(num) {
  const result = num * 2;
  return result;
}
const first = doubleIt(5);
const second = doubleIt(7);

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  //  clear input field
  inputField.value = "";

  return amountValue;
}
function updateTotalField(totalFieldId, amount) {
  // +
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance(){
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const prevBalanceTotal = parseFloat(balanceTotalText);
  return prevBalanceTotal ;
}

function updateBalance(amount, isAdd) {

  const balanceTotal = document.getElementById("balance-total");
 

 const prevBalanceTotal= getCurrentBalance()

  if (isAdd == true) {
    balanceTotal.innerText = prevBalanceTotal + amount;
  } else {
    balanceTotal.innerText = prevBalanceTotal - amount;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    
    const depositAmount = getInputValue("deposit-input");
    if(depositAmount > 0){
    updateTotalField("deposit-total", depositAmount);
    updateBalance(depositAmount, true);
    }

    
    //  clear input field
    depositInput.value = "";
  });

// handle withdraw

document
  .getElementById("Widthdraw-button")
  .addEventListener("click", function () {


    const widthdrawAmount = getInputValue("Widthdraw-input");
    const CurrentBalance=getCurrentBalance()
    if(widthdrawAmount>0 && widthdrawAmount<CurrentBalance){

    updateTotalField("widthdraw-total", widthdrawAmount);
    updateBalance(widthdrawAmount, false);
    }
    if(widthdrawAmount > CurrentBalance){
      console.log('You can not widthdraw more than what you have in your wallet')
    }

   
  });

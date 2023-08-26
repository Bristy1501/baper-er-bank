
document.getElementById('deposit-btn').addEventListener('click', function () {
    // const depositField = document.getElementById('deposit-field')
    // const depositAmount = depositField.value
    const depositAmountParse = getInputFieldValueById('deposit-field')
    console.log(depositAmountParse)
    // depositField.value = ''
    if (isNaN(depositAmountParse)) {
        alert('Please provide a number')
        return
    }
    // const depositBoard = document.getElementById('deposit-amount')
    // const depositBoardAmount = depositBoard.innerText
    const depositBoardAmountParse = getTextElementValueById('deposit-amount')
    console.log(depositBoardAmountParse)
    const depositBoardAmountParseTotal = depositBoardAmountParse + depositAmountParse
    console.log(depositBoardAmountParseTotal)
    setTextElementValueById('deposit-amount', depositBoardAmountParseTotal)

    // const balanceBoard = document.getElementById('balance-amount')
    // const balanceBoardAmount = balanceBoard.innerText
    const balanceBoardAmountParse = getTextElementValueById('balance-amount')
    const balanceBoardAmountParseTotal = balanceBoardAmountParse + depositAmountParse
    setTextElementValueById('balance-amount', balanceBoardAmountParseTotal)


    // depositBoard.innerText = depositBoardAmountParseTotal
    //****balance board****

    // balanceBoard.innerText = balanceBoardAmountParseTotal
})


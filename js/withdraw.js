document.getElementById('withdraw-btn').addEventListener('click', function () {

    //***withdraw****/
    // const withdrawField = document.getElementById('withdraw-field')
    // const withdrawAmount = withdrawField.value
    const withdrawAmountParse = getInputFieldValueById('withdraw-field')
    // withdrawField.value = ''
    if (isNaN(withdrawAmountParse)) {
        alert('Please provide a number')
        return
    }
    const withdrawBoardAmountParse = getTextElementValueById('withdraw-amount')
    const balanceBoardAmountParse = getTextElementValueById('balance-amount')

    // const withdrawBoard = document.getElementById('withdraw-amount')
    // const withdrawBoardAmount = withdrawBoard.innerText

    // const balanceBoard = document.getElementById('balance-amount')
    // const balanceBoardAmount = balanceBoard.innerText
    if (withdrawAmountParse > balanceBoardAmountParse) {
        alert('amount nai')
        return
    }

    let withdrawBoardAmountParseTotal = withdrawBoardAmountParse + withdrawAmountParse
    // withdrawBoard.innerText = withdrawBoardAmountParseTotal
    setTextElementValueById('withdraw-amount', withdrawBoardAmountParseTotal)


    //****balance board****


    const balanceBoardAmountParseTotal = balanceBoardAmountParse - withdrawAmountParse
    // balanceBoard.innerText = balanceBoardAmountParseTotal
    setTextElementValueById('balance-amount', balanceBoardAmountParseTotal)


})
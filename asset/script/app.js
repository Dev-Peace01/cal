const defaultResult = 0
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(usrInput.value)
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = 
    {
        operation: operationIdentifier,
        prevResult: prevResult,
        Number: operationNumber,
        result: newResult,
    };
    logEntry.push(logEntry);
    // console.log(logEntry.operation)
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
 if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredNumber
 ) {
    return;
 }

 // if (
 //     calculationType === 'ADD' ||
 //     calculationType === 'SUBTRACT' ||
 //     calculationType === 'MULTIPLY' ||
 //     calculationType === 'DIVIDE'
 // ) {
    
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult = currentResult + enteredNumber;
        mathOperator = '+';
    } 
    else if (calculationType === 'SUBTRACT') {
        currentResult = currentResult - enteredNumber;
        mathOperator = '-';
    }
    else if (calculationType === 'MULTIPLY') {
        currentResult = currentResult * enteredNumber;
        mathOperator = '*';
    }
    // difference between else if and just else used here in the last phase
    else {  
        currentResult = currentResult / enteredNumber;
        mathOperator = '/';
    }                                                                   
    
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}   

function add() {
    calculateResult('ADD');
}
function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY')
}

function divide() {
calculateResult('DIVIDE')
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract) 
multiplyBtn.addEventListener('click', multiply) 
divideBtn.addEventListener('click', divide)

// function divide() {
//     // const enteredNumber = getUserNumberInput();
//     // const initialResult = currentResult
//     // currentResult = currentResult / enteredNumber;
//     // createAndWriteOutput('/', initialResult, enteredNumber);
//     // writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
//     calculateResult("DIVIDE")
// }
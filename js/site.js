

// get the values from the page
//Starts or Controller Function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
    //We need to validate our input
    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    

    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
            //We call generate numbers
            let numbers = generateNumbers(startValue, endValue);
            //we call displayNumbers
            displayNumbers(numbers);
    }else{
        alert("You Must Enter a Whole Number")
    }    
}

//generate numbers from startvalue to the endvalue
//Logic Function(s)
//Variables list in (startValue, endValue) are this blocks not from above
function generateNumbers(startValue, endValue){

    let numbers = [];

    //we want to get all numbers from start to end.
    for (let index = startValue; index <= endValue.length; index++) {
        
        //this will execute in a loop until index = endValue
        numbers.push(index);
    }

    return numbers;
}

//display the number and even show bold
//Display or View functions
function displayNumbers(numbers){

    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
       
        let number = numbers[index];
        templateRows += `<tr><td>${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}
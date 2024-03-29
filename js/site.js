//get the start and end numbers from the input
//entry point AKA controller function
function getValues() {
    let startValue = document.getElementById('startValue').value; //startValue = "0"
    let endValue = document.getElementById('endValue').value; //endValue = "100"

    let startNumber = parseInt(startValue); //startNumber = 0
    let endNumber = parseInt(endValue); //endNumber = 100

    if (Number.isInteger(startNumber) && Number.isInteger(endNumber)) {
        let numberArray = generateNumbers(startNumber, endNumber);
        displayNumbers(numberArray);
    } else {
        //display an error
        Swal.fire ({
                icon: 'error',
                title: 'Oops!',
                text: 'Please enter valid numbers for the start and end values'
            });
    }
}

//generate the range of numbers to display
//business/logic function
function generateNumbers(start, end) {
    let basketOfNumbers = [];
  //starts at 0, keeps doing loop until its greater than 100
    for (let number = start; number <= end; number = number + 1) {
        basketOfNumbers.push(number);       //or number++
    }

    return basketOfNumbers; // => [0, 1, 2, 3, .... , 100]
}

//placing the generated numbers on the page AND bolding the even numbers
//view function
function displayNumbers(numbers) { //length is amount of numbers/content in an array

    let results = '';

    for (let index = 0; index < numbers.length; index++) {   //index++ is same as index = index + 1
      //start at 0... as long as number < 101...keep looping, then add 1
        let currentNumber = numbers[index];

        if (currentNumber % 2 == 0) {
            results += `<tr><td class="evenNumber">${currentNumber}</td></tr>`;
        } else {
            results = results + `<tr><td>${currentNumber}</td></tr>`;
        }
    }    
    let tableBody = document.getElementById('results');
    tableBody.innerHTML = results;
}
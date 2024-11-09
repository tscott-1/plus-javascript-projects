const add = (step) => {
    // We gave the number element an id of number so we can use that to get the element
    let numberElement = document.getElementById("number");
    // We can use the innerText property to get the text inside the element
    let number = numberElement.innerText;
        number = parseInt(number) + step;
    	numberElement.innerText = number;
  };


const subtract = (step) => {
    // We gave the number element an id of number so we can use that to get the element
    let numberElement = document.getElementById("number");
    // We can use the innerText property to get the text inside the element
    let number = numberElement.innerText;
        number = parseInt(number) - step;
    	numberElement.innerText = number;
  };



  const reset = () => {
    // We gave the number element an id of number so we can use that to get the element
    let numberElement = document.getElementById("number");
    // We can use the innerText property to get the text inside the element
    let number = numberElement.innerText = 0;
  };


  const custom = () => {
    // We gave the number element an id of number so we can use that to get the element
    let numberElement = document.getElementById("number");
    let customStep = document.getElementById("step");
        // We can use the innerText property to get the text inside the element
    let number = numberElement.innerText;
    let step = customStep.innerText;
        // number = parseInt(number) + parseInt(step);
        number = parseInt(step);
        numberElement.innerText = number;
  };
var numberarr=[];

function saveDetails(){

    let number = document.getElementById("usernumber").value;   //getting the input from user
    console.log(number);
    for(let i = 1; i <=number; i++){                   //it will loop till user entered number
        let randomNumber=Math.floor(Math.random()*(100-1)+1);   //syntax between max and min value is Math.random*(max-min)+min
        //console.log(randomNumber);
        numberarr.push(randomNumber);
        

    }
    console.log(numberarr)
}




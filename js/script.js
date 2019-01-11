const checkButton = document.querySelector('.check');



function CalculateTip() {
    

    let billVal = parseFloat(document.querySelector('#bill').value);
    let peopleVal = parseFloat(document.querySelector('#people').value);
    let qualityVal = document.querySelector('#quality').value;
    let qualitySum = document.querySelector('.qualitySummary p');


    if (qualityVal === "excellent") {
        qualitySum.innerText = "25%"
    };
    if (qualityVal === "ok") {
        qualitySum.innerText = "15%"
    };
    if (qualityVal === "extremely bad") {
        qualitySum.innerText = "0%"
    }

    
    let bill = document.querySelector('.billSummary p').innerText = billVal;
    let tip = (billVal*15)/100;
    let tipSum = document.querySelector('.tip p').innerText = tip;
    let tipPerPerson = document.querySelector('.tipPerPerson p').innerText = tip/peopleVal;
    let billPerPerson = billVal/peopleVal;
    let billPerPersonSum = document.querySelector('.billPerPerson p').innerText = billPerPerson;
    



    

    


    
   



   
        
    




    

    

    
    
    
};

checkButton.addEventListener('click', function() {
    if (document.querySelector('#bill').value.length > 0) {
        CalculateTip();
    }
})
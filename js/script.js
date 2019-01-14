const checkButton = document.querySelector('.check');



function CalculateTip() {
    

    let billVal = parseFloat(document.querySelector('#bill').value);
    let peopleVal = parseFloat(document.querySelector('#people').value);
    let qualityVal = document.querySelector('#quality').value;
    let qualitySum = document.querySelector('.qualitySummary div');

    let tip = 1;


    if (qualityVal === "excellent") {
        qualitySum.innerText = "25%";
        tip = (billVal*25)/100
    };
    if (qualityVal === "ok") {
        qualitySum.innerText = "15%";
        tip = (billVal*15)/100
    };
    if (qualityVal === "extremelyBad") {
        qualitySum.innerText = "0%";
        tip = 0
    }

    
    let bill = document.querySelector('.billSummary div').innerText = billVal;
    

    



    let tipSum = document.querySelector('.tip div').innerText = tip;
    let tipPerPerson = document.querySelector('.tipPerPerson div').innerText = tip/peopleVal;
    let billPerPerson = billVal/peopleVal;
    let billPerPersonSum = document.querySelector('.billPerPerson div').innerText = billPerPerson;
    



    

    


    
   



   
        
    




    

    

    
    
    
};

checkButton.addEventListener('click', function() {
    if (document.querySelector('#bill').value.length > 0 && document.querySelector('#people').value.length > 0) {
        CalculateTip();
    }
})
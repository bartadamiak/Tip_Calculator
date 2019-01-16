const checkButton = document.querySelector('.check');
const currencySign = document.querySelectorAll('.currencies div');

function CalculateTip() {
    
    let billVal = parseFloat(document.querySelector('#bill').value);
    let peopleVal = parseFloat(document.querySelector('#people').value);
    let qualityVal = document.querySelector('#quality').value;
    let qualitySum = document.querySelector('.qualitySummary div');

    let tip = 0;


    if (qualityVal === "excellent") {
        qualitySum.innerText = "25%";
        tip = Math.ceil((billVal*25)/100)
    };
    if (qualityVal === "ok") {
        qualitySum.innerText = "15%";
        tip = Math.ceil((billVal*15)/100)
    };
    if (qualityVal === "extremelyBad") {
        qualitySum.innerText = "0%";
        tip = 0
    }

    
    let bill = document.querySelector('.billSummary div').innerText = Math.ceil(billVal + tip);
    

    let tipSum = document.querySelector('.tip div').innerText = tip;
    let tipPerPerson = document.querySelector('.tipPerPerson div').innerText = Math.ceil(tipSum/peopleVal);
    let billPerPerson = Math.ceil(bill/peopleVal);
    let billPerPersonSum = document.querySelector('.billPerPerson div').innerText = billPerPerson;


    
    
};

function Currencies(tab) {
    
    for (let i = 0; i < tab.length; i++) {
        tab[i].addEventListener('click', function() {
           
            if (document.querySelectorAll('.red').length < 1) {
            this.classList.toggle('blue');
            this.classList.toggle('red')
            }
            document.querySelector('.red').addEventListener('click', function() {
                this.classList.toggle('blue');
                this.classList.toggle('red');
                
            });
            
            
        });
    }

    
}



Currencies(currencySign);



checkButton.addEventListener('click', function() {
    if (document.querySelector('#bill').value.length > 0 && document.querySelector('#people').value.length > 0) {
        CalculateTip();
    }

});


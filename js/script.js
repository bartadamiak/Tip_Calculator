const checkButton = document.querySelector('.check');
const currencySign = document.querySelectorAll('.currencies div');

function CalculateTip() {
    
    // Inputs box

    let billVal = parseFloat(document.querySelector('#bill').value);
    let peopleVal = parseFloat(document.querySelector('#people').value);
    let qualityVal = document.querySelector('#quality').value;

    // Summary box - Tip counter


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

    // Summary box

    
    let bill = document.querySelector('.billSummary div').innerText = Math.ceil(billVal + tip);
    let billPerPersonSum = document.querySelector('.billPerPerson div').innerText = (bill/peopleVal).toFixed(2);
    
    
    

    let tipSum = document.querySelector('.tip div').innerText = tip;
    let tipPerPerson = document.querySelector('.tipPerPerson div').innerText = (tipSum/peopleVal).toFixed(2);
   



    
    
};


function Currencies(tab) {
    
    for (let i = 0; i < tab.length; i++) {
        tab[i].addEventListener('click', function() {

            let red = document.querySelectorAll('.red');

            let secondP = document.querySelectorAll('.secondP');
            
            for (let j = 0; j < secondP.length; j++) {
                secondP[j].innerText = this.innerText;

            }


            
            
           
            if (red.length = 0) {
                
                this.classList.toggle('red');
                this.classList.toggle('blue');
                
                
            
            }
            if (red.length = 1) {
                
                this.classList.toggle('blue');
                this.classList.toggle('red');
                red[0].classList.toggle('red');
                red[0].classList.toggle('blue');
                
                
            }
            

                
        });
    };
        
}



Currencies(currencySign);

checkButton.addEventListener('click', function() {
    if (document.querySelector('#bill').value.length > 0 && document.querySelector('#people').value.length > 0) {
        CalculateTip();
    }

});


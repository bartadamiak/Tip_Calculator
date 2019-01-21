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

$( function() {
    let currencyPLN = 'https://api.exchangeratesapi.io/latest?base=PLN';
    let currencyUSD = 'https://api.exchangeratesapi.io/latest?base=USD';
    let currencyRUB = 'https://api.exchangeratesapi.io/latest?base=RUB';
    let currencyEUR = 'https://api.exchangeratesapi.io/latest?base=EUR';
    let currencyGBP = 'https://api.exchangeratesapi.io/latest?base=GBP';

    $('.check').on('click', function() {

        
        
        $.ajax(currencyPLN).done(function(data) {

            
            let billSum = $('.billSummary div').text();
            billSum = parseFloat(billSum);

            // Pounds
            let gbpZloty = data.rates.GBP;
            gbpZloty = (parseFloat(gbpZloty)*billSum).toFixed(2);

            let gbpConvert = $('.poundConverter p').text(gbpZloty + " " + "GBP");

             // Dollar
            let usdZloty = data.rates.USD;
            usdZloty = (parseFloat(usdZloty)*billSum).toFixed(2);

            let usdConvert = $('.dollarConverter p').text(usdZloty + " " + "USD")

            // Euro
            let eurZloty = data.rates.EUR;
            eurZloty = (parseFloat(eurZloty)*billSum).toFixed(2);

            let eurConvert = $('.euroConverter p').text(eurZloty + " " + "EUR")

            // Ruble
            let rubZloty = data.rates.RUB;
            rubZloty = (parseFloat(rubZloty)*billSum).toFixed(2);

            let rubConvert = $('.rubleConverter p').text(rubZloty + " " + "RUB")
            
            // Cleaning 

            $('.plnConverter p').text("")


        })
     }) 

    $('.dollar').on('click', function() {

        if ($('.billSummary div').text()!='0') {
        
            $.ajax(currencyUSD).done(function(data) {

                let billSum = $('.billSummary div').text();
                billSum = parseFloat(billSum);

                // Pounds
                let gbpDollar = data.rates.GBP;
                gbpDollar = (parseFloat(gbpDollar)*billSum).toFixed(2);

                let gbpConvert = $('.poundConverter p').text(gbpDollar + " " + "GBP");

                 // Zloty
                let plnDollar = data.rates.PLN;
                plnDollar = (parseFloat(plnDollar)*billSum).toFixed(2);

                let plnConvert = $('.plnConverter p').text(plnDollar + " " + "ZŁ")

                // Euro
                let eurDollar = data.rates.EUR;
                eurDollar = (parseFloat(eurDollar)*billSum).toFixed(2);

                let eurConvert = $('.euroConverter p').text(eurDollar + " " + "EUR")

                // Ruble
                let rubDollar = data.rates.RUB;
                rubDollar = (parseFloat(rubDollar)*billSum).toFixed(2);

                let rubConvert = $('.rubleConverter p').text(rubDollar + " " + "RUB")
                
                // Cleaning 

                $('.dollarConverter p').text("")
            })
    }
    });
    
    $('.pln').on('click', function() {

        if ($('.billSummary div').text()!='0') {
        
        $.ajax(currencyPLN).done(function(data) {

            let billSum = $('.billSummary div').text();
            billSum = parseFloat(billSum);

            // Pounds
            let gbpZloty = data.rates.GBP;
            gbpZloty = (parseFloat(gbpZloty)*billSum).toFixed(2);

            let gbpConvert = $('.poundConverter p').text(gbpZloty + " " + "GBP");

             // Dollar
            let usdZloty = data.rates.USD;
            usdZloty = (parseFloat(usdZloty)*billSum).toFixed(2);

            let usdConvert = $('.dollarConverter p').text(usdZloty + " " + "USD")

            // Euro
            let eurZloty = data.rates.EUR;
            eurZloty = (parseFloat(eurZloty)*billSum).toFixed(2);

            let eurConvert = $('.euroConverter p').text(eurZloty + " " + "EUR")

            // Ruble
            let rubZloty = data.rates.RUB;
            rubZloty = (parseFloat(rubZloty)*billSum).toFixed(2);

            let rubConvert = $('.rubleConverter p').text(rubZloty + " " + "RUB")
            
            // Cleaning 

            $('.plnConverter p').text("")


        })
    }
    }) 

    $('.ruble').on('click', function() {

        if ($('.billSummary div').text()!='0') {
    
        
        $.ajax(currencyRUB).done(function(data) {

            let billSum = $('.billSummary div').text();
            billSum = parseFloat(billSum);

            // Pounds
            let gbpRuble = data.rates.GBP;
            gbpRuble = (parseFloat(gbpRuble)*billSum).toFixed(2);

            let gbpConvert = $('.poundConverter p').text(gbpRuble + " " + "GBP");

             // Dollar
            let usdRuble = data.rates.USD;
            usdRuble = (parseFloat(usdRuble)*billSum).toFixed(2);

            let usdConvert = $('.dollarConverter p').text(usdRuble + " " + "USD")

            // Euro
            let eurRuble = data.rates.EUR;
            eurRuble = (parseFloat(eurRuble)*billSum).toFixed(2);

            let eurConvert = $('.euroConverter p').text(eurRuble + " " + "EUR")

            // Zloty
            let plnRuble = data.rates.PLN;
            plnRuble = (parseFloat(plnRuble)*billSum).toFixed(2);

            let plnConvert = $('.plnConverter p').text(plnRuble + " " + "ZŁ")
            
            // Cleaning 

            $('.rubleConverter p').text("")


        })
    }
    })

    $('.euro').on('click', function() {

        if ($('.billSummary div').text()!='0') {
        
        $.ajax(currencyEUR).done(function(data) {

            let billSum = $('.billSummary div').text();
            billSum = parseFloat(billSum);

            // Pounds
            let gbpEuro = data.rates.GBP;
            gbpEuro = (parseFloat(gbpEuro)*billSum).toFixed(2);

            let gbpConvert = $('.poundConverter p').text(gbpEuro + " " + "GBP");

             // Dollar
            let usdEuro = data.rates.USD;
            usdEuro = (parseFloat(usdEuro)*billSum).toFixed(2);

            let usdConvert = $('.dollarConverter p').text(usdEuro + " " + "USD")

            // Ruble
            let rubEuro = data.rates.RUB;
            rubEuro = (parseFloat(rubEuro)*billSum).toFixed(2);

            let rubleConvert = $('.rubleConverter p').text(rubEuro + " " + "RUB")

            // Zloty
            let plnEuro = data.rates.PLN;
            plnEuro = (parseFloat(plnEuro)*billSum).toFixed(2);

            let plnConvert = $('.plnConverter p').text(plnEuro + " " + "ZŁ")
            
            // Cleaning 

            $('.euroConverter p').text("")


        })

    }
    })

    $('.pound').on('click', function() {

        if ($('.billSummary div').text()!='0') {
        
        $.ajax(currencyGBP).done(function(data) {

            let billSum = $('.billSummary div').text();
            billSum = parseFloat(billSum);

            // Euro
            let eurPound = data.rates.EUR;
            eurPound = (parseFloat(eurPound)*billSum).toFixed(2);

            let eurConvert = $('.euroConverter p').text(eurPound + " " + "EUR")

             // Dollar
            let usdPound = data.rates.USD;
            usdPound = (parseFloat(usdPound)*billSum).toFixed(2);

            let usdConvert = $('.dollarConverter p').text(usdPound + " " + "USD")

            // Ruble
            let rubPound = data.rates.RUB;
            rubPound = (parseFloat(rubPound)*billSum).toFixed(2);

            let rubleConvert = $('.rubleConverter p').text(rubPound + " " + "RUB")

            // Zloty
            let plnPound = data.rates.PLN;
            plnPound = (parseFloat(plnPound)*billSum).toFixed(2);

            let plnConvert = $('.plnConverter p').text(plnPound + " " + "ZŁ")
            
            // Cleaning 

            $('.poundConverter p').text("")


        })

    }
    })
    


});




Currencies(currencySign);

checkButton.addEventListener('click', function() {
    if (document.querySelector('#bill').value.length > 0 && document.querySelector('#people').value.length > 0) {
        CalculateTip();
        
    }

});


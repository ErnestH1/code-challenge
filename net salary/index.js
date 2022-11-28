
// calculates PAYE based on basic salary
function paye (){
    let salary = parseInt(document.getElementById("input").value)
    let perc1 = salary * .1
    let perc2 = salary * .25
    let perc3 = salary * .3
     if (salary <=24000){
         document.getElementById("result").innerHTML = parseFloat(perc1).toFixed(2) 
         return  parseFloat(perc1).toFixed(2) 
     }
     else if (salary>=24001 && salary <=32333){
         document.getElementById("result").innerHTML =parseFloat|(perc2)
         return parseFloat|(perc2)
     }
     else if (salary >= 32334){
         document.getElementById("result").innerHTML = parseFloat(perc3).toFixed(2)
         return parseFloat(perc3).toFixed(2)}
     }
 
 // NHIF decuction
 function NhifCalc() {
    let salary = parseInt(document.getElementById("input").value)



switch (true) {
    case salary<5999:
           return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 150'
    case salary >= 6000 && salary <= 7999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 300'
    case salary >= 8000 && salary <= 11999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 400'
            case salary >= 12000 && salary <= 14999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 500'
            case salary >= 15000 && salary <= 19999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 600'
            case salary  >= 20000 && salary <= 24999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 750'
            case salary >= 25000 && salary <= 29999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 850'
            case salary  >= 30000 && salary <= 34999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 900'
            case salary >= 35000 && salary <= 39999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 950'
            case salary >= 40000 && salary <= 44999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 1000'
            case salary >= 45000 && salary <= 49999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 1100'
            case salary >= 50000 && salary <=  59999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 1200'
            case salary  >= 60000 && salary <= 69999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 1300'
            case salary >= 70000 && salary <= 79999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 1400'
            case salary >= 80000 && salary <= 89999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 1500'
            case salary >= 90000 && salary <= 99999:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 1600'
            case salary >= 100000:
            return document.getElementById("result").innerHTML = 'NHIF Deduction is Ksh. 1700'
            




    }}

    // NSSF contribution as per old rates due to ongoing litigation some employers continue to use the old rates.
function nssf(){
    let salary = parseInt(document.getElementById("input").value)
    if(salary>=1){
        document.getElementById("result").innerHTML = 'your NSSF Deduction is Ksh. 400'
    }}


   //calculation of nhif  
let nhif =(passValue)=>{
    let salary = parseInt(document.getElementById("input").value)
    
        switch (true) {
        
        case salary<5999:
            return document.getElementById("result").innerHTML = parseFloat(150 ).toFixed(2)
        case salary >= 6000 && salary <= 7999:
            return document.getElementById("result").innerHTML = parseFloat(300 ).toFixed(2)
        case salary >= 8000 && salary <= 11999:
            return document.getElementById("result").innerHTML = parseFloat(400 ).toFixed(2)
        case salary >= 12000 && salary <= 14999:
            return document.getElementById("result").innerHTML = parseFloat(500 ).toFixed(2)
        case salary >= 15000 && salary <= 19999:
            return document.getElementById("result").innerHTML = parseFloat(600).toFixed(2)
        case salary >= 20000 && salary <= 24999:
            return document.getElementById("result").innerHTML = parseFloat(750 ).toFixed(2)
        case salary >= 25000 && salary <= 29999:
            return document.getElementById("result").innerHTML = parseFloat(850 ).toFixed(2)
        case salary >= 30000 && salary <= 34999:
            return document.getElementById("result").innerHTML = parseFloat(900 ).toFixed(2)
        case salary >= 35000 && salary <= 39999:
            return document.getElementById("result").innerHTML = parseFloat(950 ).toFixed(2)
        case salary >= 40000 && salary <= 44999:
            return document.getElementById("result").innerHTML = parseFloat(1000 ).toFixed(2)
        case salary >= 45000 && salary <= 49999:
            return document.getElementById("result").innerHTML = parseFloat(1100 ).toFixed(2)
        case salary >= 50000 && salary <=  59999:
            return document.getElementById("result").innerHTML = parseFloat(1200 ).toFixed(2)
        case salary >= 60000 && salary <= 69999:
            return document.getElementById("result").innerHTML = parseFloat(1300).toFixed(2)
        case salary >= 70000 && salary <= 79999:
            return document.getElementById("result").innerHTML = parseFloat(1400).toFixed(2)
        case salary >= 80000 && salary <= 89999:
            return document.getElementById("result").innerHTML = parseFloat(1500).toFixed(2)
        case salary >= 90000 && salary <= 99999:
            return document.getElementById("result").innerHTML = parseFloat(1600 ).toFixed(2)
        case salary >= 100000:
            return document.getElementById("result").innerHTML = parseFloat(1700).toFixed(2)
    }
    return passValue
}

// calculates the total deduction and return amount remain.
function totalDed (){
    // let salary = parseInt(document.getElementById("input").value)
    const deduc = parseInt(paye()) +parseInt(nhif())  + 400
    document.getElementById("result").innerHTML = (deduc)
}

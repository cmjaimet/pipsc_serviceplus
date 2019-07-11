// All javascript functions goes here
// function CurrencyFormat(val){
//   //remove commas
//   retVal = val ? parseFloat(val.replace(/,/g, '')) : 0;

//   //apply formatting
//   return retVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
function GetQuote(){
    var e = document.getElementById("Gender");
    console.log(e.options[e.selectedIndex].value)
    var gender = e.options[e.selectedIndex].value

    var e = document.getElementById("age");
    console.log(e.options[e.selectedIndex].value)
    var age = e.options[e.selectedIndex].value

    var e = document.getElementById("smoking_habit");
    console.log(e.options[e.selectedIndex].value)
    var smoking = e.options[e.selectedIndex].value

    var e = document.getElementById("coverage_amount");
    console.log(e.value);
    var coverage_amount = e.options[e.selectedIndex].value
    var x = coverage_amount/50000
    // var x = Number(e.value.replace(/\,/g,''))/50000
    
        if(age>0 && age<30)
        {
            if(gender == 'male')
            {
                if(smoking == 'true'){
                    var monthly_premium = x*2.81;
                    document.getElementById("monthly_premium").value = monthly_premium;
                } else {
                    var monthly_premium = x*2.39;
                    document.getElementById("monthly_premium").value = monthly_premium;
                }
            } else{
                if(smoking == 'true'){
                    var monthly_premium = x*1.74;
                    document.getElementById("monthly_premium").value = monthly_premium;
                } else {
                    var monthly_premium = x*1.49;
                    document.getElementById("monthly_premium").value = monthly_premium;
                }
            }
        } else if(age>=30 && age <=34)
            {
                if(gender == 'male')
                {
                    if(smoking == 'true'){
                        var monthly_premium = x*2.81;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*2.39;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = x*1.93;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*1.64;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else if(age>=35 && age<=39)
            {
                if(gender == 'male')
                {
                    if(smoking == 'true'){
                        var monthly_premium = x*3.65;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*3.11;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = x*2.25;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*1.91;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else if(age>=40 && age<=44)
            {
                if(gender == 'male')
                {
                    if(smoking == 'true'){
                        var monthly_premium = x*5.23;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*4.43;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = x*2.90;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*2.46;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else if(age>=45 && age<=49)
            {
                if(gender == 'male')
                {
                    if(smoking == 'true'){
                        var monthly_premium = x*8.86;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*7.54;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = x*4.81;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*4.10;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else if(age>=50 && age<=54)
            {
                if(gender == 'male')
                {
                    if(smoking == 'true'){
                        var monthly_premium = x*14.57;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*12.39;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = x*8.04;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*6.83;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else if(age>=55 && age<=59)
            {
                if(gender == 'male')
                {
                    if(smoking == 'true'){
                        var monthly_premium = x*22.74;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*19.34;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = x*13.13;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*11.15;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else if(age>=60 && age<=64)
            {
                if(gender == 'male')
                {
                    if(smoking == 'true'){
                        var monthly_premium = x*35.34;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*30.03;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = x*18.21;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*15.48;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else {
            if(gender == 'male')
                {
                    if(smoking == 'true'){
                        var monthly_premium = x*47.92;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*40.74;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = x*27.57;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = x*23.44;
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        }


}
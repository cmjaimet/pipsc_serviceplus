// All javascript functions goes here

function coverage_amount_change(){
    var age = document.getElementById("age").options[document.getElementById("age").selectedIndex].value
    var selectobject =  document.getElementById("coverage_amount") 
    if(age >= 65){
        for(var i=selectobject.length -1; i>=0; i--){
            if (selectobject.options[i].value == '200000' || selectobject.options[i].value == '250000' || selectobject.options[i].value == '300000' ||
                selectobject.options[i].value == '350000' || selectobject.options[i].value == '400000' || selectobject.options[i].value == '450000' || 
                selectobject.options[i].value == '500000' )
                selectobject.remove(i);
                
        }
        document.getElementById("premium_text").style.display = 'block';
        
    } else {
        selectobject.options.length = 0;
            selectobject.options[0]= new Option('Select')
            selectobject.options[1] = new Option('$50,000',50000)
            selectobject.options[2] = new Option('$100,000',100000)
            selectobject.options[3] = new Option('$150,000',150000)
            selectobject.options[4] = new Option('$200,000',200000)
            selectobject.options[5] = new Option('$250,000',250000)
            selectobject.options[6] = new Option('$300,000',300000)
            selectobject.options[7] = new Option('$350,000',350000)
            selectobject.options[8] = new Option('$400,000',400000)
            selectobject.options[9] = new Option('$450,000',450000)
            selectobject.options[10] = new Option('$500,000',500000)
            
            document.getElementById("premium_text").style.display = 'none';       
        
    }
}
function GetQuote(){
    var e = document.getElementById("Gender");
    var gender = e.options[e.selectedIndex].value

    var e = document.getElementById("age");
    var age = e.options[e.selectedIndex].value

    var e = document.getElementById("smoking_habit");
    var smoking = e.options[e.selectedIndex].value

    var e = document.getElementById("coverage_amount");
    var result =  e.options[e.selectedIndex].text;
    document.getElementById("coverage_amount_p").innerHTML =  result;
    var coverage_amount = e.options[e.selectedIndex].value
    var x = coverage_amount/50000
    
        if(age>0 && age<30)
        {
            if(gender == 'male' || gender == 'trans_man' || gender == 'two_spirit' || gender == 'non_binary')
            {
                if(smoking == 'true'){
                    var monthly_premium =  (x*2.81).toFixed(2);
                    document.getElementById("monthly_premium").value = monthly_premium;
                } else {
                    var monthly_premium = (x*2.39).toFixed(2);
                    document.getElementById("monthly_premium").value = monthly_premium;
                }
            } else{
                if(smoking == 'true'){
                    var monthly_premium = (x*1.74).toFixed(2);
                    document.getElementById("monthly_premium").value = monthly_premium;
                } else {
                    var monthly_premium = (x*1.49).toFixed(2);
                    document.getElementById("monthly_premium").value = monthly_premium;
                }
            }
        } else if(age>=30 && age <=34)
            {
                if(gender == 'male' || gender == 'trans_man' || gender == 'two_spirit' || gender == 'non_binary')
                {
                    if(smoking == 'true'){
                        var monthly_premium = (x*2.81).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*2.39).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = (x*1.93).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*1.64).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else if(age>=35 && age<=39)
            {
                if(gender == 'male' || gender == 'trans_man' || gender == 'two_spirit' || gender == 'non_binary')
                {
                    if(smoking == 'true'){
                        var monthly_premium = (x*3.65).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*3.11).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = (x*2.25).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*1.91).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else if(age>=40 && age<=44)
            {
                if(gender == 'male' || gender == 'trans_man' || gender == 'two_spirit' || gender == 'non_binary')
                {
                    if(smoking == 'true'){
                        var monthly_premium = (x*5.23).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*4.43).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = (x*2.90).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*2.46).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else if(age>=45 && age<=49)
            {
                if(gender == 'male' || gender == 'trans_man' || gender == 'two_spirit' || gender == 'non_binary')
                {
                    if(smoking == 'true'){
                        var monthly_premium = (x*8.86).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*7.54).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = (x*4.81).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*4.10).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else if(age>=50 && age<=54)
            {
                if(gender == 'male' || gender == 'trans_man' || gender == 'two_spirit' || gender == 'non_binary')
                {
                    if(smoking == 'true'){
                        var monthly_premium = (x*14.57).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*12.39).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = (x*8.04).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*6.83).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else if(age>=55 && age<=59)
            {
                if(gender == 'male' || gender == 'trans_man' || gender == 'two_spirit' || gender == 'non_binary')
                {
                    if(smoking == 'true'){
                        var monthly_premium = (x*22.74).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*19.34).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = (x*13.13).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*11.15).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else if(age>=60 && age<=64)
            {
                if(gender == 'male' || gender == 'trans_man' || gender == 'two_spirit' || gender == 'non_binary')
                {
                    if(smoking == 'true'){
                        var monthly_premium = (x*35.34).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*30.03).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = (x*18.21).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*15.48).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        } else {
            if(gender == 'male' || gender == 'trans_man' || gender == 'two_spirit' || gender == 'non_binary')
                {
                    if(smoking == 'true'){
                        var monthly_premium = (x*47.92).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*40.74).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                } else{
                    if(smoking == 'true'){
                        var monthly_premium = (x*27.57).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    } else {
                        var monthly_premium = (x*23.44).toFixed(2);
                        document.getElementById("monthly_premium").value = monthly_premium;
                    }
                }
        }


}
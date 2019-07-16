// All javascript functions goes here

/**
 * Updates the coverage_amount drop down to reflect the amount that is available for all ages
 */
function coverage_amount_change() {
    var Age = document.getElementById("age").options[document.getElementById("age").selectedIndex].value
    var CoverageAmountObject = document.getElementById("coverage_amount")
    if (Age >= 65) {
        for (var i = CoverageAmountObject.length - 1; i >= 0; i--) {
            if (CoverageAmountObject.options[i].value == '200000' || CoverageAmountObject.options[i].value == '250000' || CoverageAmountObject.options[i].value == '300000' ||
                CoverageAmountObject.options[i].value == '350000' || CoverageAmountObject.options[i].value == '400000' || CoverageAmountObject.options[i].value == '450000' ||
                CoverageAmountObject.options[i].value == '500000')
                CoverageAmountObject.remove(i);

        }
        document.getElementById("premium_text").style.display = 'block';

    } else {
        CoverageAmountObject.options.length = 0;
        CoverageAmountObject.options[0] = new Option('Select', "")
        CoverageAmountObject.options[0].disabled =  true;
        CoverageAmountObject.options[1] = new Option('$50,000', 50000)
        CoverageAmountObject.options[2] = new Option('$100,000', 100000)
        CoverageAmountObject.options[3] = new Option('$150,000', 150000)
        CoverageAmountObject.options[4] = new Option('$200,000', 200000)
        CoverageAmountObject.options[5] = new Option('$250,000', 250000)
        CoverageAmountObject.options[6] = new Option('$300,000', 300000)
        CoverageAmountObject.options[7] = new Option('$350,000', 350000)
        CoverageAmountObject.options[8] = new Option('$400,000', 400000)
        CoverageAmountObject.options[9] = new Option('$450,000', 450000)
        CoverageAmountObject.options[10] = new Option('$500,000', 500000)

        document.getElementById("premium_text").style.display = 'none';

    }
}
/**
 * calculates the monthly premium basing on the input provided by user
 */
function GetQuote() {
    var e = document.getElementById("Gender");
    var Gender = e.options[e.selectedIndex].value

    var e = document.getElementById("age");
    var Age = e.options[e.selectedIndex].value

    var e = document.getElementById("coverage_amount");
    var result = e.options[e.selectedIndex].text;
    document.getElementById("coverage_amount_p").innerHTML = result;
    var coverage_amount = e.options[e.selectedIndex].value
    var x = coverage_amount / 50000

    if (Age > 0 && Age < 30) {
        if (Gender == 'male_non_smoker') {
            var monthly_premium = (x * 2.39).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'male_smoker') {
            var monthly_premium = (x * 2.81).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'female_non_smoker') {
            var monthly_premium = (x * 1.49).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else {
            var monthly_premium = (x * 1.74).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        }
    } else if (Age >= 30 && Age <= 34) {
        if (Gender == 'male_non_smoker') {
            var monthly_premium = (x * 2.39).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'male_smoker') {
            var monthly_premium = (x * 2.81).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'female_non_smoker') {
            var monthly_premium = (x * 1.64).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else {
            var monthly_premium = (x * 1.93).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        }
    } else if (Age >= 35 && Age <= 39) {
        if (Gender == 'male_non_smoker') {
            var monthly_premium = (x * 3.11).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'male_smoker') {
            var monthly_premium = (x * 3.65).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'female_non_smoker') {
            var monthly_premium = (x * 1.91).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else {
            var monthly_premium = (x * 2.25).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        }
    } else if (Age >= 40 && Age <= 44) {
        if (Gender == 'male_non_smoker') {
            var monthly_premium = (x * 4.43).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'male_smoker') {
            var monthly_premium = (x * 5.23).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'female_non_smoker') {
            var monthly_premium = (x * 2.46).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else {
            var monthly_premium = (x * 2.90).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        }
    } else if (Age >= 45 && Age <= 49) {
        if (Gender == 'male_non_smoker') {
            var monthly_premium = (x * 7.54).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'male_smoker') {
            var monthly_premium = (x * 8.86).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'female_non_smoker') {
            var monthly_premium = (x * 4.10).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else {
            var monthly_premium = (x * 4.81).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        }
    } else if (Age >= 50 && Age <= 54) {
        if (Gender == 'male_non_smoker') {
            var monthly_premium = (x * 12.39).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'male_smoker') {
            var monthly_premium = (x * 14.57).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'female_non_smoker') {
            var monthly_premium = (x * 6.83).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else {
            var monthly_premium = (x * 8.04).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        }
    } else if (Age >= 55 && Age <= 59) {
        if (Gender == 'male_non_smoker') {
            var monthly_premium = (x * 19.34).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'male_smoker') {
            var monthly_premium = (x * 22.74).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'female_non_smoker') {
            var monthly_premium = (x * 11.15).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else {
            var monthly_premium = (x * 13.13).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        }
    } else if (Age >= 60 && Age <= 64) {
        if (Gender == 'male_non_smoker') {
            var monthly_premium = (x * 30.03).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'male_smoker') {
            var monthly_premium = (x * 35.34).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'female_non_smoker') {
            var monthly_premium = (x * 15.48).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else {
            var monthly_premium = (x * 18.21).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        }
    } else {
        if (Gender == 'male_non_smoker') {
            var monthly_premium = (x * 40.74).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'male_smoker') {
            var monthly_premium = (x * 47.92).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else if (Gender == 'female_non_smoker') {
            var monthly_premium = (x * 23.44).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        } else {
            var monthly_premium = (x * 27.57).toFixed(2);
            document.getElementById("monthly_premium").value = monthly_premium;
        }
    }


}
/**
 * function that checks whether all the dropdown has a selected value and enbales/disables the "See my monthly premium" button
 */
function checkform() {
    var f = document.forms["insurance_quote"].elements;
    var cansubmit = true;

    for (var i = 0; i < f.length - 1; i++) {
        if (f[i].value.length == 0)
            cansubmit = false;
    }

    document.getElementById('submitbutton').disabled = !cansubmit;
}
window.onload = checkform;
// Function for working out the interest to be received from user inputs
function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Input a positive quantity in the amount ");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit \<b\>"+principal+"\<\/b\>,\<br\>at an interest rate of \<b\>"+rate+"%\<\/b\>\<br\>You will receive an amount of \<b\>"+interest+"\<\/b\>,\<br\>in the year \<b\>"+year+"\<\/b\>\<br\>"
}
        
// Function for updating interest range value
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
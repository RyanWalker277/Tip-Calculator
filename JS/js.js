
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function () {
    tipcalc();

};


function tipcalc() {
    var amt = document.getElementById("bill").value;
    var bill_typevar = document.getElementById("bill_type").value;
    var peepsvar = document.getElementById("peeps").value;
    var tipamt = 0;

    tipamt = (amt * bill_typevar) / peepsvar;
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("each").style.display = "inline";
    document.getElementById("tipvalue").innerHTML = tipamt;

}

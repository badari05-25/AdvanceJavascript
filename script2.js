const tip = document.getElementById("range");
const tit = document.querySelector(".ran");

const tipamt = document.querySelector(".tipamt");

const amt = document.querySelector(".bill");


tip.addEventListener("change", function(e) {
  let inp = document.getElementById("num").value;
  let tipam = e.target.value;
  console.log(inp);
  if (inp === "") {
    alert("Amount Required");
  } else {
    tit.textContent = `${tipam}%`;

    // display amount after added
    amt.textContent = tipCalc(parseFloat(inp), parseFloat(tipam));
    let tipamount = amt.textContent;
    console.log(tipamount);

    // display only rate of intrest add to amount
    tipamt.textContent = totaltip(parseFloat(inp), parseFloat(tipamount));
  }
})

function tipCalc(amt, tip) {
  let tipc = (amt * tip / 100);
  return tipc + amt;
}

function totaltip(inp, tipamount) {
  let tipcalc = tipamount - inp;
  return parseFloat(tipcalc).toFixed(2);
}




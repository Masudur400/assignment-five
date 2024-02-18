
const allBtn = document.querySelectorAll('#btn');
let count = 0;
for (const btn of allBtn) {
  btn.addEventListener('click', function (e) {
    btn.style.backgroundColor = 'lightGreen'; 
    count = count + 1;


    //  document.getElementById('total-cost').innerText = convertedTotalCost + cost;

    sitLeft ()
    totalCost();
    grandTotalCost();
    setInnerText('sit-count', count);
  })
}


function totalCost() {
  const totalCost = document.getElementById('total-cost').innerText;
  const convertedTotalCost = parseInt(totalCost);
  const cost = convertedTotalCost + 550; 
  setInnerText('total-cost', cost)
}

function grandTotalCost() {
  const totalCost = document.getElementById('total-cost').innerText; 
  setInnerText('grand-total', totalCost)
}
 
function sitLeft (){
  const sit = document.getElementById('sit-left').innerText;
   const convertedSit = parseInt(sit);
   sum = convertedSit - 1;
   setInnerText('sit-left',sum);
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}




function next() {
  const homeSection = document.getElementById('header-section');
  homeSection.classList.add('hidden');

  const successSection = document.getElementById('success');
  successSection.classList.remove('hidden');
}


const allBtn = document.querySelectorAll('#btn');
let count = 0;
for (const btn of allBtn) {
  btn.addEventListener('click', function (e) {
    btn.style.backgroundColor = 'lightGreen';
    count = count + 1;

    const sitName = btn.innerText;
    const appendContainer = document.getElementById('append-container');
    const div = document.createElement('div')
    const p = document.createElement('p');
    p.innerText = sitName;
    const p2 = document.createElement('p');
    p2.innerText = 'Economy';
    const p3 = document.createElement('p');
    p3.innerText = 500;

    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    appendContainer.appendChild(div);

    sitLeft()
    totalCost();
    grandTotalCost();
    setInnerText('sit-count', count);
  })
}

function appendChild() {

}


function totalCost() {
  const totalCost = document.getElementById('total-cost').innerText;
  const convertedTotalCost = parseInt(totalCost);
  const cost = convertedTotalCost + 550;
  setInnerText('total-cost', cost)
}

function grandTotalCost() {
  const totalCost = document.getElementById('total-cost').innerText;
  document.getElementById('cupon').addEventListener('keyup', function (e) {
    const text = e.target.value;
    const apply = document.getElementById('cupon-btn');
    if (text === 'NEW 15') {
      setInnerText('grand-total', totalCost - (totalCost * .15));
      apply.removeAttribute('disabled');
    }
    else if (text === 'Couple 20') {
      setInnerText('grand-total', totalCost - (totalCost * .20));
      apply.removeAttribute('disabled');
    }
  })
  setInnerText('grand-total', totalCost)
}

document.getElementById('cupon-btn').addEventListener('click', function (e) {
  document.getElementById('cupon-btn').parentNode.classList.add('hidden');
})


function sitLeft() {
  const sit = document.getElementById('sit-left').innerText;
  const convertedSit = parseInt(sit);
  sum = convertedSit - 1;
  setInnerText('sit-left', sum);
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


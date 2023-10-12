function draw() {
  // const quantityNumbers = Number(document.querySelector('#quantity-numbers').value)
  const minNumber = Number(document.querySelector('#min-number').value)
  const maxNumber = Number(document.querySelector('#max-number').value)
  console.log(maxNumber, minNumber)
  const drawnNumber = Math.floor(Math.random() * maxNumber + minNumber)

  let element = document.createElement('div')
  element.classList.add('result-number')
  element.innerText = drawnNumber

  const resultNumber = document.getElementById('result-numbers')
  resultNumber.innerHTML = ''


  resultNumber.appendChild(element)
}

async function draw() {
  const minNumber = Number(document.querySelector('#min-number').value)
  const maxNumber = Number(document.querySelector('#max-number').value)

  for (let i = 0; i < 50; i++) {
    const resultNumber = document.getElementById('result-numbers')
    resultNumber.innerHTML = ''

    const drawnNumber = Math.floor(Math.random() * maxNumber + minNumber)

    let element = document.createElement('div')
    element.classList.add('result-number')
    element.innerText = drawnNumber

    resultNumber.appendChild(element)

    await wait(50)
  }
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time)
  })
}

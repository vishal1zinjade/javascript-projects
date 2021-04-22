let count = 0

const increase = document.querySelector('.increase')
const reset = document.querySelector('.reset')
const decrease = document.querySelector('.decrease')

const counter = document.querySelector('#value')
increase.addEventListener('click', function () {
  count++
  counter.textContent = count
  if (count > 0) {
    counter.style.color = 'green'
  }
})

reset.addEventListener('click', function () {
  count = 0
  counter.textContent = count
  counter.style.color = 'black'
})

decrease.addEventListener('click', function () {
  count--
  counter.textContent = count
  if (count < 0) {
    counter.style.color = 'red'
  }
})

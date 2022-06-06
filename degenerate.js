let rad1 = document.getElementById('che')
let rad2 = document.getElementById('inp')
let ch1 = document.getElementById('ch1')
let ch2 = document.getElementById('ch2')
rad1.onchange = function () {
  if (rad1.checked) {
    ch2.setAttribute('hidden', 'hidden')
    ch1.removeAttribute('hidden')
  } 
}
rad2.onchange = function () {
  if (rad2.checked) {
    ch1.setAttribute('hidden', 'hidden')
    ch2.removeAttribute('hidden')
    
  } 
}
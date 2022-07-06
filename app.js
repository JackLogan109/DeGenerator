import getString from './modules/randomString.js'

document.getElementById('che').onchange = function () {
  if (rdocument.getElementById('che').checked) {
    document.getElementById('ch2').setAttribute('hidden', 'hidden')
    document.getElementById('ch1').removeAttribute('hidden')
  } 
}

document.getElementById('inp').onchange = function () {
  if (document.getElementById('inp').checked) {
    document.getElementById('ch1').setAttribute('hidden', 'hidden')
    document.getElementById('ch2').removeAttribute('hidden')
    
  } 
}
document.getElementById('11').onclick = function () {
  document.getElementById('12').textContent = getString()
}
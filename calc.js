import daysCalk from "./modules/date.js"
import dateCalk from "./modules/dateCalk.js"

document.getElementById('button1').onclick = function() {
    let x = daysCalk(document.getElementById('fDate').value, document.getElementById('lDate').value) - 2
    if (document.getElementById('fCheck').checked) {
        x = x + 1
    }
    if (document.getElementById('lCheck').checked) {
        x = x + 1
    }
    document.getElementById('days').value = x
}
document.getElementById('button2').onclick = function() {
    let x = Number(document.getElementById('daysCount').value) + 1
    if (document.getElementById('oCheck').checked) {
        x = x - 1
    }
    document.getElementById('eDate').value = dateCalk(document.getElementById('oDate').value, x)
}
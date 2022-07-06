import dateCalk from "./dateCalk.js"
let data = document.getElementById('date')
let cost = document.getElementById('cost')

function makeArray(daysCount) {
    let array = []
    let x = Number(cost.value)
    let y = ''
    let p = 0

    for (let n = 0 ;n < Number(daysCount);n++) {
        array[n] = []
        array[n].push(dateCalk(data.value, n))
        if (document.getElementById('period' + p).value == 'perDay') {
            x = x + Number(cost.value) / 100 * Number(document.getElementById('comAmount' + p).value)
            y = 'В день'
            array[n].push(`Задолженность: ${x.toFixed(2)} р`)
        } else if(document.getElementById('period' + p).value == 'perYear') {
            x = x + Number(cost.value) / 100 * (Number(document.getElementById('comAmount' + p).value) / 365)
            y = 'В год'
            array[n].push(`Задолженность: ${x.toFixed(2)} р`)
        } else {
            if (n + 1 == document.getElementById('comFrom' + p).value) {
                x = x + Number(cost.value) / 100 * Number(document.getElementById('comAmount' + p).value)
                y = 'За период'
                array[n].push(`Задолженность: ${x.toFixed(2)} р`)
            } else {
                x = x
                array[n].push(`Задолженность: ${x.toFixed(2)} р`)
                y = 'За период'
            }
        }
        array[n].push(`Из расчёта ${document.getElementById('comAmount' + p).value} % ${y}`)
        if ( n + 1 < document.getElementById('comFrom3').value && n + 1 == document.getElementById('comFor' + p).value ) {
            p++
        }  
    
    }

    return array
}
export default makeArray
let massiv = ['qwertyuiopasdfghjklzxcvbnm', 'QWERTYUIOPASDFGHJKLZXCVBNM', 'йцукенгшщзхъфывапролджэячсмитьбюё', 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ', '1234567890', '!@#$%^&*(){}[]:;"?/|><.,~`', '   ']

function getString() {
    let arr = []
    let str = ''
    let res = ''
    let dis = RegExp('['+document.getElementById('8').value+']', 'g')
    if (document.getElementById('che').checked) {
        for(let x = 1; x <= 7; x++) {
            let cx = 'c' + x

            if (document.getElementById(x).checked){
                arr.push(massiv[x-1])
            }
        }
        str = arr.join('').replace(dis,'')

    } else if (document.getElementById('inp').checked) {
    str = document.getElementById('9').value
    }
    for (let i = 0; i < document.getElementById('10').value; i++) {
        res += str[Math.floor(Math.random() * str.length - 1) + 1] 
    }
    return res
}

export default getString

// Вотрой вариант

// let str = ''
// let c1 = 'qwertyuiopasdfghjklzxcvbnm'
// let c2 = 'QWERTYUIOPASDFGHJKLZXCVBNM'
// let c3 = 'йцукенгшщзхъфывапролджэячсмитьбюё'
// let c4 = 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ'
// let c5 = '1234567890'
// let c6 = '!@#$%^&*(){}[]:;"?/|><.,~`'
// let c7 = '   '
// document.getElementById('11').onclick = function () {
//   str = ''
//   let res = ''
//   let dis = RegExp('['+document.getElementById('8').value+']', 'g')
//   if (document.getElementById('che').checked){
//     for(let x = 1; x <= 7; x++) {
//       let cx = 'c' + x
//       if (document.getElementById(x).checked) {
//           str = str + eval(cx)
//       }
//     }
//     str = str.replace(dis, '')
//   } else if(document.getElementById('inp').checked) {
//     str = document.getElementById('9').value
//   }
//   for (let i = 0; i < document.getElementById('10').value; i++) {
//      res += str[Math.floor(Math.random() * str.length - 1) + 1] 
//   }
//     document.getElementById('12').textContent = res
// }

function makeTable(array, daysCount) {
    let arr = array
    let div1 = document.getElementById('div1')
    let table = document.createElement('table')
    table.className = 'table'

    for(let i = 0 ;i< Number(daysCount);i++) {
        let tr = document.createElement('tr')       //срока в таблице
        tr.className = 'stroka'
        for(let n = 0 ; n < 3; n++){
            let td1 = document.createElement('td')      //столбец в таблице
            let text1 = document.createTextNode(arr[i][n])   //текст в ячейке

            td1.appendChild(text1)                      
            tr.appendChild(td1).className = 'kletka'
            table.appendChild(tr) 
        }
    }
    div1.appendChild(table)//.className = 'table'
}

export default makeTable
import makeTable from "./modules/table.js"
import makeArray from "./modules/makeArray.js"
import daysCalk from './modules/date.js'

document.getElementById('button').onclick = function() {
    if (document.getElementById('dni').checked){
        makeTable(makeArray(document.getElementById('days').value), document.getElementById('days').value)    
    } else if (document.getElementById('desData').checked) {
        let calk = daysCalk(document.getElementById('date').value, document.getElementById('desired').value)
        makeTable(makeArray(calk), calk)
    }
  }
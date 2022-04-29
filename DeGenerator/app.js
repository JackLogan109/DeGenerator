let rad1 = document.getElementById('che')
let rad2 = document.getElementById('inp')
let c1 = document.getElementById('ch1')
let c2 = document.getElementById('ch2')
rad1.onchange = function () {
  if (rad1.checked) {
    c2.setAttribute('hidden', 'hidden')
    c1.removeAttribute('hidden')
  } 
};
rad2.onchange = function () {
  if (rad2.checked) {
    c1.setAttribute('hidden', 'hidden')
    c2.removeAttribute('hidden')
    
  } 
};

let chb1 = document.getElementById('one')
let abc = ''
chb1.onchange = function () {
    if (chb1.checked) {
      abc = 'qwertyuiopasdfghjklzxcvbnm'
    } else {
      abc = ''
    }
  };
  let chb2 = document.getElementById('two')
let ABC = ''
chb2.onchange = function () {
    if (chb2.checked) {
      ABC = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    } else {
      ABC = ''
    }
  };
  let chb3 = document.getElementById('three')
let abv = ''
chb3.onchange = function () {
    if (chb3.checked) {
      abv = 'йцукенгшщзхъфывапролджэячсмитьбю'
    } else {
      abv = ''
    }
  };
  let chb4 = document.getElementById('four')
let ABV = ''
chb4.onchange = function () {
    if (chb4.checked) {
      ABV = 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ'
    } else {
      ABV = ''
    }
  };
  let chb5 = document.getElementById('five')
let a123 = ''
chb5.onchange = function () {
    if (chb5.checked) {
        a123 = '1234567890'
    } else {
        a123 = ''
    }
  };
  let chb6 = document.getElementById('six')
let a__ = ''
chb6.onchange = function () {
    if (chb6.checked) {
        a__ = '~`!@#$%^&*()_+-=;".?,<>/'
    } else {
        a__ = ''
    }
  };
  let chb7 = document.getElementById('twelve')
let ___ = ''
chb7.onchange = function () {
    if (chb7.checked) {
        ___ = '   '
    } else {
        ___ = ''
    }
  };
let form1 = document.getElementById('seven')
  let add = ''
  form1.oninput = function() {
      add = form1.value
  }
  let form2 = document.getElementById('eight')
  let dis = ''
  form2.oninput = function() {
      dis = form2.value
  }
let form3 = document.getElementById('nine')
  let count = ''
  form3.oninput = function() {
      count = form3.value
  }  
  
  
  
let but = document.getElementById('ten')
but.onclick = function() {
    let res = '';
    let str = abc + ABC + abv + ABV + a123 + a__ + ___
    let des = new RegExp(dis)
    str = str.replace(des, '')
    if(rad2.checked) {
      str = add
    };
    for (let i = 0; i < count; i++) { res += str[ getRandom(0,str.length) ] };

function getRandom(min, max) {
    return Math.floor(Math.random() * max - min) + min
}
let result = document.getElementById('elleven')
result.textContent = res
    console.log(str)
    console.log(des)
    console.log(res)
    
    
}
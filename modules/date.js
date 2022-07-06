function daysCalk(date1, date2) {
    let firstDate = new Date(date2.split('.').reverse().join(','))
    let secondDate = new Date(date1.split('.').reverse().join(','))
    return ((firstDate - secondDate) / (1000 * 60 * 60 * 24)) + 1
}

export default daysCalk
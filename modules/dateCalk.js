function dateCalk(data, x = 0) { //функция берёт строку с датой в привычном виде, и кол-во дней, по умолчанию равное нулю
    let a = data.split('.').reverse().join(',') // переделываем дату в машиночитаемую строку
    let myDate1 = new Date(a) // превращаем строку в дату(реальную)
    myDate1.setDate(myDate1.getDate() + x ) // прибавляем к дате нужное кол-во дней
    return `${myDate1.getDate() < 10 ? '0' + myDate1.getDate() : myDate1.getDate()}.${myDate1.getMonth() + 1 < 10 ? '0' + (myDate1.getMonth() + 1) : myDate1.getMonth()+1}.${myDate1.getFullYear()}` // Возвращаем дату в человекочитаемом виде
}

export default dateCalk
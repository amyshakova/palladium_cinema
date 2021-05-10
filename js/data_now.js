const data = document.querySelectorAll('.data')
const MONTHS = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
const now = new Date();
let num = 0;
let num1 = 0;
let dd = now.getDate();
let mm = now.getMonth();
let d,
    ds,
    m;
data.forEach((value) =>{
    d = +dd + num;
    m = MONTHS [mm].toUpperCase();

    ds = days [+now.getDay() + num1]

    value.textContent = `${d}  ${m}, ${ds}`;
    num++
    num1++
});

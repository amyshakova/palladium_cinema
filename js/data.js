const data = document.querySelectorAll('.data'),
      soonData = document.querySelectorAll('.text__title');

const now = new Date();
const nowSoon = +(now.getDate() + 3);

const options = {
    day: 'numeric',
    month: 'long'
}
const option = {
    month: 'long'
}
data.forEach((value) =>{
    value.textContent = `Cьогоднi, ${new Intl.DateTimeFormat('uk', options).format(now)}`
});

// data.textContent = `Cьогоднi, ${new Intl.DateTimeFormat('uk', options).format(now)}`;
soonData.forEach((value) => {
    value.textContent = `у кіно з ${nowSoon} ${new Intl.DateTimeFormat('uk', option).format()}`
});

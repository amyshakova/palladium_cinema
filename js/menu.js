const burger = document.querySelector('.main__sidebar-burger'),
    span = burger.querySelectorAll('span'),
    spanHide = document.querySelector('.main__hide '),
    sidebar = document.querySelector('.main__sidebar'),
    list = document.querySelector('.menu');

burger.addEventListener('click', (e) => {
    e.preventDefault();

    sidebar.classList.toggle('active_bar');
    list.classList.toggle('hide');

    span.forEach((value) => {
        value.classList.toggle('hide');
    });

    spanHide.classList.toggle('hide');
})

spanHide.addEventListener('click', () => {
    sidebar.classList.toggle('active_bar');
    list.classList.toggle('hide');

    span.forEach((value) => {
        value.classList.toggle('hide');
    });

    spanHide.classList.toggle('hide');
})
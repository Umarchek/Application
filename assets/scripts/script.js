window.addEventListener('load', function (e) {
    const resurs_1 = document.querySelector('.resurs_1')
    const resurs_2 = document.querySelector('.resurs_2')
    const resurs_3 = document.querySelector('.resurs_3')
    const resurs_4 = document.querySelector('.resurs_4')
    const resurs_5 = document.querySelector('.resurs_5')
    const resurs_6 = document.querySelector('.resurs_6')
    const resurs_7 = document.querySelector('.resurs_7')
    const drugoe = document.querySelector('#drugoe')
    const resurs_buttons = document.querySelector('.resurs-buttons')


    const resurs_input = document.querySelector('.resurs-input')
    const arr = new Array(resurs_1, resurs_2, resurs_3, resurs_4, resurs_5, resurs_6, resurs_7)
    arr.forEach(btn => {
        btn.addEventListener('click', function () {
            arr.forEach((elem) => {
                elem.classList.remove('button-active')
                resurs_buttons.style.marginBottom = '50px'
            })
            this.classList.add('button-active')
            if (drugoe.classList.contains("button-active")) {
                resurs_input.style.display = 'block'
                resurs_buttons.style.marginBottom = '0px'
            } else {
                resurs_input.style.display = 'none'
                resurs_buttons.style.marginBottom = '150px'
            }
        })
    });

});


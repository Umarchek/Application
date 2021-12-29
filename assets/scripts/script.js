window.addEventListener('load', function(e) {
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
        btn.addEventListener('click', function() {
            arr.forEach((elem) => {
                elem.classList.remove('button-active')
                resurs_buttons.style.marginBottom = '0'
            })
            this.classList.add('button-active')
            if (drugoe.classList.contains("button-active")) {
                resurs_input.style.display = 'block'
                resurs_buttons.style.marginBottom = '0px'
            } else {
                resurs_input.style.display = 'none'
                resurs_buttons.style.marginBottom = '0'
            }
        })
    });


    const necessary_1 = document.querySelector('.necessary_1')
    const necessary_2 = document.querySelector('.necessary_2')
    const necessary_3 = document.querySelector('.necessary_3')
    const necessary_4 = document.querySelector('.necessary_4')
    const necessary_5 = document.querySelector('.necessary_5')
    const necessary_6 = document.querySelector('.necessary_6')
    const necessary_7 = document.querySelector('.necessary_7')
    const drugoenecessary = document.querySelector('#drugoenecessary')
    const necessary_buttons = document.querySelector('.necessary-buttons')

    const necessary_input = document.querySelector('.necessary-input')

    const arrnecessary = new Array(necessary_1, necessary_2, necessary_3, necessary_4, necessary_5, necessary_6, necessary_7)
    arrnecessary.forEach(btnnecessary => {
        btnnecessary.addEventListener('click', function() {
            arrnecessary.forEach((elemnecessary) => {
                elemnecessary.classList.remove('button-active')
                necessary_buttons.style.marginBottom = '0'
            })
            this.classList.add('button-active')
            if (drugoenecessary.classList.contains("button-active")) {
                necessary_input.style.display = 'block'
                necessary_buttons.style.marginBottom = '0px'
            } else {
                necessary_input.style.display = 'none'
                necessary_buttons.style.marginBottom = '0'
            }
        })
    });


    const data_buttons = document.querySelectorAll('.data-button')
    const budget_1 = document.querySelector('.budget_1')
    const budget_2 = document.querySelector('.budget_2')
    const budget_3 = document.querySelector('.budget_3')
    const budget_4 = document.querySelector('.budget_4')
    const budget_5 = document.querySelector('.budget_5')
    const data_1 = document.querySelector('.data_1')
    const data_2 = document.querySelector('.data_2')
    const data_3 = document.querySelector('.data_3')

    const ar = new Array(budget_1, budget_2, budget_3, budget_4, budget_5, data_1, data_2, data_3)
    ar.forEach(ars => {
        ars.addEventListener('click', function() {
            ar.forEach((sad) => {
                sad.classList.remove('button-active')
            })
            this.classList.add('button-active')
        })
    });



    const changeMap = document.querySelector(".section-big-maps-buttons")
    const map = document.querySelector('.map')
    const logo = document.querySelector('.section-big-maps-logo')

    changeMap.addEventListener('click', function () {
        toggle()
    })
    function toggle() {
        map.classList.add("ChangedMap")
        logo.style.display = 'block';
        changeMap.style.display = 'none';
    }

    logo.addEventListener('click', function () {
        doggle()
    })
    function doggle() {
        map.classList.remove("ChangedMap")
        changeMap.style.display = 'block';
        logo.style.display = 'none';
    }

});

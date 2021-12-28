window.addEventListener('load', function (e) {
    const resurs_1 = document.querySelector('.resurs_1')
    const resurs_2 = document.querySelector('.resurs_2')
    const resurs_3 = document.querySelector('.resurs_3')
    const resurs_4 = document.querySelector('.resurs_4')
    const resurs_5 = document.querySelector('.resurs_5')
    const resurs_6 = document.querySelector('.resurs_6')
    const resurs_other = document.querySelector('.resurs_7')

    resurs_1.click(function () {
        if (resurs_1.classList.contains("button-active")) {
            resurs_1.classList.remove("button-active");
        } else {
            resurs_1.classList.add("button-active");
            resurs_2.classList.remove("button-active");
            resurs_3.classList.remove("button-active");
            resurs_4.classList.remove("button-active");
            resurs_5.classList.remove("button-active");
            resurs_6.classList.remove("button-active");
            resurs_other.classList.remove("button-active");
        }
    });
});


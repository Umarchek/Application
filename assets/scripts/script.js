window.addEventListener('load', function (e) {
    const arr = [...document.querySelectorAll('.budget-button'), ...document.querySelectorAll('.resurs-button')]
    for (var i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', function (event) {
            console.log('work');
        });
    }
    const necessary_input = document.querySelector('necessary-input')
    const resurs_input = document.querySelector('resurs-input')
});


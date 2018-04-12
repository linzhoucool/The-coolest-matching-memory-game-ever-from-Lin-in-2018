const deck = document.querySelector('.deck');
const openCards = document.getElementsByClassName('show');
var step = 0;
deck.addEventListener('click', function (event) {

    if (event.target.tagName === 'LI') {

        if (openCards.length < 2) {
            event.target.classList.add('open');
            event.target.classList.add('show');
            step++;
            document.getElementById('step').innerHTML = step;


            if (openCards.length === 2) {
                if (openCards[0].lastElementChild.className === openCards[1].lastElementChild.className) {
                    

                    while (openCards.length > 0) {
                        openCards[0].classList.add('match');
                        openCards[0].classList.remove('open');
                        openCards[0].classList.remove('show');
                    }
                } else {
                    setTimeout(function () {
                        while (openCards.length > 0) {
                            openCards[0].classList.remove('open');
                            openCards[0].classList.remove('show');
                        }
                    
                    }, 400);  
                   
                    }
                    
                }

            }

            if(document.getElementsByClassName('match').length == 16){
            setTimeout(function () {
               alert('congratulation!!!');
               re();
            },400);
        }
    }

});








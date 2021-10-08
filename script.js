let but1 = document.querySelector('.first');
let but2 = document.querySelector('.second');
let but3 = document.querySelector('.third');
let btnPop = document.querySelector('.btnPop');

let popup = document.querySelector('.popup');
let cls = document.querySelector('.popup__close');

let styleOfbut;

but1.onclick = popupOpen;
but2.onclick = popupOpen;
but3.onclick = popupOpen;

//popup----
let loanName = document.querySelector('.popup__text-theme');
let popTitle = document.querySelector('.popup__text-title');
let availableAmount = document.querySelector('.popup__text-amount');
let inputValue = document.querySelector('.inputPop');
//popup----
//main window-----
let invValue = document.querySelectorAll('.inv');
for (let i = 0; i < invValue.length; i++) {
    invValue[i].textContent = '';
}
//main window-----
let c;//iterator
let avAmo1 = 11959, avAmo2 = 31405, avAmo3 = 12359;
function popupOpen() {
    styleOfbut = this.classList;
    for (let item of styleOfbut) {
        if (item == 'first') {
            c = 1;
        } else if (item == 'second') {
            c = 2;
        } else if (item == 'third') {
            c = 3;
        }
    }
    switch (c) {
        case 1:
            popTitle.textContent = "Voluptate et sed tempora qui quisquam.";
            availableAmount.textContent = avAmo1;
            popup.classList.add('open');
            inputValue.value = '';
            break;
        case 2:
            popTitle.textContent = "Consectetur ipsam qui magnam minus dolore ut fugit.";
            availableAmount.textContent = avAmo2;
            popup.classList.add('open');
            inputValue.value = '';
            break;
        case 3:
            popTitle.textContent = "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.";
            availableAmount.textContent = avAmo3;
            popup.classList.add('open');
            inputValue.value = '';
            break;
    }
};
btnPop.onclick = () => {
    if (inputValue.value > 0 && inputValue.value <= avAmo1 && c == 1) {
        document.querySelector('.amount').textContent = `£${total - +inputValue.value}`;
        total = total - +inputValue.value;
        availableAmount.textContent = (avAmo1 - inputValue.value);
        avAmo1 = availableAmount.textContent;
        invValue[0].textContent = 'Invested';
        popupClose();
    } else if (inputValue.value > 0 && inputValue.value <= avAmo2 && c == 2) {
        document.querySelector('.amount').textContent = `£${total - +inputValue.value}`;
        total = total - +inputValue.value;
        availableAmount.textContent = (avAmo2 - inputValue.value);
        avAmo2 = availableAmount.textContent;
        invValue[1].textContent = 'Invested';
        popupClose();
    } else if (inputValue.value > 0 && inputValue.value <= avAmo2 && c == 3) {
        document.querySelector('.amount').textContent = `£${total - +inputValue.value}`;
        total = total - +inputValue.value;
        availableAmount.textContent = (avAmo3 - inputValue.value);
        avAmo3 = availableAmount.textContent;
        invValue[2].textContent = 'Invested';
        popupClose();
    }

}
//total amount------------------
let total = 238456;
const v = "£";
let totAmount = document.querySelector('.amount');
totAmount.textContent = `${v} ${total}`;
//total amount------------------
//close popup ------------------

cls.onclick = popupClose;

function popupClose() {
    popup.classList.remove('open');
}
//close popup -----------------
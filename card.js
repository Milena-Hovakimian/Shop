const cardName = document.getElementById('#name');
const btn = document.querySelector('.component .credit-card .valid-button');
const card = document.querySelector('.component .credit-card .line .card');
const n1 = document.querySelector('.component .credit-card .line .n1');
const n2 = document.querySelector('.component .credit-card .line .n2');
const n3 = document.querySelector('.component .credit-card .line .n3');
const cvv = document.querySelector('.component .credit-card .line .tall');
btn.onclick = () => {
    if(cardName.value == 'Milena Hovakimyan' && card.value == 'acba' && n1.value == '1111' && n2.value == '2222' && n3.value == '3333' && cvv.value == '123') {
        alert('succesfull login, You can buy something from our shop');
        window.close();
    }  
}

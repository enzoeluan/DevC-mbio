const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const inputValue = document.getElementById('value-real');
const moedasel = document.getElementById('value-cambio');
const result = document.getElementById('result');
let valueConverter = 0;

function handleSubmit(e) {
    e.preventDefault();
    
    if(!inputValue.value || inputValue.value < 0){
        alert("Valor inválido");
        return;
    } else if(!moedasel.value) {
        alert("Escolha uma moeda");
        return;
    }

    converter();
};

function converter() {
    if(moedasel.value === 'Eur'){
        valueConverter = inputValue.value * 5.33;
        result.innerHTML = formatar('pt-BR', 'EUR');

        animateResult()
        
    } else if(moedasel.value == 'dol') {
        valueConverter = inputValue.value * 5.03;
        result.innerHTML = formatar('en-US', 'USD');

        animateResult()
    }

    inputValue.value = '';
    moedasel.value = '';
};

function formatar(Locale , currency) {
    const value = valueConverter.toLocaleString(`${Locale}`, {style: 'currency', currency: `${currency}`})
    return `<span>&#128525</span> ${value}<span>&#128525</span> `;
};

function animateResult() {
    return result.animate([
        {transform: 'translateY(-150px)'},
        {transform: 'translateY(0px)'},
    ], {duration: 500})
}
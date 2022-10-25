var budget = 1000;
var numeroAcquisti = 0;
var totale = 0;
function spendiCash(){
    while(budget>=200){
        let acquisti = Math.floor((Math.random() * 100) + 20);
        budget = budget - acquisti
        document.getElementById('lista').innerHTML += `<li>Spesa: ${acquisti} <br>  Budget aggiornato: ${budget}</li>`;
        numeroAcquisti++;
        document.getElementById('totale').innerHTML = `Numero acquisti: 
        ${numeroAcquisti}`;
        totale = totale + acquisti;
        document.getElementById('valore').innerHTML = `Valore acquisti: 
        ${totale}`;
        document.getElementById('fermati').innerHTML = `Fermati porca puttana`;
    }
}
function reset(){
    document.getElementById('lista').innerHTML = '';
    document.getElementById('totale').innerHTML = '';
    document.getElementById('valore').innerHTML = '';
    document.getElementById('fermati').innerHTML = '';
}
var change = true;
function changeF(){
    if (change){
        spendiCash();
        change=!change; 
    }   
    else {
        reset();
        
    }
}

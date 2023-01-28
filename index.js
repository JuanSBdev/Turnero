

function clic(){
    let comanda = document.createElement('p');
    let texto = document.getElementById('formu-texto');
    comanda.innerHTML = texto.value;
    let div1 = document.getElementById('div1');
    div1.innerHTML = '';
    div1.appendChild(comanda);
    console.log(texto);
   }


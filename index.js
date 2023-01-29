

function clic(){
    let comanda = document.createElement('p');
    let texto = document.getElementById('formu-texto');
    let inicio = document.getElementById('inicio');
    comanda.innerHTML = texto.value;
    let div1 = document.getElementById('div1');
    comanda.setAttribute('id', 'inicio');
    inicio.innerHTML = '';
    div1.appendChild(comanda);
    console.log(texto);
   }


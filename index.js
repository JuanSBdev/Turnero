

function clic(){
    let comanda = document.createElement('p');
    comanda.setAttribute('id','p-creado');
    let texto = document.getElementById('formu-texto');
    if (texto.value < 999 ) {
        comanda.innerHTML = texto.value;
    let div1 = document.getElementById('div1');
    div1.innerHTML = "";
    div1.appendChild(comanda);
    console.log(texto);
    initAnimation();
    setTimeout(() => {
        endAnimation()
    }, 7000);
    } else {
        alert('Solo admite 3 cifras')
    }
    
        
   };

   function initAnimation(){
    let comandante = document.getElementById('p-creado');
    comandante.className ='animacion';
    comandante.style.position='relative'
   console.log('inicios')
}
function endAnimation(){
    let comandante = document.getElementById('p-creado');

    comandante.className ='comanda1';
    console.log('finales')
    comandante.style.position='relative'

}

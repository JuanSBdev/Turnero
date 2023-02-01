document.oncontextmenu = function(){return false;}
function play() {
    var audio = document.getElementById("cling");
    audio.play();}

function clic(){
    //play();
  

    
    let comanda = document.createElement('p');
    comanda.setAttribute('id','p-creado');
    let texto = document.getElementById('formu-texto');
    if (texto.value < 999 ) {
        comanda.innerHTML = texto.value;
        guarda();
        let div1 = document.getElementById('div1');
        div1.innerHTML = "";
        div1.appendChild(comanda);
        

        let comanda2 = document.createElement('p');
    comanda2.setAttribute('id','p-creado2');
    let anterior = document.getElementById('comanda-ant');
    let comanda1 = document.getElementById('p-creado');
        console.log(texto.value);
        initAnimation();
    setTimeout(() => {
        endAnimation()
    }, 7000);
} else {
    alert('Solo admite 3 cifras')
}

        
   };
   function guarda(){
    let guardado = document.getElementById('p-creado');
    guardado.innerHTML = comanda;
    console.log(guardado)
   }

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

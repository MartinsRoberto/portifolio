const btnMobile = document.querySelector('.btn-mobile')
const navList = document.querySelector('.nav-list')

btnMobile.addEventListener('click', ()=>{
  navList.classList.toggle('active')
})
navList.addEventListener('click', function(e){
  navList.classList.toggle('active')
})



function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 100 * i);
  });
}


const titulo = document.querySelector('.meu-nome');
typeWriter(titulo);
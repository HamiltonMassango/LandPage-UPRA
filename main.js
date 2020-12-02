
// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("modelFoto");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('section');
const nav = document.querySelector('nav');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 40 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
  if (window.scrollY > nav.offsetTop) {
    console.log('passei')
    return nav.classList.add('nav');
  }
  return nav.classList.remove('nav');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

const modo = document.querySelector('#modo');

modo.addEventListener('click', () => {
  if (!!modo.classList.contains('fa-toggle-off')){
    document.querySelector('body').setAttribute('class', 'dracula');
    modo.classList.remove('fa-toggle-off');
    modo.classList.add('fa-toggle-on');
    nav.classList.add('i-OFF');
    return modo.classList.add('i-ON');
  }
  document.querySelector('body').classList.remove('dracula');
    modo.classList.add('fa-toggle-off');
    modo.classList.remove('fa-toggle-on');
    nav.classList.remove('i-OFF');
    return modo.classList.remove('i-ON');
  
});


var img = ['espaço1.jpg', 'espaço2.jpg', 'g3.jpg', 'g5.jpg'];
var x = 0;

setInterval(() => {
  if(x == 4 ){
    x = 0;
  }
  document.querySelector('main img').setAttribute('src','./img/' + img[x]);
  x++;
  
}, 2000); 

modal1.onclick = function() {
  modal1.style.display = "none";
}


function enviarDados(e) {
  e.preventDefault();
  var name = document.querySelector('#name');
  var email = document.querySelector('#email');
  var mensagem = document.querySelector('#assunto');

  console.log({name.value, email.value, mensagem.value});
}

var Enviar = document.querySelector('form #enviar');

Enviar.addEventListener('click', enviarDados);

document.addEventListener('click', (e)=>{
  const el = e.target;
  if (el.classList.contains('imgGaleria')){
    modal1.style.display = "block";
    document.querySelector('.imgGaleriaShow').setAttribute('src', e.target.getAttribute('src'));

    return ;
  }
});
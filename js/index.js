import {Router} from './router.js';

const router = new Router();
router.add('/', "/pages/home.html");
router.add('/paginaUniverso', '/pages/paginaUniverso.html');
router.add('/paginaExploracao', '/pages/paginaExploracao.html');
router.add(404, '/pages/404.html');

router.handle();

window.onpopstate = () => router.handle();

window.route = () => router.route();

document.addEventListener('DOMContentLoaded',function (){
  var caminhoAtual = window.location.pathname;

  var links = document.querySelector("nav a");

  links.forEach(function (link){
    link.classList.remove('ativo')
  });

  var linkAtivo = document.querySelector('nav a[href="' + caminhoAtual + '"]');
  if(linkAtivo){
    linkAtivo.classList.add('ativo');
  }

});
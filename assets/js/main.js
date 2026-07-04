// main.js — pequenas interações (toggle do menu, anos do rodapé)
(function(){
  function qs(sel){return document.querySelector(sel)}
  var btn = qs('.nav-toggle')
  var nav = qs('.nav')
  if(btn && nav){
    btn.addEventListener('click', function(){
      nav.style.display = nav.style.display === 'flex' || nav.style.display === 'block' ? 'none' : 'flex'
    })
  }
  var y = new Date().getFullYear()
  if(qs('#year')) qs('#year').textContent = y
  if(qs('#year-wiki')) qs('#year-wiki').textContent = y
  if(qs('#year-forum')) qs('#year-forum').textContent = y
})();

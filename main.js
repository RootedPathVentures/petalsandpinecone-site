// Petals & Pinecone Studio — minimal interactivity
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menu-btn');
  var links = document.getElementById('nav-links');
  if (btn && links) {
    btn.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }
});

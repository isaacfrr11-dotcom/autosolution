// Scroll suave para links do menu
document.querySelectorAll('nav ul li a').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    if(this.getAttribute('href').startsWith("#")){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    }
  });
});

// Animação hover nos cards
const cards=document.querySelectorAll('.card');
cards.forEach(card=>{
  card.addEventListener('mouseenter',()=>{card.style.transform='translateY(-10px)';card.style.boxShadow='0 20px 30px rgba(0,0,0,0.2)';});
  card.addEventListener('mouseleave',()=>{card.style.transform='translateY(0)';card.style.boxShadow='0 8px 20px rgba(0,0,0,0.1)';});
});

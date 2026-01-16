// ----------  MOBILE MENU  ----------
const hamburger=document.querySelector('.hamburger');
const navMenu=document.querySelector('.nav-menu');
hamburger.onclick=()=>navMenu.classList.toggle('active');

// ----------  NAVBAR ON SCROLL  ----------
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('navbar');
  if(window.scrollY>80)nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// ----------  SCROLL REVEAL  ----------
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting)entry.target.classList.add('visible');
  });
},{threshold:.2});
document.querySelectorAll('.slide-in').forEach(el=>observer.observe(el));

// ----------  RIPPLE EFFECT  ----------
document.querySelectorAll('.btn-ripple').forEach(btn=>{
  btn.addEventListener('click',function(e){
    let x=e.clientX-e.target.offsetLeft;
    let y=e.clientY-e.target.offsetTop;
    let ripple=document.createElement('span');
    ripple.style.left=`${x}px`;
    ripple.style.top=`${y}px`;
    this.appendChild(ripple);
    setTimeout(()=>ripple.remove(),600);
  });
});

// ----------  DYNAMIC YEAR  ----------
document.getElementById('year').textContent=new Date().getFullYear();

// ----------  SMOOTH SCROLL FOR NAV  ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    const tgt=document.querySelector(this.getAttribute('href'));
    if(tgt)tgt.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// ----------  FORM SUBMIT  ----------
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  alert('Message sent! We will reply via WhatsApp shortly.');
  e.target.reset();
});
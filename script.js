// script.js - Hotak Script interactions (typing, contact demo, hamburger, matrix)

/* Typing effect (hero) */
document.addEventListener('DOMContentLoaded',()=>{
  const el = document.querySelector('.type-js');
  if(el){
    const phrases = ['Learn Ethical Hacking','Build Projects','Get Certified','Join Hotak Community'];
    let i=0, j=0, forward=true;
    setInterval(()=>{
      const p = phrases[i];
      el.textContent = p.slice(0,j) + (Date.now()%2? '|' : ' ');
      if(forward){
        j++; 
        if(j>p.length) {
          forward=false;
          setTimeout(() => {},100)
        }
      } else {
        j--; 
        if(j===0) {
          forward=true;
          i=(i+1)%phrases.length
        }
      }
    },120);
  }

  /* contact form demo */
  const f = document.querySelector('#contactForm');
  if(f) {
    f.addEventListener('submit', e=>{
      e.preventDefault();
      alert('Submited');
      f.reset();
    });
  }

  /* mobile hamburger menu toggle */
  const ham = document.querySelector('.hamburger');
  const mnav = document.querySelector('.mobile-nav');
  if(ham && mnav) {
    ham.addEventListener('click', () => {
      const visible = mnav.style.display === 'block';
      mnav.style.display = visible ? 'none' : 'block';
    });

    // hide on click outside
    document.addEventListener('click', (ev) => {
      if(!ev.target.closest('.hamburger') && !ev.target.closest('.mobile-nav')){
        if(mnav) mnav.style.display = 'none';
      }
    });
  }
});

/* Matrix background animation */
(function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let width,height;
  const letters = '01\u30A0\u30A1\u30A2\u30A3\u30A4\u30A5\u30A6\u30A7\u30A8\u30A9\u30AA\u30AB\u30AD\u30AE';
  let fontSize = 14;
  let columns;
  let drops;

  function init() {
    resize();
    window.addEventListener('resize', resize);
    for(let i=0;i<columns;i++) drops[i]=1;
    loop();
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    fontSize = Math.max(12, Math.min(18, Math.floor(width/120)));
    columns = Math.floor(width / fontSize);
    drops = new Array(columns).fill(1);
    ctx.font = fontSize + 'px monospace';
  }
  function loop() {
    ctx.fillStyle = 'rgba(2,6,6,0.06)';
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle = 'rgba(0,255,102,0.18)';
    ctx.shadowColor = 'rgba(0,255,102,0.25)';
    ctx.shadowBlur = 6;
    for(let i=0;i<columns;i++) {
      const text = letters.charAt(Math.floor(Math.random()*letters.length));
      ctx.fillText(text, i*fontSize, drops[i]*fontSize);
      if(drops[i]*fontSize > height && Math.random() > 0.975) drops[i]=0;
      drops[i]++;
    }
    requestAnimationFrame(loop);
  } init();
})();

// const courseLinks = document.getElementsByClassName('course');
// const heading = courseLinks.querySelector('h4');
// const para = courseLinks.querySelector('p');

// // Mouse hover (mouseenter)
// courseLinks.addEventListener('mouseenter', () => {
//   courseLinks.style.background = 'linear-gradient(90deg, var(--neon), var(--neon-2))';
//   heading.style.color = '#001409';
//   para.style.color = '#001409';
// });

// courseLinks.addEventListener('mouseleave', () => {
//   courseLinks.style.background = '';
//   heading.style.color = '';
//   para.style.color = '';
// });
import './style.css';

const icon = (name) => {
  const paths = {
    arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
    moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    external: '<path d="M14 3h7v7m0-7L10 14"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ''}</svg>`;
};

const projects = [
  { n:'01', title:'เว็บไซต์แนะนำตัว', type:'Web Design', desc:'ออกแบบหน้าเว็บที่นำเสนอข้อมูลส่วนตัวและผลงานอย่างเป็นระบบ', color:'peach', tag:'UI / UX' },
  { n:'02', title:'อินโฟกราฟิกความรู้', type:'Graphic Design', desc:'สรุปเนื้อหาที่ซับซ้อนให้เข้าใจง่ายด้วยภาพและการจัดวาง', color:'lilac', tag:'Visual' },
  { n:'03', title:'ระบบบันทึกรายรับรายจ่าย', type:'Web Development', desc:'แนวคิดเว็บแอปสำหรับบันทึกและติดตามข้อมูลทางการเงิน', color:'mint', tag:'JavaScript' }
];

function header(active) {
  return `<header class="header"><a class="brand" href="#home" aria-label="หน้าแรก"><span class="brand-mark">N.</span><span>MY PORTFOLIO<span class="brand-dot">.</span></span></a><button class="menu-toggle" aria-label="เปิดเมนู">${icon('menu')}</button><nav class="nav">${[['home','หน้าแรก'],['about','เกี่ยวกับฉัน'],['projects','ผลงาน'],['contact','ติดต่อ']].map(([id,label])=>`<a class="${active===id?'active':''}" href="#${id}">${label}</a>`).join('')}</nav><button class="theme-toggle" aria-label="เปลี่ยนธีม">${icon('moon')}</button></header>`;
}

function footer() {
  return `<footer class="footer"><a class="brand" href="#home"><span class="brand-mark">N.</span><span>MY PORTFOLIO<span class="brand-dot">.</span></span></a><p>ออกแบบด้วยความตั้งใจ · © ${new Date().getFullYear()}</p><a class="back-top" href="#home">กลับขึ้นด้านบน ↑</a></footer>`;
}

function homePage() {
  return `<main id="home">
    <section class="hero section-wrap"><div class="hero-copy"><p class="eyebrow"><span class="live-dot"></span> HELLO, WELCOME TO MY WORLD</p><h1>สวัสดีค่ะ<br>ฉันชื่อ <span class="gradient-text">นันท์นภัส</span></h1><p class="hero-desc">นักเรียนที่สนใจเทคโนโลยี การออกแบบ และการสร้างสรรค์สิ่งใหม่ ๆ ฉันเชื่อว่าทุกไอเดียสามารถเติบโตเป็นผลงานที่ดีได้</p><div class="hero-actions"><a class="btn btn-primary" href="#projects">ชมผลงาน ${icon('arrow')}</a><a class="btn btn-ghost" href="#about">รู้จักฉันมากขึ้น</a></div><div class="hero-meta"><span>${icon('pin')} Thailand</span><span>เปิดรับโอกาสในการเรียนรู้</span></div></div><div class="hero-art"><div class="art-glow"></div><div class="profile-card"><div class="profile-top"><span>CREATIVE MIND</span><span>✳</span></div><div class="avatar-placeholder"><span>N.</span><i class="spark spark-one">✦</i><i class="spark spark-two">✳</i></div><div class="profile-bottom"><div><strong>Nuntnapat</strong><small>Student · Creator</small></div><span class="status-pill">● Available</span></div></div><div class="floating-note note-one">✦ Keep creating</div><div class="floating-note note-two">IDEAS → REALITY</div></div></section>
    <section class="ticker"><div>CREATIVE THINKING <span>✳</span> DESIGN <span>✳</span> TECHNOLOGY <span>✳</span> LEARNING <span>✳</span> CREATIVE THINKING <span>✳</span> DESIGN <span>✳</span></div></section>
    <section class="section-wrap intro-strip"><div><p class="eyebrow">A LITTLE INTRODUCTION</p><h2>เรียนรู้ ทดลอง<br>และเติบโตไปทุกวัน</h2></div><p>พื้นที่เล็ก ๆ ที่รวบรวมตัวตน ความสนใจ และผลงานที่ฉันภูมิใจ ตั้งแต่ไอเดียแรกจนกลายเป็นสิ่งที่จับต้องได้</p><a class="text-link" href="#about">อ่านเรื่องราวของฉัน ${icon('arrow')}</a></section>
    <section class="section-wrap featured" id="projects"><div class="section-heading"><div><p class="eyebrow">SELECTED WORKS</p><h2>ผลงานที่อยากให้ชม<span class="gradient-text">.</span></h2></div><a class="text-link" href="#projects">ดูทั้งหมด ${icon('arrow')}</a></div><div class="project-grid">${projectCards()}</div></section>
    <section class="cta section-wrap"><div><p class="eyebrow">LET'S CONNECT</p><h2>มีไอเดียดี ๆ<br>มาสร้างไปด้วยกันไหม?</h2></div><a class="btn btn-primary" href="#contact">พูดคุยกับฉัน ${icon('arrow')}</a></section>
  </main>`;
}

function projectCards() {
  return projects.map(p=>`<article class="project-card"><a href="#projects" class="project-visual ${p.color}"><span class="project-number">${p.n} / 03</span><span class="visual-symbol">${p.color==='peach'?'◒':p.color==='lilac'?'✳':'⌘'}</span><span class="visual-label">${p.tag}</span><span class="project-open">${icon('arrow')}</span></a><div class="project-info"><div><p class="project-type">${p.type}</p><h3>${p.title}</h3><p>${p.desc}</p></div><span class="project-index">${p.n}</span></div></article>`).join('');
}

function aboutPage() {
  return `<main class="page-main section-wrap"><div class="page-intro"><p class="eyebrow">GET TO KNOW ME</p><h1>เกี่ยวกับ<span class="gradient-text">ฉัน.</span></h1><p>ตัวตน ความสนใจ และสิ่งที่กำลังเรียนรู้ในทุก ๆ วัน</p></div><div class="about-layout"><div class="about-visual"><div class="about-avatar">N<span>✦</span></div><div class="about-caption">CURIOUS BY NATURE<br>CREATIVE BY CHOICE</div></div><div class="about-content"><p class="eyebrow">MY STORY</p><h2>ยินดีที่ได้รู้จักนะคะ</h2><p>ฉันคือนันท์นภัส นักเรียนที่ชอบเรียนรู้สิ่งใหม่ โดยเฉพาะเรื่องเทคโนโลยี การออกแบบเว็บไซต์ และการสื่อสารไอเดียผ่านงานสร้างสรรค์</p><p>ฉันสนุกกับการทดลองเครื่องมือใหม่ ๆ การแก้ปัญหา และการพัฒนาทักษะของตัวเองทีละขั้น เป้าหมายคือการเปลี่ยนสิ่งที่เรียนรู้ให้กลายเป็นผลงานที่มีประโยชน์</p><div class="quick-facts"><div><strong>01</strong><span>ชอบเรียนรู้</span></div><div><strong>02</strong><span>ใส่ใจรายละเอียด</span></div><div><strong>03</strong><span>พร้อมพัฒนา</span></div></div></div></div><section class="skills-section"><p class="eyebrow">WHAT I'M EXPLORING</p><h2>ทักษะและความสนใจ</h2><div class="skill-list">${[['Web Design','การออกแบบเว็บไซต์'],['Technology','เทคโนโลยีและดิจิทัล'],['Creativity','ความคิดสร้างสรรค์'],['Communication','การสื่อสารและนำเสนอ']].map(([a,b],i)=>`<div class="skill-row"><span>0${i+1}</span><strong>${a}</strong><small>${b}</small><span>↗</span></div>`).join('')}</div></section></main>`;
}

function projectsPage() {
  return `<main class="page-main section-wrap"><div class="page-intro"><p class="eyebrow">THINGS I'VE CREATED</p><h1>ผลงาน<span class="gradient-text">.</span></h1><p>รวมโปรเจกต์และไอเดียที่ได้ลงมือทำและเรียนรู้ระหว่างทาง</p></div><div class="project-grid all-projects">${projectCards()}</div><div class="note-box"><span>✳</span><p><strong>ทุกผลงานเริ่มต้นจากการลงมือทำ</strong><br>หน้านี้สามารถเพิ่มภาพจริง ลิงก์ Demo และรายละเอียดของแต่ละโปรเจกต์ได้ภายหลัง</p></div></main>`;
}

function contactPage() {
  return `<main class="page-main section-wrap"><div class="page-intro"><p class="eyebrow">SAY HELLO</p><h1>มาติดต่อ<span class="gradient-text">กัน.</span></h1><p>ยินดีรับฟังคำแนะนำ แลกเปลี่ยนไอเดีย หรือพูดคุยเรื่องโปรเจกต์ใหม่ ๆ</p></div><div class="contact-layout"><div class="contact-copy"><h2>เริ่มต้นบทสนทนา<br>ดี ๆ ได้ที่นี่</h2><p>สามารถติดต่อผ่านช่องทางด้านล่าง หรือส่งข้อความผ่านแบบฟอร์มได้เลย</p><div class="contact-detail"><span class="contact-icon">${icon('mail')}</span><div><small>EMAIL</small><strong>your.email@example.com</strong></div></div><div class="contact-detail"><span class="contact-icon">${icon('pin')}</span><div><small>LOCATION</small><strong>Thailand</strong></div></div><p class="form-hint">* เปลี่ยนอีเมลตัวอย่างเป็นอีเมลที่ใช้งานจริงก่อนเผยแพร่</p></div><form class="contact-form" id="contactForm"><label>ชื่อของคุณ<input name="name" placeholder="กรอกชื่อ" required></label><label>อีเมล<input name="email" type="email" placeholder="name@example.com" required></label><label>ข้อความ<textarea name="message" rows="5" placeholder="เขียนข้อความที่นี่..." required></textarea></label><button class="btn btn-primary" type="submit">เตรียมส่งข้อความ ${icon('arrow')}</button><p class="form-result" id="formResult" aria-live="polite"></p></form></div></main>`;
}

const pages = { home: homePage, about: aboutPage, projects: projectsPage, contact: contactPage };
function render() {
  const route = location.hash.replace('#','') || 'home';
  const current = pages[route] ? route : 'home';
  document.querySelector('#app').innerHTML = `${header(current)}${pages[current]()}${footer()}`;
  document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));
  document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav').classList.remove('open')));
  document.querySelector('.theme-toggle').addEventListener('click',()=>{
    document.body.classList.toggle('light');
    localStorage.setItem('portfolio-theme',document.body.classList.contains('light')?'light':'dark');
    document.querySelector('.theme-toggle').innerHTML=icon(document.body.classList.contains('light')?'moon':'sun');
  });
  if (current==='contact') document.querySelector('#contactForm').addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const subject=encodeURIComponent('ติดต่อจากเว็บไซต์ Portfolio: '+data.get('name'));
    const body=encodeURIComponent(`ชื่อ: ${data.get('name')}\nอีเมล: ${data.get('email')}\n\n${data.get('message')}`);
    document.querySelector('#formResult').textContent='กำลังเปิดโปรแกรมอีเมลเพื่อส่งข้อความ...';
    location.href=`mailto:your.email@example.com?subject=${subject}&body=${body}`;
  });
  window.scrollTo(0,0);
}
if(localStorage.getItem('portfolio-theme')==='light') document.body.classList.add('light');
window.addEventListener('hashchange',render);
render();

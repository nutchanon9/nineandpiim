// ===== FLOATING PETALS =====
(function spawnPetals() {
  const container = document.getElementById('petals');
  const symbols = ['🌸', '🌷', '✿', '❀', '💮', '🌺'];
  const count = 18;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'petal';
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (8 + Math.random() * 10) + 's';
    el.style.animationDelay = (Math.random() * 12) + 's';
    el.style.fontSize = (0.9 + Math.random() * 1.2) + 'rem';
    container.appendChild(el);
  }
})();

// ===== TIMELINE SCROLL REVEAL =====
(function initScrollReveal() {
  const items = document.querySelectorAll('.timeline-item');
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.15 }
  );
  items.forEach(item => observer.observe(item));
})();

// ===== GALLERY =====
const mediaItems = [
  { type: 'video', src: 'media/Clip1.mov',  caption: '🥂 เดทแรกเปิดตัวแบบเลิศๆ' },
  { type: 'video', src: 'media/Clip2.mov',  caption: '🚪 นางมาเซอไพรซ์ที่คอนโด ยังไม่ทันเก็บห้องเลย' },
  { type: 'video', src: 'media/Clip3.mov',  caption: '🍽️ เปิดตัวกินข้าวกับพ่อเลย' },
  { type: 'video', src: 'media/Clip4.mov',  caption: '💕 เดทกันต่อ' },
  { type: 'video', src: 'media/Clip5.mov',  caption: '📸 รูปคู่สักหน่อย คุณแฟนน่ารักมาก' },
  { type: 'video', src: 'media/Clip6.mov',  caption: '💅 ดูแลพี่พิมตัดเล็บทำเล็บให้ ช่างยังไม่คล่องนะ' },
  { type: 'video', src: 'media/Clip8.mov',  caption: '🏜️ Grand Canyon ราชบุรี ไกลหน่อยแต่พี่พิมน่ารักมาก' },
  { type: 'video', src: 'media/Clip9.mov',  caption: '🌿 Toscana เขาใหญ่ ห้องดี บรรยากาศดี พี่พิมสวยด้วย' },
  { type: 'video', src: 'media/Clip10.mov', caption: '🍷 Dinner ตกดึก อาหารแพงแต่อร่อย' },
  { type: 'video', src: 'media/Clip11.mov', caption: '🏍️ ขี่ ATV ต่อ นางชอบมากยิ่งลุยๆ เลิฟเลย' },
  { type: 'video', src: 'media/Clip13.mov', caption: '🌲 เที่ยวเขาใหญ่ต่อ บรรยากาศดีเพราะมีเตงอยู่ด้วย' },
  { type: 'video', src: 'media/Clip14.mov', caption: '🙏 ปีชงน้องนาย นางพาแก้ชง เทคแคร์ดีมาก' },
  { type: 'video', src: 'media/Clip15.mov', caption: '🚗 ระหว่างทางไปแก้ปีชง Story คู่สักหน่อย' },
  { type: 'video', src: 'media/Clip16.mov', caption: '🛒 พิมชอบนั่งรถเข็นทุกครั้งที่มา IKEA' },
  { type: 'video', src: 'media/Clip17.mov', caption: '🏃 นางชวนออกกำลังกายด้วยกัน ผอมด้วยกัน น่ารัก' },
  { type: 'video', src: 'media/Clip18.mov', caption: '😏 แกล้งลูกเม่อ' },
  { type: 'video', src: 'media/Clip19.mov', caption: '🍗 พี่พิมพามากิน CQK ครั้งแรก สั่งมาเยอะเกินกินไม่หมด 555' },
  { type: 'video', src: 'media/Clip22.mov', caption: '✈️ ไต้หวัน! ทริปต่างประเทศครั้งแรกของเรา' },
  { type: 'video', src: 'media/Clip23.mov', caption: '🤳 ไม่มีคนถ่ายให้ เลยตั้งกล้องเป็นวิดีโอแทน' },
  { type: 'video', src: 'media/Clip24.mov', caption: '🎰 พี่พิมเทพเซียนตู้ครีบ ได้มาสิบกว่าตัว!' },
  { type: 'video', src: 'media/Clip25.mov', caption: '🕹️ Arcade ต่อ สนุกมากเลย' },
  { type: 'video', src: 'media/Clip26.mov', caption: '🌏 เที่ยวต่อแบบผู้ประสบภัย' },
  { type: 'image', src: 'media/Clip27.jpg', caption: '🚠 รูปคู่บนกระเช้า พวกเราน่ารักเนอะ' },
  { type: 'video', src: 'media/Clip28.mov', caption: '🇻🇳 เวียดนาม! ลองนวดครั้งแรก ฟินมาก' },
  { type: 'video', src: 'media/Clip29.mov', caption: '⛳ ขี้เกียจเดิน เลยจ้างนั่งรถกอล์ฟ' },
  { type: 'video', src: 'media/Clip30.mov', caption: '🏙️ กลับมาเที่ยวสยาม บรรยากาศดี ลมเย็น' },
  { type: 'video', src: 'media/Clip31.mov', caption: '💑 รูปคู่ต่อ สวีทต่อ' },
  { type: 'video', src: 'media/Clip32.mov', caption: '👰 นี่เพื่อนเจ้าสาวหรือเจ้าสาวเนี่ย เธอสวยมาก' },
  { type: 'video', src: 'media/Clip33.mov', caption: '😂 อยากให้เตงยิ้ม เลยทำตัว pro ให้ดู' },
  { type: 'video', src: 'media/Clip34.mov', caption: '🎢 Universal Studio Beijing ตื่นเต้นสุดๆ' },
  { type: 'video', src: 'media/Clip35.mov', caption: '🎥 บ่นไปเรื่อยอะ คนถือกล้อง' },
  { type: 'video', src: 'media/Clip36.mov', caption: '🧋 เดินเดทหน้าโรงแรม Hey Tea ของเด็ดเลย' },
  { type: 'video', src: 'media/Clip37.mov', caption: '🏯 พระราชวังต้องห้าม หลังถอดชุดราชวังแล้ว เตงสวยมาก' },
  { type: 'video', src: 'media/Clip38.mov', caption: '👘 แต่งชุดด้วยกัน ตอนแรกเขินๆแต่ก็ยอม เป็นความทรงจำที่ดีมาก ❤️' },
];

(function buildGallery() {
  if (mediaItems.length === 0) return;

  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';

  mediaItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';

    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.caption || '';
      img.loading = 'lazy';
      div.appendChild(img);
      div.addEventListener('click', () => openImageModal(item.src, item.caption));
    } else if (item.type === 'video') {
      const thumb = document.createElement('video');
      thumb.src = item.src + '#t=0.5';
      thumb.preload = 'metadata';
      thumb.muted = true;
      thumb.playsInline = true;
      div.appendChild(thumb);

      const btn = document.createElement('div');
      btn.className = 'play-btn';
      btn.innerHTML = '▶';
      div.appendChild(btn);

      div.addEventListener('click', () => openVideoModal(item.src));
    }

    if (item.caption) {
      const cap = document.createElement('div');
      cap.className = 'gallery-caption';
      cap.textContent = item.caption;
      div.appendChild(cap);
    }

    grid.appendChild(div);
  });
})();

// ===== VIDEO MODAL =====
const modal    = document.getElementById('videoModal');
const video    = document.getElementById('modalVideo');
const closeBtn = document.getElementById('modalClose');
const backdrop = document.getElementById('modalBackdrop');

function openVideoModal(src) {
  video.src = src;
  video.style.display = 'block';
  document.getElementById('modalImg').style.display = 'none';
  modal.classList.add('open');
  video.play();
}

function openImageModal(src, caption) {
  const img = document.getElementById('modalImg');
  img.src = src;
  img.style.display = 'block';
  video.style.display = 'none';
  modal.classList.add('open');
}

function closeVideoModal() {
  modal.classList.remove('open');
  video.pause();
  video.src = '';
}

closeBtn.addEventListener('click', closeVideoModal);
backdrop.addEventListener('click', closeVideoModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideoModal(); });

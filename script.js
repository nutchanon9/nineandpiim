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
// To add media: put image/video files in the media/ folder
// then add entries to this array.
// type: 'image' or 'video'
// src: path relative to index.html, e.g. 'media/photo1.jpg'
// caption: short text shown on hover (optional)
const mediaItems = [
  // { type: 'image', src: 'media/photo1.jpg', caption: 'Grand Canyon ราชบุรี' },
  // { type: 'video', src: 'media/clip1.mp4',  caption: 'คลิปด้วยกัน' },
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
    } else if (item.type === 'video') {
      const thumb = document.createElement('video');
      thumb.src = item.src;
      thumb.preload = 'metadata';
      thumb.muted = true;
      div.appendChild(thumb);

      const btn = document.createElement('div');
      btn.className = 'play-btn';
      btn.textContent = '▶';
      div.appendChild(btn);

      div.addEventListener('click', () => openVideoModal(item.src));
    }

    grid.appendChild(div);
  });
})();

// ===== VIDEO MODAL =====
const modal   = document.getElementById('videoModal');
const video   = document.getElementById('modalVideo');
const closeBtn = document.getElementById('modalClose');
const backdrop = document.getElementById('modalBackdrop');

function openVideoModal(src) {
  video.src = src;
  modal.classList.add('open');
  video.play();
}

function closeVideoModal() {
  modal.classList.remove('open');
  video.pause();
  video.src = '';
}

closeBtn.addEventListener('click', closeVideoModal);
backdrop.addEventListener('click', closeVideoModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideoModal(); });

const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');
const navLinks = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.forEach(link => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Menüyü aç');
  menuToggle.textContent = '☰';
}));

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent(`NOVA FORGE iletişim: ${data.get('topic')}`);
  const body = encodeURIComponent(
    `Merhaba NOVA FORGE,\n\nAd: ${data.get('name')}\nE-posta: ${data.get('email')}\nKonu: ${data.get('topic')}\n\nMesaj:\n${data.get('message') || '(Mesaj eklenmedi)'}\n`
  );
  document.getElementById('formFeedback').textContent = 'E-posta taslağı açılıyor. Göndermek için e-posta uygulamanda onay vermen gerekir.';
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});

const sections = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const typingEl = section.querySelector('.typing');
    
    if (rect.top < window.innerHeight - 150 && rect.bottom > 0) {
      if (!section.classList.contains('active')) {
        section.classList.add('active');

        if (typingEl && !typingEl.classList.contains('typed')) {
          const text = typingEl.getAttribute("data-text");
          typingEffect(typingEl, text);
          typingEl.classList.add('typed');
        }
      }
    } else {
      section.classList.remove('active');

      if (typingEl) {
        typingEl.textContent = "";
        typingEl.classList.remove('typed');
      }
    }
  });
});

function typingEffect(el, text, speed = 75) {
  let i = 0;
  el.textContent = "";

  const type = () => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };
  type();
}

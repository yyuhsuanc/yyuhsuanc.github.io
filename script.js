const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const body = document.body;

function updateTextLanguage(lang) {
  body.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-zh]').forEach((el) => {
    const zh = el.getAttribute('data-zh');
    const en = el.getAttribute('data-en');
    el.textContent = lang === 'en' ? en : zh;
  });
  langToggle.textContent = lang === 'en' ? '中文' : 'EN';
}

function toggleLanguage() {
  const lang = body.getAttribute('data-lang') === 'en' ? 'zh' : 'en';
  updateTextLanguage(lang);
}

function toggleTheme() {
  const isDark = body.classList.toggle('theme-light');
  body.classList.toggle('theme-dark', !isDark);
  themeToggle.textContent = isDark ? '☀︎' : '☾';
}

langToggle.addEventListener('click', toggleLanguage);
themeToggle.addEventListener('click', toggleTheme);

const animateElements = () => {
  if (gsap && gsap.utils) {
    gsap.registerPlugin(ScrollTrigger);
    const heroItems = gsap.utils.toArray('.hero-copy > *');
    gsap.from('.hero-visual', {
      opacity: 0,
      y: 40,
      duration: 1.4,
      ease: 'power3.out',
      delay: 0.2,
    });

    gsap.from(heroItems, {
      opacity: 0,
      y: 40,
      duration: 1.1,
      ease: 'power3.out',
      stagger: 0.12,
    });

    gsap.from('.achievement-card', {
      scrollTrigger: {
        trigger: '.achievements',
        start: 'top 80%',
      },
      opacity: 0,
      y: 44,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.14,
    });

    gsap.from('.contact-card', {
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
      },
      opacity: 0,
      y: 38,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.12,
    });

    gsap.to('.visual-glow', {
      backgroundPosition: '80% 10%',
      duration: 8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  }
};

window.addEventListener('load', () => {
  updateTextLanguage('zh');
  animateElements();
});
